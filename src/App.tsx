import { SyntheticEvent, useCallback, useEffect, useState } from "react";
import "./App.css";
import { getCards } from "./api";
import { Card, Spinner, ScrollDetector, Search } from "./components";
import { CardProps, FilterSearchParams } from "./interfaces";
import { useDebounce } from "./hooks/useDebounce";

interface InitialState {
	cards: CardProps[];
	isLoading: boolean;
	page: number;
	filter: FilterSearchParams;
	isComplete: boolean;
}

function App() {
	const [state, setState] = useState<InitialState>({
		page: 1,
		cards: [],
		isLoading: true,
		filter: {},
		isComplete: false,
	});
	const debouncedFilter = useDebounce(state.filter, 500);
	useEffect(() => {
		getCards(state.page, debouncedFilter)
			.then((cards) => {
				if (cards.length === 0) {
					setState((prev) => ({ ...prev, isComplete: true }));
				} else {
					setState((prev) => ({
						...prev,
						cards: [...prev.cards, ...cards],
					}));
				}
			})
			.finally(() => setState((prev) => ({ ...prev, isLoading: false })));
	}, [state.page, debouncedFilter]);

	const handleNextPage = useCallback(() => {
		if (!state.isLoading) {
			setState((prev) => ({
				...prev,
				page: prev.page + 1,
				isLoading: true,
			}));
		}
	}, [state.isLoading]);

	const handleSearch = useCallback((event: SyntheticEvent) => {
		event.preventDefault();
		event.persist();
		const value = (event.target as HTMLInputElement).value;
		setState((prev) => ({
			...prev,
			cards: [],
			filter: { ...prev.filter, title: value },
			isLoading: true,
			page: 1,
		}));
	}, []);

	return (
		<main>
			<h1>Card catalog</h1>
			<Search onSearch={handleSearch} />
			<div className="mt-10 flex flex-wrap justify-center gap-10">
				{state.cards.map((card) => (
					<Card key={card.id} {...card} />
				))}
			</div>
			<Spinner isLoading={state.isLoading} className="mt-10" />
			{state.isComplete && !state.isLoading ? (
				<p className="text-center mt-10">No more cards</p>
			) : (
				<ScrollDetector onScrollToBottom={handleNextPage} />
			)}
		</main>
	);
}

export default App;

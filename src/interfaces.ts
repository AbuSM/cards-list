import { SyntheticEvent } from "react";

interface CardProps {
	id: number;
	title: string;
	url: string;
	thumbnailUrl?: string;
}

interface SpinnerProps {
	isLoading: boolean;
	className?: string;
}

interface FilterSearchParams {
	id?: number;
	title?: string;
}

interface ScrollDetectorProps {
	onScrollToBottom: () => void;
}

interface SearchProps {
	onSearch: (event: SyntheticEvent) => void;
}

export type {
	CardProps,
	SpinnerProps,
	ScrollDetectorProps,
	FilterSearchParams,
	SearchProps,
};

import { CardProps, FilterSearchParams } from "../interfaces";
import { ALBUMS_URL, PHOTOS_URL } from "../constants";

const fetcher = async (url: string) => {
	try {
		const response = await fetch(url);
		return await response.json();
	} catch (err) {
		console.error(err);
		return [];
	}
};

export const getCards = async (
	page: number = 1,
	filter?: FilterSearchParams
): Promise<CardProps[]> => {
	if (filter?.id || filter?.title) {
		return await fetcher(
			`${PHOTOS_URL}?${filter.id ? `id=${filter.id}` : ""}${
				filter.title ? `q=${filter.title}` : ""
			}&_page=${page}&_limit=50`
		);
	}
	return await fetcher(`${ALBUMS_URL}/${page}/photos`).then((res) => {
		setTimeout(() => {}, 500);
		return res;
	});
};

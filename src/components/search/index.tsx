import { type FC, memo } from "react";
import { type SearchProps } from "../../interfaces";

export const Search: FC<SearchProps> = memo(({ onSearch }) => (
	<form>
		<div className="flex items-center gap-5 justify-center mt-20">
			<label className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-300">
				Search by title:
			</label>
			<input
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				type="text"
				onChange={onSearch}
			/>
		</div>
	</form>
));

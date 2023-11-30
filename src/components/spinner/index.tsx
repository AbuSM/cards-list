import type { FC } from "react";
import { SpinnerProps } from "../../interfaces";
import cl from "classnames";

export const Spinner: FC<SpinnerProps> = ({ isLoading, className }) => {
	if (!isLoading) return null;
	return (
		<div className={cl("flex justify-center items-center", className)}>
			<div className="animate-spin rounded-full h-6 w-6 border-b-2 border-yellow-500"></div>
		</div>
	);
};

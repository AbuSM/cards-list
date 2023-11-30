import { type FC, memo } from "react";
import { type CardProps } from "../../interfaces";

export const Card: FC<CardProps> = memo(({ url, title, thumbnailUrl }) => {
	return (
		<div className="bg-white p-2 max-w-[150px] flex flex-col items-center">
			<img
				src={url}
				alt={title}
				srcSet={`
                ${thumbnailUrl} 150w,
                ${thumbnailUrl} 300w,
                ${thumbnailUrl} 768w,
                ${thumbnailUrl} 1280w,
                ${thumbnailUrl} 1536w,
            `}
			/>
			<h2 className="text-black mt-5">{title}</h2>
		</div>
	);
});

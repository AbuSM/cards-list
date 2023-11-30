import React, { useCallback, useEffect, useState } from "react";
import { ScrollDetectorProps } from "../../interfaces";

export const ScrollDetector: React.FC<ScrollDetectorProps> = ({
	onScrollToBottom,
}) => {
	const [isAtBottom, setIsAtBottom] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const distanceToBottom =
				document.documentElement.scrollHeight -
				window.innerHeight -
				window.scrollY;

			const isBottom = distanceToBottom < 1;

			setIsAtBottom(isBottom);
		};
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleScrollToButton = useCallback(() => {
		onScrollToBottom();
		setIsAtBottom(false);
	}, [onScrollToBottom]);

	if (isAtBottom) {
		handleScrollToButton();
	}

	return null;
};

export default ScrollDetector;

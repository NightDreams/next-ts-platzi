import { useEffect, useRef, useState } from 'react';
import type { ImgHTMLAttributes } from 'react';
// componet types
type TLazyImageProps = {
	src: string;
	onLazyLoad?: (img: HTMLImageElement) => void;
};
// native tag  type
type TImgNative = ImgHTMLAttributes<HTMLImageElement>;

// type combination
type Props = TLazyImageProps & TImgNative;

export const LazyImage = ({
	src,
	onLazyLoad,
	...imgProps
}: Props): JSX.Element => {
	const node = useRef<HTMLImageElement>(null);
	const [isLazyLoaded, setIsLazyLoaded] = useState(false);
	const [currentSrc, setCurrentSrc] = useState(
		'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4='
	);

	useEffect(() => {
		if (isLazyLoaded) {
			return;
		}

		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (!entry.isIntersecting || !node.current) {
					return;
				}
				setCurrentSrc(src);
				// disconect IO, set filter true to skip useEffect for elements loaded
				observer.disconnect();
				setIsLazyLoaded(true);

				if (typeof onLazyLoad === 'function') {
					onLazyLoad(node.current);
				}
			});
		});
		if (node.current) {
			observer.observe(node.current);
		}
		return () => {
			observer.disconnect;
		};
	}, [src, onLazyLoad, isLazyLoaded]);

	return <img ref={node} src={currentSrc} {...imgProps} />;
};

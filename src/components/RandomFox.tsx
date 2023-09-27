import { useEffect, useRef } from 'react';

type Props = {
	image: string;
};

export const RandomFox = ({ image }: Props): JSX.Element => {
	const node = useRef<HTMLImageElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					console.log('Intersecting');
				}
			});
		});

		if (node.current) {
			observer.observe(node.current);
		}

		return () => {
			observer.disconnect;
		};
	}, []);

	return (
		<img
			ref={node}
			width="320"
			height="auto"
			src={image}
			className="mx-auto rounded-md bg-gray-300"
		/>
	);
};

// generate a random number with js between 1 and 23

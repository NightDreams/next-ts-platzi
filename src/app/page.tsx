'use client';
import { RandomFox } from '@components/RandomFox';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
	// generate simple unique id
	const generateId = (): string => {
		return (
			Math.random().toString(36).substring(2, 15) +
			Math.random().toString(36).substring(2, 15)
		);
	};
	const randomNumber = () => Math.floor(Math.random() * 123) + 1;

	type ImageItem = {
		id: string;
		url: string;
	};

	const [images, setImages] = useState<Array<ImageItem>>([
		{
			id: generateId(),
			url: `https://randomfox.ca/images/${randomNumber()}.jpg`,
		},
		{
			id: generateId(),
			url: `https://randomfox.ca/images/${randomNumber()}.jpg`,
		},
		{
			id: generateId(),
			url: `https://randomfox.ca/images/${randomNumber()}.jpg`,
		},
	]);

	return (
		<main>
			{images.map(({ id, url }) => (
				<div className="p-4" key={id}>
					<RandomFox image={url} />
				</div>
			))}
		</main>
	);
}

'use client';
import { RandomFox } from '@components/RandomFox';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
	const randomNumber = () => Math.floor(Math.random() * 123) + 1;
	const [images, setImages] = useState<Array<string>>([
		`https://randomfox.ca/images/${randomNumber()}.jpg`,
		`https://randomfox.ca/images/${randomNumber()}.jpg`,
		`https://randomfox.ca/images/${randomNumber()}.jpg`,
	]);

	const image = `https://randomfox.ca/images/${randomNumber()}.jpg`;

	return (
		<main>
			{images.map((image, index) => (
				<div className="p-4" key={index}>
					<RandomFox image={image} />
				</div>
			))}
		</main>
	);
}

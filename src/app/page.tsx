'use client';
import { LazyImage } from '@components/RandomFox';
import Image from 'next/image';
import { MouseEventHandler, useState } from 'react';
import { random } from 'lodash';
// generate simple unique id

const generateId = (): string => {
	return (
		Math.random().toString(36).substring(2, 15) +
		Math.random().toString(36).substring(2, 15)
	);
};
// random number from 1 to 122

const randomNumber = () => random(1, 122);

export default function Home() {
	const [images, setImages] = useState<Array<TImageItem>>([]);

	/**
	 * The function `addNewFox` generates a unique id and a random url for a fox image, and adds it to the
	 * `images` array.
	 */
	const addNewFox: MouseEventHandler<HTMLButtonElement> = () => {
		const id = generateId();
		const url = `https://randomfox.ca/images/${randomNumber()}.jpg`;
		setImages([...images, { id, url }]);
	};

	return (
		<main>
			<div className="m-4 flex justify-center">
				<button
					onClick={addNewFox}
					className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
				>
					Add new fox
				</button>
			</div>

			{images.map(({ id, url }, index) => (
				<div className="p-4" key={id}>
					<LazyImage
						src={url}
						width="320"
						height="auto"
						className="mx-auto rounded-md bg-gray-300"
						onClick={() => {
							console.log('holi!');
						}}
						onLazyLoad={img => {
							console.log(`Image #${index + 1} cargada. Nodo:`, img);
						}}
					/>
				</div>
			))}
		</main>
	);
}

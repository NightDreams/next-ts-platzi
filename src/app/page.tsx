import { RandomFox } from '@components/RandomFox';
import Image from 'next/image';

export default function Home() {
	const randomNumber = () => Math.floor(Math.random() * 123) + 1;
	const image = `https://randomfox.ca/images/${randomNumber()}.jpg`;

	return (
		<main>
			<RandomFox image={image} />
		</main>
	);
}

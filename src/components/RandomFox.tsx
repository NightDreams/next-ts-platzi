export const RandomFox = (): JSX.Element => {
	const randomNumber = () => Math.floor(Math.random() * 123) + 1;
	const image = `https://randomfox.ca/images/${randomNumber()}.jpg`;

	return (
		<img
			width="320"
			height="auto"
			src={image}
			className="mx-auto rounded-md bg-gray-300"
		/>
	);
};

// generate a random number with js between 1 and 23

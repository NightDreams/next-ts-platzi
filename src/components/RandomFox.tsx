type Props = {
	image: string;
};

export const RandomFox = ({ image }: Props): JSX.Element => {
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

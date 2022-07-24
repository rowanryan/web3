type Props = {
	onClick?: () => any;
	children: React.ReactNode;
};

const WalletButton = (props: Props) => {
	return (
		<button
			className="flex justify-between items-center bg-zinc-700 hover:bg-zinc-600 transition-colors duration-75 ease-linear p-4 rounded-md w-full text-rr-text-light"
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
};

export default WalletButton;

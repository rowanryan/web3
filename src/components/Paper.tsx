type Props = {
	children?: React.ReactNode;
};

const Paper = (props: Props) => {
	return (
		<div className="px-5 pt-5 h-20 bg-rr-paper-dark rounded-md border border-rr-border-light">
			{props.children}
		</div>
	);
};

export default Paper;

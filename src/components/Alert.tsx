type Props = {
	text: string;
	title?: string;
	children?: React.ReactNode;
};

const Alert = (props: Props) => {
	return (
		<div className="px-5 py-4 bg-red-500/5 border border-red-500/20 rounded-md">
			{Boolean(props.title) && (
				<p className="font-body font-semibold text-red-400 mb-2">
					{props.title}
				</p>
			)}
			<p className="font-body text-sm text-red-400">{props.text}</p>
			{props.children}
		</div>
	);
};

export default Alert;

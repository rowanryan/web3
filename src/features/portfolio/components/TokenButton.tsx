import classNames from "classnames";

type Props = {
	label: string;
	onClick: () => any;
	variant?: "default" | "danger";
};

const TokenButton = (props: Props) => {
	const buttonClass = classNames(
		"font-display",
		"font-medium",
		"text-[0.7rem]",
		"py-1",
		"transition-colors",
		"duration-75",
		"ease-linear",
		{
			"text-blue-500 hover:text-blue-400":
				!props.variant || props.variant === "default",
		},
		{ "text-red-500 hover:text-red-400": props.variant === "danger" }
	);

	return (
		<button className={buttonClass} onClick={props.onClick}>
			{props.label}
		</button>
	);
};

export default TokenButton;

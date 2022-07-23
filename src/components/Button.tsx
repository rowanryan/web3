import classNames from "classnames";

type Props = {
	label: string;
	href?: string;
	targetBlank?: boolean;
	onClick?: () => any;
	variant?: "default" | "danger";
};

const Button = (props: Props) => {
	const buttonClass = classNames(
		"font-display",
		"font-semibold",
		"text-sm",
		"py-1",
		{
			"text-blue-500 hover:text-blue-300":
				!props.variant || props.variant === "default",
			"text-red-500 hover:text-red-300": props.variant === "danger",
		}
	);

	if (props.href)
		return (
			<a
				href={props.href}
				target={props.targetBlank ? "_blank" : undefined}
				className={buttonClass}
			>
				{props.label}
			</a>
		);

	return (
		<button className={buttonClass} onClick={props.onClick}>
			{props.label}
		</button>
	);
};

export default Button;

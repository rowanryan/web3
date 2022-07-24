import classNames from "classnames";

type Props = {
	label: string;
	href?: string;
	targetBlank?: boolean;
	onClick?: () => any;
	variant?: "default" | "danger";
	fullWidth?: boolean;
	type?: "button" | "submit" | "reset";
};

const Button = (props: Props) => {
	const buttonClass = classNames(
		"font-display",
		"font-semibold",
		"text-sm",
		"py-2",
		"rounded",
		"transition-colors",
		"duration-75",
		"ease-linear",
		"border-2",
		"text-blue-500 hover:text-rr-text-light",
		{ "w-full": props.fullWidth },
		{
			"border-blue-500 hover:bg-blue-500":
				!props.variant || props.variant === "default",
			"border-red-500 hover:bg-red-500": props.variant === "danger",
		}
	);

	if (props.href)
		return (
			<a
				href={props.href}
				rel="noreferrer"
				target={props.targetBlank ? "_blank" : undefined}
				className={buttonClass}
			>
				{props.label}
			</a>
		);

	return (
		<button
			type={props.type}
			className={buttonClass}
			onClick={props.onClick}
		>
			{props.label}
		</button>
	);
};

export default Button;

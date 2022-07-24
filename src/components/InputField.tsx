import React from "react";

type Props = {
	label: string;
	name: string;
	required?: boolean;
	type?: string;
	min?: number;
	step?: number;
	pattern?: string;
	onKeyDown?: (evt: any) => any;
	error?: string;
};

const InputField = (props: Props) => {
	return (
		<>
			<label
				htmlFor={props.name}
				className="inline-block font-display text-rr-text-light text-sm mb-2"
			>
				{props.label}
			</label>

			<input
				id={props.name}
				required={props.required}
				name={props.name}
				type={props.type || "text"}
				min={props.min}
				step={props.step}
				pattern={props.pattern}
				onKeyDown={props.onKeyDown}
				className="w-full font-body text-rr-text-light text-sm border border-rr-border-light rounded-sm bg-zinc-700/50 focus:outline-none focus:border-blue-500 px-3 py-2"
			/>

			{Boolean(props.error) && (
				<p className="font-body text-red-500 font-medium text-xs mt-2 pl-[1px]">
					{props.error}
				</p>
			)}
		</>
	);
};

export default InputField;

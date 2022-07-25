import React from "react";

type Props = {
	label: string;
	name: string;
	required?: boolean;
	type?: string;
	min?: number;
	step?: string | number;
	pattern?: string;
	onKeyDown?: (evt: any) => any;
	error?: string;
	extra?: React.ReactNode;
};

const InputField = (props: Props) => {
	return (
		<>
			<div className="flex justify-between items-center mb-2">
				<label
					htmlFor={props.name}
					className="inline-block font-display text-rr-text-light text-sm"
				>
					{props.label}
				</label>

				{props.extra}
			</div>

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

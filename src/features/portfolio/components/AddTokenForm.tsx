import { useState } from "react";

import Button from "src/components/Button";
import InputField from "src/components/InputField";
import { z } from "zod";
import usePortfolioState from "../hooks/usePortfolioState";

const Token = z.object({
	symbol: z
		.string({
			required_error: "Symbol is required.",
			invalid_type_error: "Symbol must be text.",
		})
		.trim()
		.min(1, { message: "Symbol is required." }),
	decimals: z
		.number({
			required_error: "Decimals is required.",
			invalid_type_error: "Decimals must be a number.",
		})
		.int({ message: "Decimals must be a whole number." })
		.positive({ message: "Decimals must be a positive number." }),
	address: z
		.string({
			required_error: "Address is required.",
			invalid_type_error: "Address must be text.",
		})
		.min(1, { message: "Address is required." })
		.regex(new RegExp(/^0x[a-fA-F0-9]{40}$/), {
			message: "Address must be a valid address.",
		}),
});

type Props = {
	onDone?: () => any;
};

const AddTokenForm = (props: Props) => {
	const [portfolioState, setPortfolioState] = usePortfolioState();

	const [formErrors, setFormErrors] = useState<{
		symbol?: string[];
		decimals?: string[];
		address?: string[];
	}>();

	const onSubmit = (evt: any) => {
		evt.preventDefault();

		setFormErrors({});

		const newToken: Token = {
			symbol: evt.target.symbol.value,
			decimals: Number(evt.target.decimals.value),
			address: evt.target.address.value,
		};

		const result = Token.safeParse(newToken);

		if (!result.success)
			return setFormErrors(result.error.formErrors.fieldErrors);

		if (props.onDone) {
			setPortfolioState([...portfolioState, result.data]);
			return props.onDone();
		}

		return setPortfolioState([...portfolioState, result.data]);
	};

	return (
		<form
			onSubmit={onSubmit}
			className="grid grid-cols-1 md:grid-cols-2 gap-4"
		>
			<div className="col-span-2 md:col-span-1">
				<InputField
					label="Symbol"
					name="symbol"
					error={
						formErrors?.symbol ? formErrors.symbol[0] : undefined
					}
				/>
			</div>

			<div className="col-span-2 md:col-span-1">
				<InputField
					label="Decimals"
					name="decimals"
					onKeyDown={evt => {
						if (
							![
								"1",
								"2",
								"3",
								"4",
								"5",
								"6",
								"7",
								"8",
								"9",
								"0",
								"Backspace",
								"Enter",
								"Delete",
							].includes(evt.key)
						)
							return evt.preventDefault();
					}}
					error={
						formErrors?.decimals
							? formErrors.decimals[0]
							: undefined
					}
				/>
			</div>

			<div className="col-span-2">
				<InputField
					label="Token address"
					name="address"
					error={
						formErrors?.address ? formErrors.address[0] : undefined
					}
				/>
			</div>

			<div className="col-span-2 mt-2">
				<Button fullWidth label="Add token" type="submit" />
			</div>
		</form>
	);
};

export default AddTokenForm;

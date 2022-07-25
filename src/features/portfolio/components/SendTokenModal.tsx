import { useState } from "react";
import { z } from "zod";
import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";

import Modal from "src/components/Modal";
import useSendTokenModal from "../hooks/useSendTokenModal";
import InputField from "src/components/InputField";
import Button from "src/components/Button";
import sendToken from "../api/sendToken";
import useTransactionModal from "src/hooks/useTransactionModal";

type Props = {
	data: TokenWithBalance;
	onDone: () => any;
};

const SendTokenModal = (props: Props) => {
	const web3 = useWeb3React();

	const { setNewState: setSendTokenModalOpen } = useSendTokenModal();
	const { setNewState: setTransactionModalOpen } = useTransactionModal();

	const [formErrors, setFormErrors] = useState<{
		recipient?: string[];
		amount?: string[];
	}>({});

	const maxValue = parseFloat(
		ethers.utils.formatUnits(props.data.balance, props.data.decimals)
	);

	const SendTokenBody = z.object({
		amount: z
			.number({
				required_error: "Amount is required.",
				invalid_type_error: "Amount must be a number.",
			})
			.gt(0, { message: "Amount must be a positive number." })
			.max(maxValue, { message: `Cannot be more than ${maxValue}` })
			.positive({ message: "Amount must be a positive number." }),
		recipient: z
			.string({
				required_error: "Address is required.",
				invalid_type_error: "Address must be text.",
			})
			.min(1, { message: "Address is required." })
			.regex(new RegExp(/^0x[a-fA-F0-9]{40}$|.*\.eth$/), {
				message: "Address must be a valid hex or ens address.",
			}),
	});

	const onSubmit = async (evt: any) => {
		evt.preventDefault();

		setFormErrors({});

		const sendTokenBody = {
			recipient: evt.target.recipient.value,
			amount: Number(evt.target.amount.value),
		};

		const result = SendTokenBody.safeParse(sendTokenBody);

		if (!result.success) {
			console.log(result.error.formErrors.fieldErrors);
			return setFormErrors(result.error.formErrors.fieldErrors);
		}

		const finalData = {
			token: props.data.address,
			recipient: result.data.recipient,
			amount: props.data.address
				? ethers.utils.parseUnits(
						result.data.amount.toString(),
						props.data.decimals
				  )
				: ethers.utils.parseEther(result.data.amount.toString()),
		};

		setTransactionModalOpen({
			open: true,
			fn: sendToken(
				web3,
				finalData.token,
				finalData.recipient,
				finalData.amount
			),
		});

		return props.onDone();
	};

	return (
		<Modal
			title={`Send ${props.data.symbol}`}
			onClose={() => setSendTokenModalOpen({ open: false })}
		>
			<form onSubmit={onSubmit} className="grid grid-cols-1 gap-4">
				<div className="col-span-1">
					<InputField
						label="Recipient address"
						name="recipient"
						error={
							formErrors.recipient
								? formErrors.recipient[0]
								: undefined
						}
					/>
				</div>

				<div className="col-span-1">
					<InputField
						label="Amount"
						name="amount"
						type="number"
						step="any"
						error={
							formErrors.amount ? formErrors.amount[0] : undefined
						}
						extra={
							<p className="font-body text-xs text-rr-text-light/60">
								max:{" "}
								{ethers.utils.formatUnits(
									props.data.balance,
									props.data.decimals
								)}
							</p>
						}
					/>
				</div>

				<div className="col-span-1 mt-2">
					<Button fullWidth label="Send" type="submit" />
				</div>
			</form>
		</Modal>
	);
};

export default SendTokenModal;

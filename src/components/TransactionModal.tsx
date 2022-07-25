import { useEffect, useState } from "react";

import useTransactionModal from "src/hooks/useTransactionModal";
import usePortfolio from "src/features/portfolio/hooks/usePortfolio";
import Modal from "./Modal";
import TextButton from "./TextButton";

import { IoCheckmarkDoneCircle, IoCloseCircle } from "react-icons/io5";
import { AiOutlineLoading } from "react-icons/ai";

type Props = {
	fn: any;
};

const TransactionModal = (props: Props) => {
	const [transactionState, setTransactionState] = useState<{
		hash?: string;
		completed?: boolean;
		error?: string;
	}>({});
	const { setNewState: setTransactionModalState } = useTransactionModal();
	const { forceUpdate } = usePortfolio();

	const awaitTransaction = async () => {
		try {
			const tx = await props.fn;
			setTransactionState({ hash: tx.hash, completed: false });
			await tx.wait();
			setTransactionState({ hash: tx.hash, completed: true });

			return forceUpdate();
		} catch (error: any) {
			if (error.code === 4001) {
				return setTransactionState({
					error: "Transaction was cancelled.",
				});
			}

			return setTransactionState({ error: "Something went wrong." });
		}
	};

	useEffect(() => {
		awaitTransaction();
	}, []);

	return (
		<Modal
			title="Transaction submitted"
			onClose={() => setTransactionModalState({ open: false })}
		>
			{transactionState.error ? (
				<div className="flex items-center mb-4">
					<IoCloseCircle className="w-6 h-6 mr-3 text-red-500" />
					<p className="font-body text-rr-text-light text-center">
						{transactionState.error}
					</p>
				</div>
			) : transactionState.completed ? (
				<>
					<div className="flex items-center mb-4">
						<IoCheckmarkDoneCircle className="w-6 h-6 mr-3 text-green-500" />
						<p className="font-body text-rr-text-light text-center">
							Transaction has been confirmed.
						</p>
					</div>

					<TextButton
						targetBlank
						label="View on Etherscan"
						href={`https://ropsten.etherscan.io/tx/${transactionState.hash}`}
					/>
				</>
			) : transactionState.hash ? (
				<>
					<div className="flex items-center mb-4">
						<AiOutlineLoading className="w-6 h-6 mr-3 text-rr-text-light animate-spin" />
						<p className="font-body text-rr-text-light text-center">
							Awaiting transaction...
						</p>
					</div>

					<p className="font-body text-rr-text-light/70 text-sm mb-4">
						Your transaction has been submitted. Please wait for
						confirmation. In the meantime, you can follow your
						transaction on the blockchain by clicking the link
						below.
					</p>

					<TextButton
						targetBlank
						label="View on Etherscan"
						href={`https://ropsten.etherscan.io/tx/${transactionState.hash}`}
					/>
				</>
			) : (
				<div className="flex items-center mb-4">
					<AiOutlineLoading className="w-6 h-6 mr-3 text-rr-text-light animate-spin" />
					<p className="font-body text-rr-text-light text-center">
						Please sign the transaction in your wallet.
					</p>
				</div>
			)}
		</Modal>
	);
};

export default TransactionModal;

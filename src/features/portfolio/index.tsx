import Alert from "src/components/Alert";
import Paper from "src/components/Paper";
import TokenBalance from "./components/TokenBalance";
import usePortfolio from "./hooks/usePortfolio";
import TextButton from "src/components/TextButton";
import AddTokenModal from "./components/AddTokenModal";
import useAddTokenModal from "./hooks/useAddTokenModal";
import SendTokenModal from "./components/SendTokenModal";
import useSendTokenModal from "./hooks/useSendTokenModal";

const Portfolio = () => {
	const { data, isLoading, isError, removeToken } = usePortfolio();
	const { state: addTokenModalOpen, setNewState: setAddTokenModalOpen } =
		useAddTokenModal();
	const { state: sendTokenModalState, setNewState: setSendTokenModalState } =
		useSendTokenModal();

	if (isLoading)
		return (
			<Paper>
				<p className="font-body text-rr-text-light text-center text-sm mb-5">
					Loading...
				</p>
			</Paper>
		);

	if (isError)
		return (
			<Alert text="Something went wrong. Please refresh the page and try again." />
		);

	return (
		<>
			<Paper>
				<div className="grid grid-cols-1 gap-y-6 mb-5">
					{data.map((token: TokenWithBalance, index: number) => (
						<TokenBalance
							key={index}
							native={!token.address}
							symbol={token.symbol}
							address={token.address}
							balance={token.balance}
							decimals={token.decimals}
							onSend={
								index > 0
									? () =>
											setSendTokenModalState({
												open: true,
												data: token,
											})
									: undefined
							}
							onDelete={
								index > 0
									? () => removeToken(token.address)
									: undefined
							}
						/>
					))}
				</div>

				<div className="flex justify-center mb-4">
					<TextButton
						label="Add token"
						onClick={() => setAddTokenModalOpen(true)}
					/>
				</div>
			</Paper>

			{addTokenModalOpen && <AddTokenModal />}
			{sendTokenModalState.open && (
				<SendTokenModal
					data={sendTokenModalState.data!}
					onDone={() => setSendTokenModalState({ open: false })}
				/>
			)}
		</>
	);
};

export default Portfolio;

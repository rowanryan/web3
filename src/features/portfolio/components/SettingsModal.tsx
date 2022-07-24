import Alert from "src/components/Alert";
import Modal from "src/components/Modal";
import usePortfolio from "../hooks/usePortfolio";
import usePortfolioState from "../hooks/usePortfolioState";
import useSettingsModal from "../hooks/useSettingsModal";
import AddTokenForm from "./AddTokenForm";
import TokenBalance from "./TokenBalance";

const PortfolioModal = () => {
	const { data, isLoading, isError } = usePortfolio();
	const [portfolioState, setPortfolioState] = usePortfolioState();
	const { setNewState: setSettingsModalOpen } = useSettingsModal();

	const deleteToken = (address: string) => {
		const newState = portfolioState.filter(
			(token: any) => token.address !== address
		);

		return setPortfolioState(newState);
	};

	return (
		<Modal
			title="Your tokens"
			subtitle="Add or remove tokens"
			onClose={() => setSettingsModalOpen(false)}
		>
			{isLoading ? (
				<p className="font-body text-rr-text-light text-center text-sm mb-5">
					Loading...
				</p>
			) : isError ? (
				<Alert text="Something went wrong. Please refresh the page and try again." />
			) : (
				<>
					<div className="grid grid-cols-1 gap-y-6">
						{data.map((token: TokenWithBalance, index: number) => (
							<TokenBalance
								key={index}
								native={!token.address}
								symbol={token.symbol}
								address={token.address}
								balance={index > 0 ? token.balance : undefined}
								decimals={token.decimals}
								onDelete={
									index > 0
										? () => deleteToken(token.address)
										: undefined
								}
							/>
						))}
					</div>

					<hr className="h-[1px] bg-rr-text-light opacity-10 mt-8 my-6" />

					<AddTokenForm />
				</>
			)}
		</Modal>
	);
};

export default PortfolioModal;

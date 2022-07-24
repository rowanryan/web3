import Alert from "src/components/Alert";
import Paper from "src/components/Paper";
import SettingsModal from "./components/SettingsModal";
import useSettingsModal from "./hooks/useSettingsModal";
import AddTokenModal from "./components/AddTokenModal";
import useAddTokenModal from "./hooks/useAddTokenModal";
import TokenBalance from "./components/TokenBalance";
import usePortfolio from "./hooks/usePortfolio";
import TextButton from "src/components/TextButton";

const Portfolio = () => {
	const { data, isLoading, isError } = usePortfolio();
	const { state: settingsModalOpen } = useSettingsModal();
	const { state: addTokenModalOpen, setNewState: setAddTokenModalOpen } =
		useAddTokenModal();

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
					{data.map((token: any, index: number) => (
						<TokenBalance
							key={index}
							native={!token.address}
							symbol={token.symbol}
							address={token.address}
							balance={token.balance}
							decimals={token.decimals}
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

			{Boolean(settingsModalOpen) && <SettingsModal />}
			{Boolean(addTokenModalOpen) && <AddTokenModal />}
		</>
	);
};

export default Portfolio;

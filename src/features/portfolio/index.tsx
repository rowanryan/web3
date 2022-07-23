import Alert from "src/components/Alert";
import Button from "src/components/Button";
import Paper from "src/components/Paper";
import TokenBalance from "./components/TokenBalance";
import usePortfolio from "./hooks/usePortfolio";

const Portfolio = () => {
	const { data, isLoading, isError } = usePortfolio();

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
		<Paper>
			<div className="grid grid-cols-1 gap-y-6 mb-6">
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
				<Button label="Add token" />
			</div>
		</Paper>
	);
};

export default Portfolio;

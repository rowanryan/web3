import { BigNumber } from "ethers";
import formatUnits from "src/utils/formatUnits";
import truncateAddress from "src/utils/truncateAddress";

type Props = {
	native?: boolean;
	address?: string;
	symbol: string;
	balance: BigNumber;
	decimals: number;
};

const TokenBalance = (props: Props) => {
	return (
		<div className="flex justify-between items-center">
			<div className="flex flex-col">
				<p className="font-body text-rr-text-light font-semibold">
					{props.symbol}
				</p>
				<p className="font-body text-gray-300 text-sm">
					{props.native
						? "Native currency"
						: truncateAddress(props.address?.toLowerCase(), 7)}
				</p>
			</div>

			<p className="font-body text-rr-text-light font-semibold">
				{formatUnits(props.balance, props.decimals)}
			</p>
		</div>
	);
};

export default TokenBalance;

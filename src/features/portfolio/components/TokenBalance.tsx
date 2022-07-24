import { BigNumber } from "ethers";
import formatUnits from "src/utils/formatUnits";
import truncateAddress from "src/utils/truncateAddress";
import { IoTrashBinOutline } from "react-icons/io5";

type Props = {
	native?: boolean;
	address?: string;
	symbol: string;
	balance?: BigNumber;
	decimals: number;
	onDelete?: () => any;
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

			{props.onDelete ? (
				<button className="w-5 h-5" onClick={props.onDelete}>
					<IoTrashBinOutline className="text-rr-text-light/70 hover:text-rr-text-light transition-colors duration-75 ease-linear w-full h-full" />
				</button>
			) : props.balance ? (
				<p className="font-body text-rr-text-light font-semibold">
					{formatUnits(props.balance, props.decimals)}
				</p>
			) : null}
		</div>
	);
};

export default TokenBalance;

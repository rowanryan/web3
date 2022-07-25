import { BigNumber } from "ethers";

import formatUnits from "src/utils/formatUnits";
import truncateAddress from "src/utils/truncateAddress";
import TokenButton from "./TokenButton";

type Props = {
	native?: boolean;
	address?: string;
	symbol: string;
	balance: BigNumber;
	decimals: number;
	onSend?: () => any;
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

			<div className="flex flex-col items-end">
				<p className="font-body text-rr-text-light font-semibold">
					{formatUnits(props.balance, props.decimals)}
				</p>

				<div className="flex items-center gap-x-2">
					{props.onSend && (
						<TokenButton label="Send" onClick={props.onSend} />
					)}

					{props.onSend && props.onDelete && (
						<div className="w-1 h-1 rounded-full bg-zinc-500" />
					)}

					{props.onDelete && (
						<TokenButton
							label="Remove"
							variant="danger"
							onClick={props.onDelete}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default TokenBalance;

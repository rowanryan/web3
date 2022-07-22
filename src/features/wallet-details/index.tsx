import truncateAddress from "src/utils/truncateAddress";
import copyToClipboard from "src/utils/copyToClipboard";
import { useWeb3React } from "@web3-react/core";

type Props = {
	account: string | null | undefined;
};

const WalletDetails = (props: Props) => {
	const web3 = useWeb3React();

	const copyAddress = () => {
		copyToClipboard(web3.account!);

		return alert("Copied to clipboard!");
	};

	return (
		<>
			<p className="font-body text-gray-400 font-semibold mb-4">
				{truncateAddress(web3.account, 7)}
			</p>

			<div className="flex flex-wrap items-center mb-12">
				<a
					href={`https://etherscan.io/address/${web3.account}`}
					target="_blank"
					className="font-display font-semibold text-sm text-blue-500 mr-6"
				>
					View on Etherscan
				</a>
				{Boolean(web3.account) ? (
					<button
						className="font-display font-semibold text-sm text-blue-500 mr-6"
						onClick={copyAddress}
					>
						Copy address
					</button>
				) : null}
				<button
					onClick={web3.deactivate}
					className="font-display font-semibold text-sm text-red-500"
				>
					Disconnect
				</button>
			</div>
		</>
	);
};

export default WalletDetails;

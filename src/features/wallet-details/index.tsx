import truncateAddress from "src/utils/truncateAddress";
import copyToClipboard from "src/utils/copyToClipboard";
import { useWeb3React } from "@web3-react/core";
import TextButton from "src/components/TextButton";

const WalletDetails = () => {
	const web3 = useWeb3React();

	const copyAddress = () => {
		copyToClipboard(web3.account!);

		return alert("Copied to clipboard!");
	};

	const onDisconnect = () => {
		localStorage.setItem("isWalletConnected", "false");

		return web3.deactivate();
	};

	return (
		<>
			<p className="font-body text-gray-400 font-semibold mb-4">
				{truncateAddress(web3.account, 7)}
			</p>

			<div className="flex flex-wrap items-center">
				<div className="mr-6">
					<TextButton
						targetBlank
						label="View on Etherscan"
						href={`https://etherscan.io/address/${web3.account}`}
					/>
				</div>
				{Boolean(web3.account) ? (
					<div className="mr-6">
						<TextButton
							label="Copy address"
							onClick={copyAddress}
						/>
					</div>
				) : null}
				<TextButton
					label="Disconnect"
					variant="danger"
					onClick={onDisconnect}
				/>
			</div>
		</>
	);
};

export default WalletDetails;

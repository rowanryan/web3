import { useWeb3React } from "@web3-react/core";
import type { NextPage } from "next";
import ConnectWallet from "src/features/connect-wallet";
import truncateAddress from "src/utils/truncateAddress";

import Layout from "src/layouts/main";
import copyToClipboard from "src/utils/copyToClipboard";

const Home: NextPage = () => {
	const web3 = useWeb3React();

	const copyAddress = () => {
		copyToClipboard(web3.account!);

		return alert("Copied to clipboard!");
	};

	if (!web3.active)
		return (
			<Layout title="Connect your wallet - Web3">
				<div className="flex flex-col h-screen justify-center">
					<ConnectWallet />
				</div>
			</Layout>
		);

	return (
		<Layout padding title="My wallet - Web3">
			<h1 className="font-display text-4xl font-semibold text-rr-text-light mb-5">
				My wallet
			</h1>

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
		</Layout>
	);
};

export default Home;

import type { NextPage } from "next";
import { useWeb3React } from "@web3-react/core";

import Layout from "src/layouts/main";
import ConnectWallet from "src/features/connect-wallet";
import WalletDetails from "src/features/wallet-details";

const Home: NextPage = () => {
	const web3 = useWeb3React();

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

			{Boolean(web3.account) && <WalletDetails account={web3.account} />}
		</Layout>
	);
};

export default Home;

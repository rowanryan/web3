import type { NextPage } from "next";
import { useWeb3React } from "@web3-react/core";

import ProtectedPage from "src/components/ProtectedPage";
import Layout from "src/layouts/main";
import WalletDetails from "src/features/wallet-details";
import Section from "src/components/Section";
import Portfolio from "src/features/portfolio";

const Home: NextPage = () => {
	const web3 = useWeb3React();

	return (
		<ProtectedPage>
			<Layout padding title="My wallet - Web3">
				<h1 className="font-display text-4xl font-semibold text-rr-text-light mb-5">
					My wallet
				</h1>

				{Boolean(web3.account) && (
					<div className="mb-12">
						<WalletDetails />
					</div>
				)}

				<Section title="Portfolio">
					<Portfolio />
				</Section>
			</Layout>
		</ProtectedPage>
	);
};

export default Home;

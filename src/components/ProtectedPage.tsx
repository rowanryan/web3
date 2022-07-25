import { useEffect } from "react";

import { useWeb3React } from "@web3-react/core";
import ConnectWallet from "src/features/connect-wallet";
import { Injected } from "src/utils/web3Connectors";
import Layout from "src/layouts/main";

type Props = {
	children: React.ReactNode;
};

const ProtectedPage = (props: Props) => {
	const web3 = useWeb3React();

	useEffect(() => {
		const isWalletConnected = localStorage.getItem("isWalletConnected");

		if (isWalletConnected) {
			web3.activate(Injected);
		}
	}, []);

	if (!web3.active)
		return (
			<Layout title="Connect your wallet - Web3">
				<div className="flex flex-col h-screen justify-center">
					<ConnectWallet />
				</div>
			</Layout>
		);

	return <>{props.children}</>;
};

export default ProtectedPage;

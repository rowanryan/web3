import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import WalletButton from "./components/WalletButton";

const ConnectWallet = () => {
	const web3 = useWeb3React();

	const connectInjected = () => {
		const connector = new InjectedConnector({});
		return web3.activate(connector);
	};

	const connectWalletConnect = () => {
		const connector = new WalletConnectConnector({});
		return web3.activate(connector);
	};

	return (
		<div className="rounded-md bg-rr-paper-dark border-[1px] border-rr-border-light p-5 max-w-sm w-full mx-auto">
			<p className="font-display text-xl font-semibold mb-7 text-rr-text-light">
				Connect your wallet
			</p>

			<div className="grid grid-cols-1 gap-y-4">
				<WalletButton onClick={connectInjected}>
					<span className="font-display">MetaMask</span>
					<img src="/icons/metamask.svg" alt="" className="h-6" />
				</WalletButton>

				<WalletButton onClick={connectWalletConnect}>
					<span className="font-display">WalletConnect</span>
					<img
						src="/icons/walletconnect-circle.svg"
						alt=""
						className="h-6"
					/>
				</WalletButton>
			</div>
		</div>
	);
};

export default ConnectWallet;

import { useWeb3React } from "@web3-react/core";
import WalletButton from "./components/WalletButton";
import { Injected, WalletConnect } from "src/utils/web3Connectors";

const ConnectWallet = () => {
	const web3 = useWeb3React();

	const connectInjected = () => {
		localStorage.setItem("isWalletConnected", "true");
		return web3.activate(Injected);
	};

	const connectWalletConnect = () => {
		return web3.activate(WalletConnect);
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

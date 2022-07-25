import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

const Injected = new InjectedConnector({});

const WalletConnect = new WalletConnectConnector({
	bridge: "https://bridge.walletconnect.org",
	infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
});

export { Injected, WalletConnect };

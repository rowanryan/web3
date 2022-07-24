import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";

type Props = {
	children: React.ReactNode;
};

const getLibrary = (provider: any) => {
	return new ethers.providers.Web3Provider(provider);
};

const Provider = (props: Props) => {
	return (
		<Web3ReactProvider getLibrary={getLibrary}>
			{props.children}
		</Web3ReactProvider>
	);
};

export default Provider;

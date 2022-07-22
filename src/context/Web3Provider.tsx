import React from "react";
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";

type Props = {
	children: React.ReactNode;
};

const Provider = (props: Props) => {
	return (
		<Web3ReactProvider getLibrary={() => ethers}>
			{props.children}
		</Web3ReactProvider>
	);
};

export default Provider;

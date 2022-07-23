import { Web3ReactContextInterface } from "@web3-react/core/dist/types";

const getNativeBalance = async (web3: Web3ReactContextInterface) => {
	const balance = await web3.library?.getBalance(web3.account!);

	return balance;
};

export default getNativeBalance;

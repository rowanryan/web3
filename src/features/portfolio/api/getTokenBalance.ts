import { ethers } from "ethers";
import { Web3ReactContextInterface } from "@web3-react/core/dist/types";

const ABI = ["function balanceOf(address owner) view returns (uint)"];

const getTokenBalance = async (
	web3: Web3ReactContextInterface,
	address: string
) => {
	const contract = new ethers.Contract(address, ABI, web3.library);

	const balance = await contract.balanceOf(web3.account);

	return balance;
};

export default getTokenBalance;

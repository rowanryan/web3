import { BigNumber, ethers } from "ethers";
import { Web3ReactContextInterface } from "@web3-react/core/dist/types";

const ABI = ["function transfer(address to, uint amount) returns (bool)"];

const sendToken = async (
	web3: Web3ReactContextInterface,
	token: string,
	recipient: string,
	amount: BigNumber
) => {
	const signer = web3.library.getSigner();

	if (!token) {
		const tx = signer.sendTransaction({
			to: recipient,
			value: amount,
		});

		return tx;
	}

	const contract = new ethers.Contract(token, ABI, web3.library);
	const contractWithSigner = contract.connect(signer);

	const tx = await contractWithSigner.transfer(recipient, amount);

	return tx;
};

export default sendToken;

import { BigNumber } from "ethers";

export {};

declare global {
	type Token = {
		symbol: string;
		address: string;
		decimals: number;
	};
}

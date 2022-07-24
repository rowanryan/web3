import { ethers, BigNumber } from "ethers";

const formatUnits = (amount: BigNumber, decimals: number) => {
	const weiToEther = ethers.utils.formatUnits(amount, decimals);
	const parsedAmount = parseFloat(weiToEther);
	const zerosString = parsedAmount.toString().match(/(\.0*)/);

	const zeros = zerosString ? zerosString[0]!.length - 1 : 0;

	if (parseFloat(weiToEther) < 1 && zeros >= 5) return "< 0.00001";

	const fractionDigits =
		parsedAmount >= 1000
			? {
					minimumFractionDigits: 0,
					maximumFractionDigits: 0,
			  }
			: {
					minimumFractionDigits: 2,
					maximumFractionDigits: zeros + 2,
			  };

	const formatter = new Intl.NumberFormat("en-US", fractionDigits);

	return formatter.format(parsedAmount);
};

export default formatUnits;

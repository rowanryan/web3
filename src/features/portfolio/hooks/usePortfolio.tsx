import { useState, useEffect, useReducer } from "react";
import { useWeb3React } from "@web3-react/core";
import { BigNumber, ethers } from "ethers";
import getNativeBalance from "../api/getNativeBalance";
import getTokenBalance from "../api/getTokenBalance";
import usePortfolioState from "./usePortfolioState";

type State = {
	data?: any;
	isLoading: boolean;
	isError: boolean;
	error?: Error;
};

const usePortfolio = () => {
	const web3 = useWeb3React<ethers.providers.Web3Provider>();
	const [portfolioState, setPortfolioState] = usePortfolioState();
	const [counter, setCounter] = useState(0);

	const [state, setState] = useState<State>({
		isLoading: true,
		isError: false,
	});

	const removeToken = (address: string) => {
		const newState = portfolioState.filter(
			(token: any) => token.address !== address
		);

		return setPortfolioState(newState);
	};

	const forceUpdate = () => {
		return setCounter(counter + 1);
	};

	useEffect(() => {
		const tokens: Token[] = [...portfolioState];
		const apiCalls: Promise<BigNumber>[] = tokens.map(token =>
			getTokenBalance(web3, token.address)
		);

		Promise.all([getNativeBalance(web3), ...apiCalls])
			.then(data => {
				setState({
					data: [
						{ symbol: "ETH", decimals: 18, balance: data[0] },
						...data
							.slice(1)
							.map((balance: BigNumber, index: number) => ({
								...tokens[index],
								balance,
							})),
					],
					isLoading: false,
					isError: false,
				});
			})
			.catch(error =>
				setState({
					data: null,
					isLoading: false,
					isError: true,
					error: new Error(error),
				})
			);
	}, [web3.account, portfolioState, counter]);

	return { ...state, removeToken, forceUpdate };
};

export default usePortfolio;

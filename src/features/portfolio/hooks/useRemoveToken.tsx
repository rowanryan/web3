import usePortfolioState from "../hooks/usePortfolioState";

const useRemoveToken = () => {
	const [portfolioState, setPortfolioState] = usePortfolioState();

	const removeToken = (address: string) => {
		const newState = portfolioState.filter(
			(token: any) => token.address !== address
		);

		return setPortfolioState(newState);
	};

	return removeToken;
};

export default useRemoveToken;

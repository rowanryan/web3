import { useEffect } from "react";
import { atom, useRecoilState } from "recoil";

const portfolioState = atom({
	key: "portfolioState",
	default: [],
});

const usePortfolioState = () => {
	const [state, setState] = useRecoilState<any>(portfolioState);

	function getStateFromLocalStorage() {
		return JSON.parse(
			localStorage.getItem("portfolioState") || "[]"
		) as Token[];
	}

	function setNewState(newState: Token[]) {
		localStorage.setItem("portfolioState", JSON.stringify(newState));

		return setState(newState);
	}

	useEffect(() => {
		setState(getStateFromLocalStorage());
	}, []);

	return [state, setNewState];
};

export default usePortfolioState;

import { atom, useRecoilState } from "recoil";

const portfolioAddTokenModalState = atom({
	key: "portfolioAddTokenModalState",
	default: false,
});

const useAddTokenModal = () => {
	const [state, setState] = useRecoilState(portfolioAddTokenModalState);

	const setNewState = (newState: boolean) => {
		return setState(newState);
	};

	return { state, setNewState };
};

export default useAddTokenModal;

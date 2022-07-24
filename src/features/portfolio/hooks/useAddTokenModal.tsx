import { atom, useRecoilState } from "recoil";

const portfolioAddtokenModalState = atom({
	key: "portfolioAddtokenModalState",
	default: false,
});

const useAddtokenModal = () => {
	const [state, setState] = useRecoilState(portfolioAddtokenModalState);

	const setNewState = (newState: boolean) => {
		return setState(newState);
	};

	return { state, setNewState };
};

export default useAddtokenModal;

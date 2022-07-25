import { atom, useRecoilState } from "recoil";

const portfolioSendTokenModalState = atom({
	key: "portfolioSendTokenModalState",
	default: { open: false, data: undefined },
});

const useSendTokenModal = () => {
	const [state, setState] = useRecoilState(portfolioSendTokenModalState);

	const setNewState = (newState: any) => {
		return setState(newState);
	};

	return { state, setNewState };
};

export default useSendTokenModal;

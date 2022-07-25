import { atom, useRecoilState } from "recoil";

const transactionModalState = atom({
	key: "transactionModalState",
	default: { open: false, fn: undefined },
});

const useTransactionModal = () => {
	const [state, setState] = useRecoilState(transactionModalState);

	const setNewState = (newState: any) => {
		return setState(newState);
	};

	return { state, setNewState };
};

export default useTransactionModal;

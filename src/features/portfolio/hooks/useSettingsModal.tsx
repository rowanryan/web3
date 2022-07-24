import { atom, useRecoilState } from "recoil";

const portfolioSettingsModalState = atom({
	key: "portfolioSettingsModalState",
	default: false,
});

const useSettingsModal = () => {
	const [state, setState] = useRecoilState(portfolioSettingsModalState);

	const setNewState = (newState: boolean) => {
		return setState(newState);
	};

	return { state, setNewState };
};

export default useSettingsModal;

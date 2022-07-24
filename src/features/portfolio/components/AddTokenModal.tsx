import Modal from "src/components/Modal";
import useAddTokenModal from "../hooks/useAddTokenModal";
import AddTokenForm from "./AddTokenForm";

const PortfolioModal = () => {
	const { setNewState: setAddTokenModalOpen } = useAddTokenModal();

	return (
		<Modal title="Add token" onClose={() => setAddTokenModalOpen(false)}>
			<AddTokenForm onDone={() => setAddTokenModalOpen(false)} />
		</Modal>
	);
};

export default PortfolioModal;

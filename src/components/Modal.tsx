import { BaseSyntheticEvent } from "react";
import { IoCloseOutline } from "react-icons/io5";

type Props = {
	title: string;
	subtitle?: string;
	onClose: () => any;
	children?: React.ReactNode;
};

const Modal = (props: Props) => {
	const onBackdropClick = (evt: BaseSyntheticEvent) => {
		if (evt.target.getAttribute("data-backdrop") === "true") {
			return props.onClose();
		}
	};

	return (
		<div
			data-backdrop="true"
			className="fixed top-0 left-0 flex flex-col justify-center items-center w-screen h-screen bg-black/20 backdrop-blur-sm p-5"
			onClick={onBackdropClick}
		>
			<div
				data-backdrop="true"
				className="flex flex-col justify-center items-center max-h-[90%] w-full h-full"
			>
				<div className="p-5 bg-rr-paper-dark rounded-md border border-rr-border-light max-w-xl w-full overflow-y-auto">
					<div className="flex justify-between items-center mb-4">
						<p className="font-display font-semibold text-rr-text-light text-xl mr-12">
							{props.title}
						</p>

						<button className="w-6 h-6" onClick={props.onClose}>
							<IoCloseOutline className="text-rr-text-light/70 hover:text-rr-text-light transition-colors duration-75 ease-linear w-full h-full" />
						</button>
					</div>

					{Boolean(props.subtitle) && (
						<p className="font-display text-rr-text-light/80 -mt-3 text-sm mb-6">
							{props.subtitle}
						</p>
					)}

					{props.children}
				</div>
			</div>
		</div>
	);
};

export default Modal;

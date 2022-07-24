type Props = {
	title: string;
	extra?: React.ReactNode;
	children?: React.ReactNode;
};

const Section = (props: Props) => {
	return (
		<section className="mb-12">
			<div className="flex justify-between items-center mb-4">
				<h2 className="font-display font-semibold text-xl text-rr-text-light">
					{props.title}
				</h2>

				{Boolean(props.extra) && props.extra}
			</div>

			{props.children}
		</section>
	);
};

export default Section;

import Head from "next/head";
import classNames from "classnames";

type Props = {
	title: string;
	padding?: boolean;
	children?: React.ReactNode;
};

const Layout = (props: Props) => {
	const mainClass = classNames("min-h-screen bg-rr-bg-dark", {
		"pt-12": props.padding,
	});

	return (
		<>
			<Head>
				<title>{props.title}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={mainClass}>
				<div className="container mx-auto max-w-2xl">
					{props.children}
				</div>
			</main>
		</>
	);
};

export default Layout;

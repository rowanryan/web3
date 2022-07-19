import Head from "next/head";

type Props = {
	title: string;
	children?: React.ReactNode;
};

const Layout = (props: Props) => {
	return (
		<>
			<Head>
				<title>{props.title}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="min-h-screen bg-rr-bg-dark">
				<div className="container mx-auto max-w-2xl">
					{props.children}
				</div>
			</main>
		</>
	);
};

export default Layout;

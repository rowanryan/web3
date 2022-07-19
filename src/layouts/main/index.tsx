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

			<main className="h-screen bg-slate-900">
				<div className="container mx-auto max-w-4xl">
					{props.children}
				</div>
			</main>
		</>
	);
};

export default Layout;

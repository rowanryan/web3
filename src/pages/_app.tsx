import type { AppType } from "next/dist/shared/lib/utils";
import "src/styles/globals.css";

import Web3Provider from "src/context/Web3Provider";

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<Web3Provider>
			<Component {...pageProps} />
		</Web3Provider>
	);
};

export default MyApp;

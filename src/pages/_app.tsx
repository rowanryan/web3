import type { AppType } from "next/dist/shared/lib/utils";
import "src/styles/globals.css";

import Web3Provider from "src/context/Web3Provider";
import { RecoilRoot } from "recoil";

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<Web3Provider>
			<RecoilRoot>
				<Component {...pageProps} />
			</RecoilRoot>
		</Web3Provider>
	);
};

export default MyApp;

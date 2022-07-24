export {};

declare global {
	interface Window {
		ethereum: any;
	}

	namespace NodeJS {
		interface ProcessEnv {
			NEXT_PUBLIC_INFURA_ID: string;
		}
	}
}

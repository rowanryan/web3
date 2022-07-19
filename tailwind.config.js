/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			display: ["Lexend Deca", ...defaultTheme.fontFamily.sans],
			body: ["Inter", ...defaultTheme.fontFamily.sans],
		},
		container: {
			padding: "20px",
		},
		extend: {
			colors: {
				"rr-bg-dark": "#18181b",
				"rr-bg-light": "#fafafa",
				"rr-paper-dark": "#27272a",
				"rr-paper-light": "#f4f4f5",
			},
		},
	},
	plugins: [],
};

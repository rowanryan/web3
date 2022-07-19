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
		extend: {},
	},
	plugins: [],
};

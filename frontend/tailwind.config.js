/** @type {import('tailwindcss').Config} */
import flowbitePlugin from "flowbite/plugin";

module.exports = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/flowbite-react/**/*.js",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Jost", "sans-serif"],
			},
			colors: {
				primary: {
					50: "#f5f3ff",
					100: "#ede9fe",
					200: "#ddd6fe",
					300: "#c4b5fd",
					400: "#a78bfa",
					500: "#8b5cf6",
					600: "#7c3aed",
					700: "#6d28d9",
					800: "#5b21b6",
					900: "#4c1d95",
					950: "#2e1065",
				},
			},
		},
	},
	plugins: [flowbitePlugin],
};

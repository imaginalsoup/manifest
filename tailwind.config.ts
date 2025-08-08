import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/modules/**/*.{js,ts,jsx,tsx,mdx}',
	],
	plugins: [require('tailwindcss-motion')],
	theme: {
		extend: {
			colors: {
				background: '#eceff1',
				black: '#0A0101B5',
				darkGray: '#252525',
				opaqueWhite: '#FCFCFC5E',
				white: '#FCFCFCF0',
			},
			fontFamily: {
				noto: 'Noto Sans, monospace',
				// satoshi: 'Satoshi, sans-serif',
			},
			screens: {
				xs: '320px',
			},
			width: {
				maxScreenContent: '1440px',
			},
		},
	},
} satisfies Config;

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
	theme: {
		extend: {
			ringColor: ['valid', 'invalid', 'placeholder', 'focus'],
			borderColor: ['focus', 'hover', 'placehoder'],
			textColor: ['focus', 'hover', 'placehoder'],
		},
	},
	plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./dist/**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				softBlue: 'hsl(215, 51%, 70%)',
				cyan: 'hsl(178, 100%, 50%)',
				mainBg: 'hsl(217, 54%, 11%)',
				cardBg: 'hsl(216, 50%, 16%)',
				line: 'hsl(215, 32%, 27%)'
			},
			fontSize: {
				base: '18px'
			}
		}
	},
	plugins: []
}

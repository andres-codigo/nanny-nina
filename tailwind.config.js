module.exports = {
	content: [
		"./*.{html,js}",
		"./src/*.vue",
		"./src/**/*.{html,js}"
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Manrope", "sans-serif"],
			},
			spacing: {
				"safe-top": "env(safe-area-inset-top)",
				"safe-bottom": "env(safe-area-inset-bottom)",
				"safe-left": "env(safe-area-inset-left)",
				"safe-right": "env(safe-area-inset-right)",
			},
			colors: {
				mint: {
					DEFAULT: "#ADFFD6",
					hover: '',
					active: '',
					focus: '',
					light: ''
				},
				violet: {
					DEFAULT: "#5747FF"
				},
				purple: {
					DEFAULT: "#DAD6FF"
				},
				red: {
					error: '#D80027'
				},
				green: {
					success: '#15CE6F'
				}
			},
			transitionDuration: {
				'0': '0ms'
			},
			minHeight: {
				'325': '325px',
			},
			maxWidth: {
				'450-for-dev-not-prod': '450px'
			}
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
	content: ['./public/**/*.html', './src/**/*.vue'],
	options: {
		whitelistPatterns: [
		/-(leave|enter|appear)(|-(to|from|active))$/,
		/^(?!(|.*?:)cursor-move).+-move$/,
		/^router-link(|-exact)-active$/,
		/tooltip/,
		/popover/,
		/notification/,
		],
	}
}
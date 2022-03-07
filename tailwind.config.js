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
				green: {
					DEFAULT: "#ADFFD6",
					100: '',
					200: '',
					300: '',
					400: '',
					500: '',
					600: '',
					700: '',
					800: '',
					900: ''
				},
				red: {
					DEFAULT: '#D80027',
					100: '',
					200: '',
					300: '',
					400: '',
					500: '',
					600: '',
					700: '',
					800: '',
					900: ''
				},
				blue: {
					DEFAULT: "#5747FF",
					100: '',
					200: '',
					300: '',
					400: '',
					500: '',
					600: '',
					700: '',
					800: '',
					900: ''
				},
				purple: {
					DEFAULT: "#A198FF",
					100: '',
					200: '',
					300: '',
					400: '',
					500: '',
					600: '',
					700: '',
					800: '',
					900: ''
				},
				gray: {
					DEFAULT: '#D80027',
					100: '',
					200: '',
					300: '',
					400: '',
					500: '',
					600: '',
					700: '',
					800: '',
					900: ''
				},
				white: {
					DEFAULT: '#FFFFFF',
					100: '',
					200: '',
					300: '',
					400: '',
					500: '',
					600: '',
					700: '',
					800: '',
					900: ''
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
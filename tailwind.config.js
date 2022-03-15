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
				blue: {
					// DEFAULT: '#5747FF',
					100: '#B6A2F3',
					200: '#9D84EE',
					300: '#8565EA',
					400: '#6C46E6',
					500: '#5427E2',
					600: '#4019BB',
					700: '#30138C',
					800: '#200D5D',
					900: '#10062F'
				},
				green: {
					// DEFAULT: '#ADFFD6',
					100: '#DCFFED',
					200: '#D0FFE8',
					300: '#C4FFE2',
					400: '#B9FFDC',
					500: '#ADFFD6',
					600: '#57FFAB',
					700: '#02FF80',
					800: '#00AB56',
					900: '#00562B',
				},
				purple: {
					// DEFAULT: '#A198FF',
					100: '#D7D3FF',
					200: '#C9C4FF',
					300: '#BCB5FF',
					400: '#AEA7FF',
					500: '#A198FF',
					600: '#',
					700: '#1500F4',
					800: '#0E00A3',
					900: '#070051',
				},
				red: {
					// DEFAULT: '#D80027',
					100: '#FF8198',
					200: '#FF5775',
					300: '#FF2D53',
					400: '#FF0330',
					500: '#D80027',
					600: '#AD001F',
					700: '#820017',
					800: '#560010',
					900: '#2B0008',
				},
				gray: {
					// DEFAULT: '#8F90A6',
					100: '#CFCFD9',
					200: '#BFC0CC',
					300: '#AFB0BF',
					400: '#9FA0B3',
					500: '#8F90A6',
					600: '#6D6F8A',
					700: '#525367',
					800: '#373745',
					900: '#1B1C22'
				},
				// white: {
				// 	DEFAULT: '#FFFFFF',
				// 	100: '',
				// 	200: '',
				// 	300: '',
				// 	400: '',
				// 	500: '#FFFFFF',
				// 	600: '',
				// 	700: '',
				// 	800: '',
				// 	900: ''
				// }
			},
			transitionDuration: {
				'0': '0ms'
			},
			minHeight: {
				'325': '325px',
			},
			minWidth: {
				'360-for-dev-not-prod': '360px',
				'450-for-dev-not-prod': '450px',
			},
			maxWidth: {
				'360-for-dev-not-prod': '360px',
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
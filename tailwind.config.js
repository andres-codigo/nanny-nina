module.exports = {
	content: [
		"./*.{html,js}",
		"./src/*.vue",
		"./src/**/*.{html,js}"
	],
	theme: {
		extend: {
			borderRadius: {
				'20px': '1.25rem',
				'30px': '1.875rem'
			},
			colors: {
				purple: {
					50: '#E3DBFA',
					100: '#C6B7F5',
					200: '#A993F0',
					300: '#8D6FEC',
					400: '#704BE7',
					500: '#5427E2',
					600: '#4019BB',
					700: '#30138C',
					800: '#200D5D',
					900: '#10062F'
				},
				green: {
					50: '#EBFFF5',
					100: '#DCFFED',
					200: '#D6FFEB',
					300: '#C2FFE0',
					400: '#BDFFDE',
					500: '#ADFFD6',
					600: '#57FFAB',
					700: '#02FF80',
					800: '#00AB56',
					900: '#00562B',
				},
				lilac: {
					50: '#EFEEFF',
					100: '#E0DDFF',
					200: '#D0CCFF',
					300: '#C0BAFF',
					400: '#B1A9FF',
					500: '#A198FF',
					600: '#4019BB',
					700: '#1500F4',
					800: '#0E00A3',
					900: '#070051',
				},
				gray: {
					50: '#ECEDF0',
					100: '#DADAE1',
					200: '#C7C8D3',
					300: '#B4B5C4',
					400: '#A2A3B5',
					500: '#8F90A6',
					600: '#6D6F8A',
					700: '#525367',
					800: '#373745',
					900: '#1B1C22'
				},
				red: {
					500: '#B91C1C',
				},
				orange: {
					500: '#F97316'
				},
				success: {
					500: '#16A34A'
				},
				blue: {
					500: '#2563EB'
				}
			},
			fontFamily: {
				sans: ["Manrope", "sans-serif"],
			},
			fontSize: {
				/*
					font size (rem / px) chart
					0.75rem / 12px
					0.875rem / 14px
					1rem / 16px
					1.125rem / 18px
					1.313rem / 21px
					1.5rem / 24px
					1.75rem / 28px
					2rem / 32px
					2.25rem / 36px
				*/

				/*
					size type: [ font size / line height ]
				*/
				'xs': ['0.75rem', '1.25rem'],
				'sm': ['0.875rem', '1.2rem'],
      			'base': ['1rem', '1.4rem'],
				'xl': ['1.125rem', '1.4rem'],
				'2xl': ['1.313rem', '1.4rem'],
				'3xl': ['1.5rem', '1.4rem'],
				'4xl': ['1.75rem', '1.4rem'],
				'5xl': ['2rem', '2.4rem'],
				'6xl': ['2.25rem', '1.4rem'],

				/*
					H1 to H6 classes, i.e., text-header-one
				*/
				'header-one': ['2.25rem', '1.4rem'],		/* 36px */
				'header-two': ['2rem', '2.4rem'],			/* 32px */
				'header-three': ['1.75rem', '1.8rem'],		/* 28px */
				'header-four': ['1.5rem', '1.4rem'],		/* 24px */
				'header-five': ['1.313rem', '1.4rem'],  	/* 21px */
				'header-six': ['1.125rem', '1.4rem'], 		/* 18px */
			},
			height: {
				'card-au-pair': '30rem'
			},
			spacing: {
				"safe-top": "env(safe-area-inset-top)",
				"safe-bottom": "env(safe-area-inset-bottom)",
				"safe-left": "env(safe-area-inset-left)",
				"safe-right": "env(safe-area-inset-right)",
			},
			transitionDuration: {
				'0': '0ms'
			},
			width: {
				/*
					button widths (rem / px) chart
					XS: 5.5rem / 88px
					SM: 10.5rem / 168px
					BASE: 13rem / 208px
					LG: 17.428rem / 279px
					XL: 20.5rem / 328px

					INPUT-SMS: 7.125rem / 114px

					NB: select-[size] & input-[size] classes added; currently, the sizes are different
						page design by page design so a consistent size needs to be set
						by Obafemi
				*/
				/* Buttons */
				'button-xs': '5.5rem',
				'button-sm': '10.5rem',
				'button-base': '13rem',
				'button-lg': '17.428rem',
				'button-xl': '20.5rem',
				'button-input-sms': '7.125rem',
				/* Selects */
				'select-xs': '5.5rem',
				'select-sm': '8.125rem',
				'select-base': '',
				'select-lg': '',
				'select-xl': '',
				/* Input Fields */
				'input-xs': '',
				'input-sm': '7.313rem',
				'input-base': '',
				'input-lg': '',
				'input-xl': '',
			},
			minWidth: {
				'apply-country': '10.5rem',
				'360-for-dev-not-prod': '360px',
				'450-for-dev-not-prod': '450px',
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
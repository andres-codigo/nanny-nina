/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./*.{html,js}', './src/*.vue', './src/**/*.{html,js}'],
	theme: {
		extend: {
			borderRadius: {
				'10px': '0.625rem',
				'20px': '1.25rem',
				'30px': '1.875rem',
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
					900: '#10062F',
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
					900: '#1B1C22',
				},
				melon: {
					50: '#FFF4F1',
					100: '#FFEAE3',
					200: '#FFDFD5',
					300: '#FFD4C7',
					400: '#FFCAB9',
					500: '#FFBFAB',
					600: '#FF7E56',
					700: '#FF3D01',
					800: '#AA2900',
					900: '#551400',
				},
				red: {
					DEFAULT: '#B91C1C',
				},
				orange: {
					DEFAULT: '#F97316',
				},
				success: {
					DEFAULT: '#16A34A',
				},
				blue: {
					DEFAULT: '#2563EB',
				},
			},
			fontFamily: {
				sans: ['Manrope', 'sans-serif'],
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
					2.50rem / 40px
					2.75rem / 44px
					3.00rem / 48px
				*/

				/*
					size type: [ font size / line height ]
				*/
				xs: ['0.75rem', '1.25rem'],
				sm: ['0.875rem', '1.2rem'],
				base: ['1rem', '1.4rem'],
				xl: ['1.125rem', '1.4rem'],
				'2xl': ['1.313rem', '1.4rem'],
				'3xl': ['1.5rem', '1.4rem'],
				'4xl': ['1.75rem', '1.4rem'],
				'5xl': ['2rem', '2.4rem'],
				'6xl': ['2.25rem', '1.4rem'],
				'7xl': ['2.50rem', '1.4rem'],
				'8xl': ['2.75rem', '1.4rem'],
				'9xl': ['3.00rem', '1.4rem'],
				'13px': ['0.813rem', '1.4rem'],

				/*
					H1 to H6 classes, i.e., text-header-one
				*/
				'header-one': ['2.25rem', '1.4rem'] /* 36px */,
				'header-two': ['2rem', '2.4rem'] /* 32px */,
				'header-three': ['1.75rem', '1.8rem'] /* 28px */,
				'header-four': ['1.5rem', '1.4rem'] /* 24px */,
				'header-five': ['1.313rem', '1.4rem'] /* 21px */,
				'header-six': ['1.125rem', '1.4rem'] /* 18px */,
			},
			height: {
				'card-booking-match': '30rem',
				/* Icons */
				'icon-personality-badge': '6rem',
				/* Review - Leave Tip */
				'icon-review-tip': '5.75rem',
			},
			minHeight: {
				'pop-up-notification': '9.063rem',
			},
			spacing: {
				'116px': '116px',
				'112px': '112px',
			},
			transitionDuration: {
				0: '0ms',
			},
			width: {
				/*
					BUTTON WIDTH (REM / PX) CHART
						XS: 5.5rem / 88px
						SM: 10.5rem / 168px
						BASE: 13rem / 208px
						LG: 17.428rem / 279px
						XL: 20.5rem / 328px
						INPUT-SMS: 7.125 / 114px
						DOWNLOAD: 7.313rem / 117px

					SELECT WIDTH (REM / PX) CHART
						XS: 6.25rem / 100px
						SM: 7.5rem / 120px
						BASE: 8.75rem / 140px
						LG: 10rem / 160px
						XL: 11.25rem / 180px

					INPUT WIDTH (REM / PX) CHART
						XS: rem / px
						SM: 7.313rem / 117px
						BASE: 12.813rem / 205px
						LG: rem / px
						XL: rem / px

					NB: input-[size] classes for 'sm' and 'base' added; currently, the sizes are different
						page design by page design so a consistent size needs to be set
						by Obafemi

					REVIEW-TIP: 5rem / 80px
				*/
				/* Buttons */
				'button-xs': '5.5rem',
				'button-sm': '10.5rem',
				'button-base': '13rem',
				'button-lg': '17.428rem',
				'button-xl': '20.5rem',
				'button-input-sms': '7.125rem',
				'button-download': '7.313rem',
				'button-chat-send-a-message': '12.188rem',
				'button-280px': '280px',
				/* Selects */
				'select-xs': '6.25rem',
				'select-sm': '7.5rem',
				'select-base': '8.75rem',
				'select-lg': '10rem',
				'select-xl': '11.25rem',
				/* Input Fields */
				'input-xs': '',
				'input-sm': '7.313rem',
				'input-base': '12.813rem',
				'input-lg': '',
				'input-xl': '',
				/* Icons */
				'icon-personality-badge': '5.50rem',
				/* Review - Leave Tip */
				'icon-review-tip': '5rem',
			},
			minWidth: {
				'apply-country': '10.5rem',
				'chat-counter': '1.125rem',
				'360-for-dev-not-prod': '360px',
				'450-for-dev-not-prod': '450px',
			},
			maxWidth: {
				'450-for-dev-not-prod': '450px',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
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
	},
}

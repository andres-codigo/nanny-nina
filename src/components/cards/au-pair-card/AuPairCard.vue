<template>
	<div
		class="inline-flex w-full border border-gray-50 hover:shadow-lg hover:shadow-gray-50 rounded-3xl mb-10"
	>
		<a
			href="/"
			target="_self"
			class="w-full h-card-au-pair focus:opacity-60"
		>
			<div :class="['flex flex-row rounded-t-3xl', tempBackgroundColor]">
				<div class="relative grow h-64 overflow-hidden">
					<span class="absolute right-2 top-2 w-11"
						><HeartIcon
							class="w-11 h-11 text-red"
							aria-hidden="true"
					/></span>
					<!--
						Image svg/png here
						<img src="*.svg" class="rounded-t-3xl" />
						* remove background color in div as visual placeholder
					-->
					<img
						src="https://images.unsplash.com/photo-1543721482-bc95ff1f1dea"
						class="rounded-t-3xl"
					/>
				</div>
			</div>
			<div class="h-56 mx-4">
				<div class="my-6">
					<h4 class="text-header-four font-semibold antialiased mb-1">
						The Sanders
					</h4>
					<p class="text-sm text-gray-500 font-thin">
						Shared on 5mins ago
					</p>
				</div>
				<div class="flex flex-row mb-4 items-center">
					<div class="flex-none w-6">
						<GlobeAltIcon class="w-5 h-5" />
					</div>
					<div class="inline-flex grow items-center font-thin">
						<span
							class="w-40 text-ellipsis overflow-hidden whitespace-nowrap"
							>Speak Dutch, English</span
						>
						<Dot />
						<country-flag country="nl" size="small" />
						<span class="pl-1">Amsterdam</span>
					</div>
				</div>
				<div class="flex flex-row mb-3">
					<div class="flex-none w-6">
						<CalendarIcon class="w-5 h-5" />
					</div>
					<div class="inline-flex grow items-center font-thin">
						Starting Nov 2021 <Dot />
						<ClockIcon class="w-5 h-5" /> For 12months
					</div>
				</div>
				<div class="flex flex-row mb-3">
					<div class="flex-none w-6 h-6">
						<UserIcon class="w-5 h-5" />
					</div>
					<div class="grow font-thin">2 kids (2yr, 3yr)</div>
				</div>
			</div>
		</a>
	</div>
</template>

<script>
import Dot from '../../dom-elements/Dot.vue'

import {
	HeartIcon,
	GlobeAltIcon,
	CalendarIcon,
	ClockIcon,
	UserIcon,
} from '@heroicons/vue/solid'

/*
https://bestofvue.com/repo/P3trur0-vue-country-flag-vuejs-icons

VueJS3
npm install vue-country-flag-next

<country-flag country='nl' size='small'/>

This is a 'placeholder' flag package example, as I didn't want to spent too much time
finding the one used on the design as you may already have an npm package.

Do note the tailwind css classes used in the span to wrap and add an ellipsis on the language spoken
<span class="w-40 text-ellipsis overflow-hidden  whitespace-nowrap">Speak Dutch, English</span>
*/
import CountryFlag from 'vue-country-flag-next'

export default {
	components: {
		Dot,
		HeartIcon,
		GlobeAltIcon,
		UserIcon,
		CalendarIcon,
		ClockIcon,
		CountryFlag,
	},
	props: {
		tempBackgroundColor: {
			type: String,
			default: '',
		},
		tempFocusRingColor: {
			type: String,
			default: '',
		},
		user: {
			type: String,
			default: '',
		},
		content: {
			type: String,
			default: '',
		},
		showCompletionSteps: {
			type: Boolean,
			default: true,
		},
	},
}
</script>

<template>
	<div class="inline-flex w-full border border-gray-50 hover:border hover:border-gray-500 rounded-3xl mb-4">
		<a href="/" target="_self" class="w-full h-card-booking-match focus:opacity-60">
			<div :class="['flex flex-row rounded-t-3xl', tempBackgroundColor]">
				<div class="relative grow h-64 overflow-hidden">
					<span :class="['absolute left-4 top-8 w-24 inline-flex rounded-3xl justify-center font-semibold px-2', priceBackgroundAndTextColor]">€16-18/hr</span>
					<span :class="['absolute right-0 top-7 w-11', showHeart ? '' : 'hidden']"><Img src="./assets/svg/other/heart.svg" class="w-9 h-9" alt="" /></span>
					<!--
						Image svg/png here
						<img src="*.svg" class="rounded-t-3xl" />
						* remove background color in div as visual placeholder
					-->
					<Img :src="imageSrc" class="rounded-t-3xl" />
				</div>
			</div>
			<div class="h-56 mx-4">
				<div class="flex flex-row my-6">
					<div class="basis-2/3">
						<h4 class="text-header-four font-semibold antialiased mb-2">{{ title }}</h4>
						<p class="text-sm text-gray-500 font-thin leading-none">{{ timeOrDate }}</p>
					</div>
					<div class="basis-1/3">
						<BadgeBookingType :badgeText="badgeText" :badgeSvg="badgeSvg" :badgeClass="badgeClass" />
					</div>
				</div>
				<div class="flex flex-row mb-4 items-center">
					<div class="flex-none w-5"><LocationMarkerIcon class="w-5 h-5" /></div>

					<!-- Invites -->
					<div class="inline-flex grow items-center font-thin ml-1" v-if="isLockedMatch">
						2km away
						<Dot />
						<country-flag country='nl' size='small'/>
						<span class="pl-1">Amsterdam</span>
					</div>

					<!-- Matches -->
					<div class="inline-flex grow items-center font-thin ml-1" v-else>
						{{ bookingAddress }}
						<Dot />
					</div>

				</div>
				<div class="flex flex-row  items-center mb-3">
					<div class="flex-none w-5"><CalendarIcon class="w-5 h-5" /></div>
					<div class="inline-flex grow items-center font-thin">
						<span class="pl-1">{{ bookingDuration }}</span>
						<Dot />
						<ClockIcon class="w-5 h-5" />
						<span class="pl-1">{{ startingTime }}</span>
					</div>
				</div>
				<div class="flex flex-row mb-3">
					<div class="flex-none w-6 h-6"><UserIcon class="w-5 h-5" /></div>
					<div class="grow font-thin">{{ numberOfChildren }}</div>
				</div>
			</div>
		</a>
	</div>
</template>

<script>
import BadgeBookingType from '../../badge/BadgeBookingType.vue'
import Img from '../../dom-elements/Img.vue'
import Dot from '../../dom-elements/Dot.vue'

import { LocationMarkerIcon, CalendarIcon, ClockIcon, UserIcon } from '@heroicons/vue/outline'
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
		BadgeBookingType,
		Img,
		Dot,
		LocationMarkerIcon,
		UserIcon,
		CalendarIcon,
		ClockIcon,
		CountryFlag
	},
	props: {
		badgeClass: String,
		badgeSvg: String,
		badgeText: String,
		tempBackgroundColor: String,
		priceBackgroundAndTextColor: {
			type: String,
			default: 'bg-green-500 text-purple-900'
		},
		imageSrc: {
			type: String,
			default: 'https://images.unsplash.com/photo-1543721482-bc95ff1f1dea'
		},
		isLockedMatch: {
			type: Boolean,
			default: true
		},
		title: String,
		timeOrDate: {
			type: String,
			default: ''
		},
		bookingAddress: {
			type: String,
			default: '86A, Prins Hendrikkade, Amsterdam'
		},
		bookingDuration: {
			type: String,
			default: 'Short-term'
		},
		startingTime: {
			type: String,
			default: 'Starts: 4pm today'
		},
		numberOfChildren: {
			type: String,
			default: '2 kids (2yr, 3yr)'
		},
		showHeart: {
			type: Boolean,
			default: false
		}
	}
}
</script>
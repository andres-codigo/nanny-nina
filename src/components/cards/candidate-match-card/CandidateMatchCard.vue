<template>
	<div class="inline-flex w-full border border-gray-50 hover:border hover:border-gray-500 rounded-3xl mb-4">
		<a href="/" target="_self" class="w-full h-card-booking-match focus:opacity-60">
			<div :class="['flex flex-row rounded-t-3xl', tempBackgroundColor]">
				<div class="relative grow h-64 overflow-hidden">
					<span :class="['absolute right-0 top-8 w-11', showHeart ? '' : 'hidden']"><Img src="./assets/svg/other/heart.svg" class="w-6 h-6" alt="" /></span>
					<!--
						Image svg/png here
						<img src="*.svg" class="rounded-t-3xl" />
						* remove background color in div as visual placeholder
					-->
					<Img :src="imageSrc" class="rounded-t-3xl" />
				</div>
			</div>
			<div class="h-56 mx-4">
				<div class="flex flex-row mt-6 mb-4">
					<div class="basis-2/3">
						<h4 class="text-header-four font-semibold antialiased mb-2">{{ title }} <span class="text-base">{{ age }}</span></h4>
						<p class="text-xs text-gray-500 font-thin">{{ totalExperience }}</p>
					</div>
					<div class="basis-1/3">
						<BadgeBookingType :class="badgeClass" :badgeSvg="badgeSvg" :badgeText="badgeText" />
					</div>
				</div>
				<div class="flex flex-row items-center mb-4">
					<div class="w-5"><CalendarIcon class="w-5 h-5" /></div>
					<div class="font-thin pl-1">{{ bookingDate }}</div>
				</div>
				<div class="flex flex-row items-center mb-4">
					<div class="w-5"><ClockIcon class="w-5 h-5" /></div>
					<span class="font-thin pl-1">{{ bookingStartTime }}</span>

					<span class="inline-flex items-center" v-if="isCandidate">
						<Dot />
						<div class="w-5"><ClockIcon class="w-5 h-5" /></div>
						<span class="font-thin pl-1">{{ bookingDuration }}</span>
					</span>

				</div>
				<div class="flex flex-row items-center">
					<span class="inline-flex items-center" v-if="!isCandidate">
						<div class="w-5"><BadgeCheckIcon class="w-5 h-5" /></div>
						<div class="font-thin pl-1">{{ bookingPrice }}</div>
					</span>

					<span class="inline-flex items-center" v-else>
						<div class="w-5"><BadgeCheckIcon class="w-5 h-5" /></div>
						<div class="font-thin pl-1">{{ bookingCandidateStrength }}</div>
					</span>
				</div>
			</div>
		</a>
	</div>
</template>

<script>
import BadgeBookingType from '../../badge/BadgeBookingType.vue'
import Img from '../../dom-elements/Img.vue'
import Dot from '../../dom-elements/Dot.vue'

import { CalendarIcon, ClockIcon, BadgeCheckIcon } from '@heroicons/vue/outline'

export default {
	components: {
		BadgeBookingType,
		Img,
		Dot,
		BadgeCheckIcon,
		CalendarIcon,
		ClockIcon
	},
	props: {
		badgeClass: String,
		badgeSvg: String,
		badgeText: String,
		tempBackgroundColor: String,
		showHeart: {
			type: Boolean,
			default: false
		},
		isCandidate: {
			type: Boolean,
			default: false
		},
		imageSrc: {
			type: String,
			default: 'https://images.unsplash.com/photo-1543721482-bc95ff1f1dea'
		},
		title: {
			type: String,
			default: 'Brittany'
		},
		age: {
			type: String,
			default: '27yrs'
		},
		totalExperience: {
			type: String,
			default: 'Has 2 years experience'
		},
		bookingDate: {
			type: String,
			default: 'Babysitting on: Monday, 23/02'
		},
		bookingStartTime: {
			type: String,
			default: 'Time: 13:30 - 16:00'
		},
		bookingDuration: {
			type: String,
			default: 'Up to 6-12months'
		},
		bookingPrice: {
			type: String,
			default: 'Payment due: €0'
		},
		bookingCandidateStrength: {
			type: String,
			default: 'Strength: Tidy'
		}
	}
}
</script>
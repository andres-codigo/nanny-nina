<template>
	<div class="flex mb-4">
		<a href="/" :class="class" class="inline-flex w-full relative h-60 px-7 py-8 rounded-20px focus:outline-none">
			<div class="w-full">
				<div class="flex flex-row mb-6">
					<div class="basis-3/4">
						<div class="inline-flex float-left items-center">
							<BadgeBookingType :class="badgeClass" :badgeSvg="badgeSvg" :badgeText="badgeText" />
						</div>
					</div>
					<div class="basis-1/4">
						<div class="inline-flex float-right items-center">
							<DotsHorizontalIcon class="w-6 h-6" aria-hidden="true" />
						</div>
					</div>
				</div>

				<div class="mb-3">
					<h5 class="text-header-five font-bold antialiased">{{ title }}</h5>
					<slot name="details"></slot>
				</div>

				<div class="flex flex-col">
					<div class="inline-flex items-center font-thin mb-1">
						<CalendarIcon class="w-5 h-5" /><span class="mx-1">2 days</span>
						<ClockIcon class="w-5 h-5" /><span class="ml-1">Wednesday, Dec 2</span>
					</div>
					<div class="inline-flex items-center font-thin">
						<CurrencyDollarIcon class="w-5 h-5" /><span class="mx-1">&euro;13-&euro;15/hr</span>
						<LocationMarkerIcon class="w-5 h-5" /><span class="ml-1">Home address</span>
					</div>
				</div>
			</div>
			<slot name="chevron"></slot>
		</a>
	</div>
</template>

<script>
import BadgeBookingType from '../../badge/BadgeBookingType.vue'

import { DotsHorizontalIcon, CalendarIcon, ClockIcon, CurrencyDollarIcon, LocationMarkerIcon, ChevronRightIcon } from '@heroicons/vue/solid'

export default {
	components: {
		BadgeBookingType,
		CalendarIcon,
		DotsHorizontalIcon,
		ClockIcon,
		CurrencyDollarIcon,
		LocationMarkerIcon,
		ChevronRightIcon
	},
	props: {
		badgeClass: String,
		badgeSvg: String,
		badgeText: String,
		class: String,
		title: String
	}
}
</script>
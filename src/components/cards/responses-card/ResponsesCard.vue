<template>
	<div class="flex mb-4">
		<a href="/" :class="class" class="inline-flex w-full relative border border-gray-500 h-64 rounded-30px px-7 py-7">
			<div class="w-full">
				<div class="flex flex-row mb-4">
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
					<h5 class="text-ellipsis overflow-hidden whitespace-nowrap text-header-five font-bold antialiased">{{ title }}</h5>
					<slot name="details"></slot>
				</div>

				<div class="flex flex-col mb-2">
					<div class="inline-flex items-center font-thin mb-1">
						<CalendarIcon class="w-5 h-5" /><span class="mx-1">2 days</span>
						<ClockIcon class="w-5 h-5" /><span class="ml-1">Wednesday, Dec 2</span>
					</div>
					<div class="inline-flex items-center font-thin">
						<CurrencyDollarIcon class="w-5 h-5" /><span class="mx-1">&euro;13-&euro;15/hr</span>
						<LocationMarkerIcon class="w-5 h-5" /><span class="ml-1">Home address</span>
					</div>
				</div>

				<div class="flex ml-4 -space-x-5 float-right">
					<div><img class="rounded-full h-10 w-10 z-0" src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt=""></div>
					<div><img class="rounded-full h-10 w-10 z-10" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt=""></div>
					<div><img class="rounded-full h-10 w-10 z-20" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt=""></div>
					<div><img class="rounded-full h-10 w-10 z-30" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt=""></div>
					<div><img class="rounded-full h-10 w-10 z-40" src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt=""></div>
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
<template>
	<div class="w-full">
		<TopNavigation backgroundColor="bg-white" headerColor="text-purple-900" text="Brittany">
			<template #iconLeft><router-link to="/dashboard?tab=3"><ChevronLeftIcon class="w-8 h-8 text-purple-900" aria-hidden="true" /></router-link></template>
			<template #profileImage>
				<div class="flex-none w-8 mr-2">
					<img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
				</div>
			</template>
			<template #iconRight><DotsVerticalIcon class="w-6 h-6 text-purple-900" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<div class="h-full flex flex-col pb-40">
				<ProfileCarousel class="mb-4" />

				<div class="mx-4">
					<h5 class="text-header-five font-semibold antialiased mt-4 mb-2">Meet Brittany</h5>

					<div class="flex flex-wrap gap-0 gap-y-2 mt-4">
						<div class="inline-flex items-center">
							<Img src="./assets/svg/stars/star-solid-gold.svg" class="w-5 h-5" />
							<span class="pl-1 text-sm font-semibold">(4.5/5)</span>
							<span class="h-1 w-1 bg-gray-500 rounded-full mx-1"></span>
						</div>
						<div class="inline-flex items-center">
							<Img src="./assets/svg/profile/cake.svg" class="w-5 h-5" />
							<span class="pl-1 text-sm">20th September</span>
						</div>
						<div class="inline-flex items-center">
							<span class="h-1 w-1 bg-gray-500 rounded-full mx-1"></span>
							<span class="pl-1 text-sm">27 yrs</span>
						</div>
						<div class="inline-flex items-center">
							<span class="h-1 w-1 bg-gray-500 rounded-full mx-1"></span>
							<Img src="./assets/svg/profile/medal-gold.svg" class="w-5 h-5" />
							<span class="pl-1 text-sm">Creative</span>
						</div>
					</div>

					<div class="flex flex-row mt-7">
						<div class="inline-flex items-center">
							<CalendarIcon class="w-6 h-6" />
							<h5 class="text-header-five font-semibold antialiased ml-2">Available: 3 days</h5>
						</div>
					</div>

					<div class="flex flex-col gap-y-2 font-semibold my-4">
						<div class="inline-flex items-center">
							<Img src="./assets/svg/ticks-and-crosses/tick-white-green-background.svg" class="w-4 h-4" />
							<span class="ml-2">Monday 24th February</span>
						</div>
						<div class="inline-flex items-center">
							<Img src="./assets/svg/ticks-and-crosses/tick-white-green-background.svg" class="w-4 h-4" />
							<span class="ml-2">Tuesday 25th February</span>
						</div>
						<div class="inline-flex items-center">
							<Img src="./assets/svg/ticks-and-crosses/tick-white-green-background.svg" class="w-4 h-4" />
							<span class="ml-2">Wednesday 26th February</span>
						</div>
						<div class="inline-flex items-center">
							<Img src="./assets/svg/ticks-and-crosses/cross-remove-gray.svg" class="w-4 h-4" />
							<span class="ml-2 text-gray-100">Thursday 27th February</span>
						</div>
						<div class="inline-flex items-center">
							<Img src="./assets/svg/ticks-and-crosses/cross-remove-gray.svg" class="w-4 h-4" />
							<span class="ml-2 text-gray-100">Friday 28th February</span>
						</div>
						<div class="inline-flex items-center">
							<Img src="./assets/svg/ticks-and-crosses/cross-remove-gray.svg" class="w-4 h-4" />
							<span class="ml-2 text-gray-100">Saturday 29th February</span>
						</div>
						<div class="pt-1">
							<a href="#" target="_self" class="font-semibold anchor-blue anchor-with-underline">See her full availability ></a>
						</div>
					</div>
				</div>
			</div>
			<section class="block fixed inset-x-0 w-full bottom-0 z-10 bg-white border-t border-gray">
				<FixedBottomBookingMatch />
			</section>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import ProfileCarousel from '../../../../../components/carousel/ProfileCarousel.vue'
import Img from '../../../../../components/dom-elements/Img.vue'
import FixedBottomBookingMatch from '../../../../../components/content/fixed/FixedBottomBookingMatch.vue'

import { ChevronLeftIcon, DotsVerticalIcon, CalendarIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		ProfileCarousel,
		Img,
		FixedBottomBookingMatch,
		ChevronLeftIcon,
		DotsVerticalIcon,
		CalendarIcon
	}
}
</script>
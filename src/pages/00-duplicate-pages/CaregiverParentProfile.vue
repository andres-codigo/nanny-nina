<template>
	<div class="w-full">
		<TopNavigation
			background-color="bg-white"
			header-color="text-purple-900"
			text="Brittany"
		>
			<template #iconLeft
				><router-link to="/dashboard?tab=2"
					><ChevronLeftIcon
						class="w-8 h-8 text-purple-900"
						aria-hidden="true" /></router-link
			></template>
			<template #profileImage>
				<div class="flex-none w-8 mr-2">
					<img
						class="h-8 w-8 rounded-full"
						src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
						alt=""
					/>
				</div>
			</template>
			<template #iconRight
				><DotsVerticalIcon
					class="w-6 h-6 text-purple-900"
					aria-hidden="true"
			/></template>
		</TopNavigation>
		<main>
			<div class="h-full flex flex-col pb-40">
				<ProfileCarousel classes="mb-4" />

				<div class="mx-4">
					<h5
						class="text-header-five font-semibold antialiased mt-4 mb-2"
					>
						Meet Brittany
					</h5>

					<div class="flex flex-wrap gap-0 gap-y-2 mt-4">
						<div class="inline-flex items-center">
							<ImageComponent
								src="./assets/svg/stars/star-solid-gold.svg"
								class="w-5 h-5"
							/>
							<span
								class="pl-1 text-sm font-semibold leading-none"
								>(4.5/5)</span
							>
							<Dot color="bg-gray-500" />
						</div>
						<div class="inline-flex items-center">
							<ImageComponent
								src="./assets/svg/profile/cake.svg"
								class="w-5 h-5"
							/>
							<span class="pl-1 text-sm leading-none"
								>20th September</span
							>
						</div>
						<div class="inline-flex items-center">
							<Dot color="bg-gray-500" />
							<span class="pl-1 text-sm leading-none"
								>27 yrs</span
							>
						</div>
						<div class="inline-flex items-center">
							<Dot color="bg-gray-500" />
							<ImageComponent
								src="./assets/svg/profile/medal-gold.svg"
								class="w-5 h-5"
							/>
							<span class="pl-1 text-sm leading-none"
								>Creative</span
							>
						</div>
					</div>

					<Requirements />

					<hr class="border-1 border-gray-50 my-6" />

					<RequestNote />

					<hr class="border-1 border-gray-50 my-6" />

					<Preferences classes="mt-7" />

					<hr class="border-1 border-gray-50 my-6" />

					<Photos class="mt-7" />

					<hr class="border-1 border-gray-50 my-6" />

					<Reviews classes="mt-7">
						<template #title>
							<h5
								class="text-header-five font-semibold antialiased mb-7"
							>
								What Others Say
							</h5>
						</template>
					</Reviews>
				</div>
			</div>
			<section
				class="block fixed inset-x-0 w-full bottom-0 z-10 bg-white border-t border-gray"
			>
				<FixedBottomBookingMatch
					title="€16-18/hr"
					button-primary-text="Apply"
				/>
			</section>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../components/navigation-and-tabs/TopNavigation.vue'
import ProfileCarousel from '../../components/carousel/ProfileCarousel.vue'
import ImageComponent from '../../components/dom-elements/ImageComponent.vue'
import Dot from '../../components/dom-elements/Dot.vue'
import Requirements from '../../components/profile/view/Requirements.vue'
import RequestNote from '../../components/profile/view/RequestNote.vue'
import Preferences from '../../components/profile/view/Preferences.vue'
import Photos from '../../components/profile/_photos/Photos.vue'
import Reviews from '../../components/profile/view/Reviews.vue'
import FixedBottomBookingMatch from '../../components/content/fixed/FixedBottomBookingMatch.vue'

import { ChevronLeftIcon, DotsVerticalIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		ProfileCarousel,
		ImageComponent,
		Dot,
		Requirements,
		RequestNote,
		Preferences,
		Photos,
		Reviews,
		FixedBottomBookingMatch,
		ChevronLeftIcon,
		DotsVerticalIcon,
	},
	props: {
		parentDetails: {
			type: String,
			default: '',
		},
	},
	data() {
		return {
			durations: [
				{
					day: 'Mondays',
					time: '12:00 - 17:00',
					checked: 1,
				},
				{
					day: 'Tuesdays',
					time: '12:00 - 17:00',
					checked: 0,
				},
				{
					day: 'Wednesdays',
					time: '12:00 - 17:00',
					checked: 0,
				},
				{
					day: 'Thursdays',
					time: '12:00 - 17:00',
					checked: 0,
				},
				{
					day: 'Fridays',
					time: '12:00 - 17:00',
					checked: 0,
				},
				{
					day: 'Saturdays',
					time: '12:00 - 17:00',
					checked: 0,
				},
				{
					day: 'Sundays',
					time: '12:00 - 17:00',
					checked: 0,
				},
			],
		}
	},
}
</script>

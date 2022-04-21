<template>
	<div class="w-full bg-purple-500">
		<TopNavigation :hideHeader="true">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="h-screen flex flex-col mx-8 mb-10">
				<div class="mt-16">
					<h2 class="text-header-two text-center font-semibold text-green-500 antialiased">Booking request has been sent!</h2>
				</div>

				<div class="flex items-center justify-center my-32">
					<!--
						Image svg here
						<img src="*.svg" />
						* remove background color in div as visual placeholder
					-->
				</div>

				<h6 class="text-header-six text-green-500 inline-block mb-2">Next steps</h6>
				<ul role="list">
					<li class="py-1 flex">
						<CheckCircleIcon class="w-4 h-4 text-green-500" aria-hidden="true" />
						<div class="ml-3">
							<p class="text-sm text-white leading-none font-thin">Keep an eye on the bookings page for responses</p>
						</div>
					</li>
					<li class="py-1 flex">
						<CheckCircleIcon class="w-4 h-4 text-green-500" aria-hidden="true" />
						<div class="ml-3">
							<p class="text-sm text-white leading-none font-thin">We've suggested profiles, you can also invite more</p>
						</div>
					</li>
					<li class="py-1 flex">
						<CheckCircleIcon class="w-4 h-4 text-green-500" aria-hidden="true" />
						<div class="ml-3">
							<p class="text-sm text-white leading-none font-thin">Turn on notification to respond quickly</p>
						</div>
					</li>
				</ul>

				<div class="flex flex-col justify-center items-center mt-7">
					<CheckboxLeftWithContainerAndLabelRight labelContainerClass="text-xs font-bold text-white" inputClass="text-black">
						<template #text>Turn on notifications</template>
					</CheckboxLeftWithContainerAndLabelRight>
				</div>

				<div class="flex flex-col justify-center items-center mb-12">
					<div class="grid grid-rows-2 gap-2">
						<div><AnchorSecondary text="Invite Nannies" class="w-button-xl text-xl py-4" /></div>
						<div class="text-center">
							<a href="#" target="_self" class="inline-flex anchor-with-underline text-white font-medium mt-4">Learn more about Nannies</a>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation/TopNavigation.vue'
import CheckboxLeftWithContainerAndLabelRight from '../../../../../components/form/CheckboxLeftWithContainerAndLabelRight.vue'
import ButtonOutlineLight from '../../../../../components/form/buttons/ButtonOutlineLight.vue'
import AnchorSecondary from '../../../../../components/dom-elements/AnchorSecondary.vue'

import { ChevronLeftIcon, CheckCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		CheckboxLeftWithContainerAndLabelRight,
		ButtonOutlineLight,
		AnchorSecondary,
		ChevronLeftIcon,
		CheckCircleIcon
	}
}
</script>
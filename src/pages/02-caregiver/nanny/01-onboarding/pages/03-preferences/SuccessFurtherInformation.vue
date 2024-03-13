<template>
	<div class="w-full h-full bg-lilac-100">
		<TopNavigation background-color="bg-lilac-100" :hide-header="true">
			<template #iconLeft
				><router-link to="/dashboard?tab=2"
					><ChevronLeftIcon
						class="w-8 h-8 text-black"
						aria-hidden="true" /></router-link
			></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col mx-4 mb-10">
				<div class="mt-16 mx-9">
					<h2
						class="font-semibold text-header-two text-center antialiased mb-6"
					>
						Congrats!<br />
						You are all set
					</h2>
					<p class="font-thin text-center">
						You can now apply to jobs and receive booking requests
						in the bookings page
					</p>
				</div>

				<div class="flex items-center justify-center">
					<!--
						Image svg here
						<img src="*.svg" />
						* remove background color in div as visual placeholder
					-->
				</div>

				<div class="flex flex-col justify-center items-center mt-96">
					<div class="grid grid-rows-2 gap-2">
						<div>
							<AnchorSecondary
								text="Continue to apply"
								classes="w-button-lg text-xl py-4"
							/>
						</div>
						<div class="text-center mt-4">
							<AnchorTextOnly
								text="Learn more about being a Nanny >"
								text-color-class="anchor-black"
							/>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation-and-tabs/TopNavigation.vue'
import AnchorSecondary from '../../../../../../components/dom-elements/AnchorSecondary.vue'
import AnchorTextOnly from '../../../../../../components/dom-elements/AnchorTextOnly.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		AnchorSecondary,
		AnchorTextOnly,
		ChevronLeftIcon,
	},
}
</script>

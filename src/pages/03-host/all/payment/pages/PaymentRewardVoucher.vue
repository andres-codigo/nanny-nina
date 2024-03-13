<template>
	<div class="w-full h-full">
		<TopNavigation text="Voucher">
			<template #iconLeft
				><router-link to="'/dashboard?tab=1"
					><ChevronLeftIcon
						class="w-8 h-8 text-white"
						aria-hidden="true" /></router-link
			></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col mx-4">
				<div class="pt-6 mb-10">
					<div
						class="inline-flex items-center justify-center w-full h-52 bg-purple-50 text-purple-500 text-9xl font-bold mb-6"
					>
						-10%
					</div>
					<h5 class="text-header-five font-bold antialiased mb-2">
						-10% Off your next booking
					</h5>
					<p class="font-light antialiased">
						You can either add this to your booking payment or copy
						the code below to gift to a friend.
					</p>
				</div>

				<div class="mb-10">
					<label
						for="referral-code"
						class="block text-xs font-semibold sr-only"
						>Your code</label
					>
					<div
						class="flex flex-col justify-center items-center relative rounded-full mt-1 mb-6"
					>
						<input
							id="referral-code"
							type="text"
							name="referral-code"
							class="appearance-none block w-input-base px-3 py-2 border border-gray-400 rounded-full text-gray-600 focus:outline-none focus:ring-0 focus:border-purple-500"
						/>
						<div
							class="absolute inset-y-0 right-28 pr-3 flex items-center pointer-events-none"
						>
							<span
								><ImageComponent
									src="./assets/svg/other/content-copy.svg"
									class="w-5 h-5"
							/></span>
						</div>
					</div>
					<div class="flex flex-col justify-center items-center">
						<ButtonPrimary
							text="Share"
							classes="w-button-sm text-xl min-h-[42px] ml-2 py-2"
						/>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import ImageComponent from '../../../../../components/dom-elements/ImageComponent.vue'
import ButtonPrimary from '../../../../../components/buttons/ButtonPrimary.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		ImageComponent,
		ButtonPrimary,
		ChevronLeftIcon,
	},
}
</script>

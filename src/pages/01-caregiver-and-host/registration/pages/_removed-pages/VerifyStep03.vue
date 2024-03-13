<template>
	<div class="w-full h-screen">
		<TopNavigation
			background-color="bg-white"
			:display-border-bottom="false"
		>
			<template #iconLeft
				><router-link to="/dashboard"
					><ChevronLeftIcon
						class="w-8 h-8 text-purple-900"
						aria-hidden="true" /></router-link
			></template>
		</TopNavigation>
		<main>
			<div class="mt-20 mx-4">
				<form class="w-full" action="#" method="POST">
					<div class="mt-6">
						<h3
							class="text-center text-header-three font-bold antialiased"
						>
							Verify your number
						</h3>
						<p class="text-center font-light mt-6">
							A 6 digit code has been sent to
						</p>
						<p class="text-center text-purple-500 font-light">
							+31 6844 8440
						</p>
						<p class="text-center text-sm font-light mt-6">
							Enter the code we sent to +31 6844 84610 via SMS
						</p>
					</div>
					<div class="mt-6">
						<div
							class="flex justify-center space-x-2 slideshow-navigation"
						>
							<input
								id="v1"
								type="number"
								name="v1"
								maxlength="1"
								class="dot no-add-remove-on-input text-center text-4xl h-11 w-11 rounded-full border border-purple-500 bg-none focus:outline-none"
							/>
							<input
								id="v2"
								type="number"
								name="v2"
								maxlength="1"
								class="dot no-add-remove-on-input text-center text-4xl h-11 w-11 rounded-full border border-purple-500 bg-none focus:outline-none"
							/>
							<input
								id="v3"
								type="number"
								name="v3"
								maxlength="1"
								class="dot no-add-remove-on-input text-center text-4xl h-11 w-11 rounded-full border border-purple-500 bg-none focus:outline-none"
							/>
							<input
								id="v4"
								type="number"
								name="v4"
								maxlength="1"
								class="dot no-add-remove-on-input text-center text-4xl h-11 w-11 rounded-full border border-purple-500 bg-none focus:outline-none"
							/>
							<input
								id="v5"
								type="number"
								name="v5"
								maxlength="1"
								class="dot no-add-remove-on-input text-center text-4xl h-11 w-11 rounded-full border border-purple-500 bg-none focus:outline-none"
							/>
							<input
								id="v6"
								type="number"
								name="v6"
								maxlength="1"
								class="dot no-add-remove-on-input text-center text-4xl h-11 w-11 rounded-full border border-purple-500 bg-none focus:outline-none"
							/>
						</div>
					</div>

					<div
						class="flex flex-col justify-center items-center mt-14"
					>
						<p class="text-sm text-center font-light mt-6 mb-10">
							Didn't get a code?
							<a
								href="#"
								target="_self"
								class="anchor-blue anchor-with-underline"
								>Resend code</a
							>
						</p>
						<ButtonPrimary
							text="Continue"
							classes="w-button-lg text-xl py-4"
						/>
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import ButtonPrimary from '../../../../../components/buttons/ButtonPrimary.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		ButtonPrimary,
		ChevronLeftIcon,
	},
}
</script>

<style scoped>
.no-add-remove-on-input::-webkit-outer-spin-button,
.no-add-remove-on-input::-webkit-inner-spin-button {
	/* display: none; <- Crashes Chrome on hover */
	-webkit-appearance: none;
	margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}
</style>

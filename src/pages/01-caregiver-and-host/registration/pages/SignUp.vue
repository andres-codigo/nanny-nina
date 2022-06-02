<template>
	<div class="w-full">
		<TopNavigation backgroundColor="bg-white" :rightIconIsButton="true">
			<template #iconLeft><router-link to="/dashboard?tab=1"><ChevronLeftIcon class="w-8 h-8" aria-hidden="true" /></router-link></template>
			<template #iconRight><ButtonOutlineDark text="Sign in" class="w-button-base py-1 text-sm font-semibold" /></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col justify-center mx-4">
				<div class="inline-flex w-14 h-14">
					<Header class="mx-0 mt-0" />
				</div>
				<h5 class="text-header-five antialiased mb-2">Get started 100% free</h5>
				<p class="text-sm font-light">It's free to join, Already have an account? <a href="#" target="_self" class="anchor-blue anchor-with-underline">Sign in</a></p>

				<h2 class="text-header-two font-semibold antialiased mt-8 mb-2">Sign up as <span class="text-purple-500">Parent/Host</span></h2>
				<p class="font-light">Request Nanny, Childminder or an Au pair</p>

				<div class="mt-20">
					<div class="flex flex-col justify-center items-center">
						<ButtonOutlineDark class="inline-flex w-full text-sm leading-5 py-4">
							<template #iconWithText>
								<Img class="w-5 h-5" src="./assets/svg/buttons/google.svg" alt="" />
								<span class="pl-2">Continue with Google</span>
							</template>
						</ButtonOutlineDark>
					</div>

					<div class="relative my-8">
						<div class="absolute inset-0 flex items-center">
							<div class="w-full mx-8 border-t border-gray-300" />
						</div>
						<div class="relative flex justify-center text-xs">
							<span class="px-2 bg-white text-gray-500"> OR </span>
						</div>
					</div>
				</div>

				<form class="w-full" action="#" method="POST">

					<div class="flex flex-col mt-14">
						<div class="grid grid-cols-2 gap-4 gap-y-6 gap-x-2">
							<div><SelectMenu labelText="Gender" /></div>
							<div><InputField text="Date of Birth" /></div>

							<div><InputField text="First name" /></div>
							<div><InputField text="Surname" /></div>
						</div>

						<div class="grid grid-cols-1 gap-4 gap-y-6 gap-x-2 mt-6">
							<div><InputField text="Email Address" /></div>
							<div><InputField text="New Password" type="password" value="newpassword" /></div>
							<div><InputField text="Retype Password" type="text" /></div>
							<div><SelectMenu labelText="Country" /></div>
						</div>
					</div>

					<div class="flex flex-col justify-center items-center mt-14">
						<p class="mx-8 text-xs font-medium text-center">Thanks for signing up to Nanny Nina! Based on your sign up, we would love to keep you posted with product news and tips!. You can opt out at any time. See our <a href="#" target="_self" class="anchor-blue anchor-with-underline">Privacy Policy</a> for more information.</p>
						<CheckboxLeftWithContainerAndLabelRight>
							<template #text>No, please don't send any marketing emails or content</template>
						</CheckboxLeftWithContainerAndLabelRight>
						<div class="mt-12 mb-4">
							<ButtonPrimary text="Sign up" class="w-button-lg text-xl py-4" />
						</div>
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../components/navigation-and-tabs/TopNavigation.vue'
import Header from '../../../../components/content/logos/Header.vue'
import ButtonOutlineDark from '../../../../components/buttons/ButtonOutlineDark.vue'
import SelectMenu from '../../../../components/form/SelectMenu.vue'
import InputField from '../../../../components/form/InputField.vue'
import CheckboxLeftWithContainerAndLabelRight from '../../../../components/form/CheckboxLeftWithContainerAndLabelRight.vue'
import ButtonPrimary from '../../../../components/buttons/ButtonPrimary.vue'
import Img from '../../../../components/dom-elements/Img.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Header,
		ButtonOutlineDark,
		SelectMenu,
		InputField,
		CheckboxLeftWithContainerAndLabelRight,
		ButtonPrimary,
		Img,
		ChevronLeftIcon
	}
}
</script>
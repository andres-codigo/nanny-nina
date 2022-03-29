<template>
	<div class="w-full">
		<TopNavigation :hideHeader="true" backgroundColor="bg-white">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col justify-center mx-4">

				<h5 class="mb-2 text-left text-header-five text-gray-900">Get started 100% free</h5>
				<p class="text-sm font-light">It's free to join, Already have an account? <a href="#" class="text-blue-500 anchor-with-underline">Sign in</a></p>

				<h2 class="mt-8 mb-2 text-left text-header-two font-semibold text-gray-900">Sign up as <span class="text-lilac-500">Parent/Host</span></h2>
				<p class="font-light">Request Nanny, Childminder or an Au pair</p>

				<div class="mt-20">
					<div class="flex flex-col justify-center items-center">
						<ButtonOutlineDark class="inline-flex w-full py-4 text-sm leading-5">
							<template #iconWithText>
								<Google class="w-5 h-5" />
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
							<div><SelectMenu text="Gender" /></div>
							<div><InputField text="Date of Birth" /></div>

							<div><InputField text="First name" /></div>
							<div><InputField text="Surname" /></div>
						</div>

						<div class="grid grid-cols-1 gap-4 gap-y-6 gap-x-2 mt-6">
							<div><InputField text="Email Address" /></div>
							<div><InputField text="New Password" type="password" value="newpassword" /></div>
							<div><InputField text="Retype Password" type="text" /></div>
							<div><SelectMenu text="Country" /></div>
						</div>
					</div>

					<div class="flex flex-col justify-center items-center mt-14">
						<p class="mx-8 text-xs font-medium text-center">Thanks for signing up to Nanny Nina! Based on your sign up, we would love to keep you posted with product news and tips!. You can opt out at any time. See our <a href="#" class="text-blue-500 anchor-with-underline">Privacy Policy</a> for more information.</p>
						<CheckboxLeftWithContainerAndLabelRight text="No, please don’t send any marketing emails or content" />
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
import TopNavigation from '../../../../components/navigation/TopNavigation.vue'
import Header from '../../../../components/header/Header.vue'
import ButtonOutlineDark from '../../../../components/buttons/ButtonOutlineDark.vue'
import SelectMenu from '../../../../components/form/SelectMenu.vue'
import InputField from '../../../../components/form/InputField.vue'
import CheckboxLeftWithContainerAndLabelRight from '../../../../components/form/CheckboxLeftWithContainerAndLabelRight.vue'
import ButtonPrimary from '../../../../components/buttons/ButtonPrimary.vue'
import Google from '../../../../assets/svg/other/google.vue'

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
		Google,
		ChevronLeftIcon
	}
}
</script>
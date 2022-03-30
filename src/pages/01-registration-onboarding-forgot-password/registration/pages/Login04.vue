<template>
	<div class="w-full h-screen">
		<TopNavigation backgroundColor="bg-white" :dropShadow="false">
			<template #iconLeft><Header class="mx-5 mt-8" /></template>
		</TopNavigation>
		<main>
			<div class="min-h-screen flex flex-col justify-center mx-4">
				<h4 class="ml-3 my-6 text-left text-header-four font-semibold text-gray-900">Login</h4>
				<form class="w-full" action="#" method="POST">
					<div class="m-0">
						<InputField text="Email Address" />
					</div>

					<div class="mt-6">
						<InputField text="Password" />
						<a href="#" class="block text-xs font-light text-blue-500 mt-3 anchor-with-underline">Forgot your password?</a>
					</div>

					<div class="flex flex-col justify-center items-center mt-14">
						<div class="mt-6 mb-4">
							<ButtonPrimary text="Login" class="w-button-xl text-xl py-4" />
						</div>
						<p class="text-sm font-light">Don't have an account? <a href="#" class="font-light text-blue-500 anchor-with-underline">Sign Up</a></p>
					</div>
				</form>

				<div class="mt-20">
					<div class="relative">
						<div class="absolute inset-0 flex items-center">
							<div class="w-full border-t border-gray-300" />
						</div>
						<div class="relative flex justify-center text-xs">
							<span class="px-2 bg-white text-gray-500"> OR </span>
						</div>
					</div>

					<div class="flex flex-col justify-center items-center mt-6">
						<ButtonOutlineDark class="inline-flex w-full py-4 text-sm leading-5">
							<template #iconWithText>
								<Google class="w-5 h-5" />
								<span class="pl-2">Sign in with Google</span>
							</template>
						</ButtonOutlineDark>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../components/navigation/TopNavigation.vue'
import Header from '../../../../components/header/Header.vue'
import InputField from '../../../../components/form/InputField.vue'
import ButtonPrimary from '../../../../components/buttons/ButtonPrimary.vue'
import ButtonOutlineDark from '../../../../components/buttons/ButtonOutlineDark.vue'
import Google from '../../../../assets/svg/other/google.vue'

export default {
	components: {
		TopNavigation,
		Header,
		InputField,
		ButtonPrimary,
		ButtonOutlineDark,
		Google
	}
}
</script>
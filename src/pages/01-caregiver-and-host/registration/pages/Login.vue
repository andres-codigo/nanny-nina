<template>
	<div class="w-full h-screen">
		<TopNavigation
			background-color="bg-white"
			:display-border-bottom="false"
		>
			<template #iconLeft><HeaderLogo class="mx-5 mt-8" /></template>
		</TopNavigation>
		<main>
			<div class="min-h-screen flex flex-col justify-center mx-4">
				<h4
					class="text-header-four font-semibold antialiased ml-3 my-6"
				>
					Login
				</h4>
				<form class="w-full" action="#" method="POST">
					<div class="m-0">
						<InputField text="Email Address" />
					</div>

					<div class="mt-6">
						<InputField text="Password" />
						<a
							href="#"
							target="_self"
							class="block text-xs font-light anchor-blue mt-3 anchor-with-underline"
							>Forgot your password?</a
						>
					</div>

					<div
						class="flex flex-col justify-center items-center mt-14"
					>
						<div class="mt-6 mb-4">
							<ButtonPrimary
								text="Login"
								classes="w-button-xl text-xl py-4"
							/>
						</div>
						<p class="text-sm font-light">
							Don't have an account?
							<a
								href="#"
								target="_self"
								class="font-light anchor-blue anchor-with-underline"
								>Sign Up</a
							>
						</p>
					</div>
				</form>

				<div class="mt-20">
					<div class="relative">
						<div class="absolute inset-0 flex items-center">
							<div class="w-full border-t border-gray-300" />
						</div>
						<div class="relative flex justify-center text-xs">
							<span class="px-2 bg-white text-gray-500">
								OR
							</span>
						</div>
					</div>

					<div class="flex flex-col justify-center items-center mt-6">
						<ButtonOutlineDark
							classes="inline-flex w-full text-sm leading-5 py-4"
						>
							<template #iconWithText>
								<ImageComponent
									class="w-5 h-5"
									src="./assets/svg/buttons/google.svg"
									alt=""
								/>
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
import TopNavigation from '../../../../components/navigation-and-tabs/TopNavigation.vue'
import HeaderLogo from '../../../../components/content/logos/HeaderLogo.vue'
import InputField from '../../../../components/form/InputField.vue'
import ButtonPrimary from '../../../../components/buttons/ButtonPrimary.vue'
import ButtonOutlineDark from '../../../../components/buttons/ButtonOutlineDark.vue'
import ImageComponent from '../../../../components/dom-elements/ImageComponent.vue'

export default {
	components: {
		TopNavigation,
		HeaderLogo,
		InputField,
		ButtonPrimary,
		ButtonOutlineDark,
		ImageComponent,
	},
}
</script>

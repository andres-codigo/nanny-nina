<template>
	<div class="w-full h-screen">
		<Header />
		<main>
			<div class="min-h-screen flex flex-col justify-center mx-4">
				<h4 class="my-6 text-left text-header-four text-gray-900">Login</h4>
				<form class="" action="#" method="POST">
					<div class="m-0">
						<InputField text="Email Address" />
					</div>

					<div class="mt-6">
						<InputField text="Password" />
						<a href="#" class="text-xs font-light text-blue-500 mt-4 inline-block anchor-with-underline">Forgot your password?</a>
					</div>

					<div class="mt-14">
						<div class="my-6">
							<ButtonPrimary text="Login" />
						</div>
						<div class="flex items-center justify-center">
							<div class="text-sm font-light">Don't have an account? <span class="font-light text-blue-500 underline">Sign Up</span></div>
						</div>
					</div>
				</form>

				<div class="mt-14">
					<div class="relative">
						<div class="absolute inset-0 flex items-center">
							<div class="w-full border-t border-gray-300" />
						</div>
						<div class="relative flex justify-center text-xs">
							<span class="px-2 bg-white text-gray-500"> OR </span>
						</div>
					</div>

					<div class="mt-6 grid grid-cols-1">
						<div>
							<a href="#" class="w-full inline-flex justify-center py-4 px-4 border border-gray-300 rounded-full text-sm font-medium text-gray-900">
								<Google class="w-5 h-5" />
								<span class="pl-2">Sign in with Google</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import Header from '../../../../components/header/Header.vue'
import InputField from '../../../../components/form/InputField.vue'
import ButtonPrimary from '../../../../components/buttons/ButtonPrimary.vue'
import Google from '../../../../assets/svg/other/google.vue'

export default {
	components: {
		Header,
		InputField,
		ButtonPrimary,
		Google
	}
}
</script>
<script setup>
import Header from '../../../components/header/Header.vue'
import ButtonPrimary from '../../../components/buttons/ButtonPrimary.vue'
import ButtonGhost from '../../../components/buttons/ButtonGhost.vue'
import InputField from '../../../components/form/inputs/InputField.vue'
</script>

<template>
	<div class="bg-white h-screen">
		<Header />
		<main>
			<div class="min-h-full flex flex-col justify-center py-12 mx-10 mt-8">
				<h2 class="my-6 text-left text-2xl font-normal text-gray-900">Forgot Password</h2>
				<p class="mb-4 h-20 text-sm font-light">Please enter your registered email, you will receive an email with a verification code to reset your password.</p>
				<form action="#" method="POST">
					<div class="m-0 h-28">
						<InputField text="Email Address" />
					</div>

					<div class="mt-10">
						<div class="my-6">
							<ButtonPrimary text="Request Link" />
						</div>

						<div class="flex items-center justify-center">
							<ButtonGhost text="Cancel" />
						</div>
					</div>
				</form>
			</div>
		</main>
	</div>
</template>
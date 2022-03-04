<script setup>
import Header from '../../../components/header/Header.vue'
import HeaderSizeTwo from '../../../components/common/HeaderSizeTwo.vue'
import ParagraphForHeader from '../../../components/common/ParagraphForHeader.vue'
import ButtonPrimary from '../../../components/buttons/ButtonPrimary.vue'
import ButtonGhost from '../../../components/buttons/ButtonGhost.vue'
import InputField from '../../../components/form/inputs/InputField.vue'
</script>

<template>
	<div class="bg-white">
		<Header />
		<main>
			<div class="min-h-full flex flex-col justify-center py-12 mx-10 mt-8">
				<HeaderSizeTwo text="Forgot Password" />
				<ParagraphForHeader text="Please enter your registered email, you will receive an email with a verification code to reset your password." />
				<form action="#" method="POST">
					<div class="m-0">
						<label for="email" class="block text-sm font-light text-gray-700 pl-4">Email Address</label>
						<div class="mt-1 relative rounded-md shadow-sm">
							<input
								type="email"
								name="email"
								id="email"
								class="
									appearance-none block w-full
									px-3 py-2
									border border-red-300 text-red-900 rounded-full shadow-sm
									placeholder-red-300
									focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
								placeholder="you@example.com"
								value="adamwathan"
								aria-invalid="true"
								aria-describedby="email-error"
							>
						</div>
						<p class="mt-2 text-sm text-red-600 pl-4" id="email-error">The email address you have entered is incorrect</p>
					</div>

					<div class="mt-14">
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
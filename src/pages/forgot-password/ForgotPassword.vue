<script setup>
import Header from '../../components/header/Header.vue'
import HeaderSizeTwo from '../../components/common/HeaderSizeTwo.vue'
import ParagraphForHeader from '../../components/common/ParagraphForHeader.vue'
import ButtonIndigo from '../../components/buttons/ButtonIndigo.vue'
import InputField from '../../components/form/InputField.vue'
</script>

<template>
	<div class="w-screen h-screen">
		<Header />
		<main>
			<div class="min-h-full flex flex-col justify-center py-12 mx-10 mt-8">
				<HeaderSizeTwo text="Forgot Password" />
				<ParagraphForHeader text="Please enter your registered email, you will receive an email with a verification code to reset your password." />
				<form action="#" method="POST">
					<div class="m-0">
						<InputField text="Email Address" />
					</div>

					<div class="mt-14">
						<div class="my-6">
							<ButtonIndigo text="Request Link" />
						</div>

						<div class="flex items-center justify-center">
							<a href="#" class="text-lg font-medium underline hover:no-underline">Cancel</a>
						</div>
					</div>
				</form>
			</div>
		</main>
	</div>
</template>
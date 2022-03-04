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
						<InputField text="Email Address" />
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
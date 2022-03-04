<script setup>
import Header from '../../../components/header/Header.vue'
import HeaderSizeTwo from '../../../components/common/HeaderSizeTwo.vue'
import ParagraphForHeader from '../../../components/common/ParagraphForHeader.vue'
import ButtonPrimary from '../../../components/buttons/ButtonPrimary.vue'
import ButtonGhost from '../../../components/buttons/ButtonGhost.vue'
import InputField from '../../../components/form/inputs/InputField.vue'
</script>

<template>
	<div class="bg-white h-screen">
		<Header />
		<main>
			<div class="min-h-full flex flex-col justify-center py-12 mx-10 mt-8">
				<HeaderSizeTwo text="Enter New Password" />
				<form action="#" method="POST">
					<div class="m-0 h-28">
						<InputField text="New Password" type="password" value="newpassword" />
					</div>

					<div class="m-0 h-28">
						<InputField text="Retype Password" type="password" />
					</div>

					<div class="mt-10">
						<div class="my-6">
							<ButtonPrimary text="Change Password" />
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
<script setup>
import Header from '../../../../components/header/Header.vue'
import ButtonPrimary from '../../../../components/buttons/ButtonPrimary.vue'
import ButtonGhost from '../../../../components/buttons/ButtonGhost.vue'
import InputField from '../../../../components/form/InputField.vue'
</script>

<template>
	<div class="bg-white h-screen">
		<Header />
		<main>
			<div class="min-h-full flex flex-col justify-center py-12 mx-4 mt-8">
				<h4 class="my-6 text-left text-3xl font-normal text-gray-900">Enter New Password</h4>
				<form action="#" method="POST">
					<div class="m-0 h-28">
						<InputField text="New Password" type="password" value="newpassword" />
					</div>

					<div class="m-0 h-28">
						<InputField text="Retype Password" type="text" />
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
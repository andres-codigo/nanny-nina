<script setup>
import ButtonPrimary from '../../../../components/buttons/ButtonPrimary.vue'
import InputField from '../../../../components/form/inputs/InputField.vue'
</script>

<template>
	<div class="bg-white h-screen">
		<main>
			<div class="min-h-full flex flex-col justify-center py-12 mx-4 mt-8 bg-red">
				<h2 class="my-6 text-left text-2xl font-normal text-gray-900">Let's get to know each</h2>
				<form action="#" method="POST">
					<div class="m-0 h-28">
						<InputField text="Gender" />
					</div>

					<div class="mt-10">
						<div class="my-6">
							<ButtonPrimary text="Next" />
						</div>
					</div>
				</form>
			</div>
		</main>
	</div>
</template>
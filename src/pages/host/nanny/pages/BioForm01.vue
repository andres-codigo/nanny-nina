<script setup>
import InputField from '../../../../components/form/InputField.vue'
import SelectMenu from '../../../../components/form/SelectMenu.vue'
import ButtonPrimary from '../../../../components/buttons/ButtonPrimary.vue'
</script>

<template>
	<div class="h-full">
		<main>
			<div class="flex flex-col py-12 mx-4 mt-8">
				<h2 class="my-6 text-left text-2xl font-normal text-gray-900">Let's get to know each other</h2>
				<form action="#" method="POST">
					<div class="h-28">
						<h3 class="text-lg font-light">What is your gender?</h3>
						<div class="w-1/2 mt-4">
							<SelectMenu text="Gender" />
						</div>
					</div>

					<div class="mt-8 h-28">
						<h3 class="text-lg font-light">When is your birthday?</h3>
						<div class="w-1/2 mt-4">
							<InputField text="Date of Birth" placeholder="DD/MM/YYY" />
						</div>
					</div>

					<div class="mt-16">
						<h3 class="text-lg font-light">When do you live?</h3>
						<div class="mt-4 grid grid-cols-2 gap-y-6 gap-x-2">
							<div><InputField text="Country" /></div>
							<div><InputField text="Postcode" /></div>
						</div>

						<div class="mt-6">
							<InputField text="Number, Home address" />
						</div>

						<div class="mt-6 grid grid-cols-2 gap-y-6 gap-x-2">
							<div><InputField text="Province" /></div>
							<div><InputField text="State/City" /></div>
						</div>
					</div>

					<div class="mt-16">
						<h3 class="text-lg font-light">How many children do you have?</h3>

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
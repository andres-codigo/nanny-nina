<script setup>
import TopNavigation from '../../../../../components/navigation/TopNavigation.vue'
import InputField from '../../../../../components/form/InputField.vue'
import SelectMenu from '../../../../../components/form/SelectMenu.vue'
import ButtonPrimary from '../../../../../components/buttons/ButtonPrimary.vue'
</script>

<template>
	<div class="h-full">
		<TopNavigation routerLinkPath="/dashboard" text="Basic Information" />
		<main>
			<div class="flex flex-col pt-6 mx-4">
				<form action="#" method="POST">
					<h2 class="my-6 text-left text-2xl font-normal text-gray-900">Let's get to know each other</h2>

					<div class="my-16">
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

					<div class="mt-10">
						<div class="my-6">
							<ButtonPrimary text="Save &amp; Continue" />
						</div>
					</div>
				</form>
			</div>
		</main>
	</div>
</template>
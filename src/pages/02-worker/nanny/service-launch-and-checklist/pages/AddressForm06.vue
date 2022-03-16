<script setup>
import TopNavigation from '../../../../../components/navigation/TopNavigation.vue'
import InputField from '../../../../../components/form/InputField.vue'
import ButtonPrimary from '../../../../../components/buttons/ButtonPrimary.vue'
</script>

<template>
	<div class="w-full h-full">
		<TopNavigation routerLinkPath="/dashboard" text="Nanny Form" hideIcon="true" />
		<main>
			<div class="flex flex-col pt-6 mx-4">
				<form action="#" method="POST">
					<h5 class="my-6 text-left text-header-five font-normal text-gray-900">Let's get to know each other</h5>

					<div class="my-16">
						<span class="inline-block font-light">When do you live?</span>
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
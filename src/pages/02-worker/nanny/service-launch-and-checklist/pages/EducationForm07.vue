<script setup>
import TopNavigation from '../../../../../components/navigation/TopNavigation.vue'
import ChecklistItem from '../../../../../components/form/ChecklistItem.vue'
import SelectMenu from '../../../../../components/form/SelectMenu.vue'
import ButtonPrimary from '../../../../../components/buttons/ButtonPrimary.vue'
</script>

<template>
	<div class="h-full">
		<TopNavigation routerLinkPath="/dashboard" text="Nanny Form" />
		<main>
			<div class="flex flex-col pt-6 mx-4">
				<form action="#" method="POST">
					<h2 class="my-6 text-left text-2xl font-normal text-gray-900">Education  <span class="text-base text-gray-500">(Optional)</span></h2>

					<div class="mt-16 mb-8">
						<h3 class="text-lg font-light">Current Education Status</h3>
						<fieldset>
							<legend class="sr-only">Current Education Status</legend>
							<ChecklistItem text="Currently enrolled" />
							<ChecklistItem text="Completed" />
							<ChecklistItem text="I don't have a formal education" />
						</fieldset>
					</div>

					<h3 class="text-lg font-medium">What is your highest level of education?</h3>
					<p class="text-sm font-thin mb-8">Please upload your certificate if you wish to verify yourself as a trained childcare professional or become a childminder.</p>
					<SelectMenu />

					<h2 class="mt-12 text-left text-2xl font-normal text-gray-900">Other Certifications</h2>
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
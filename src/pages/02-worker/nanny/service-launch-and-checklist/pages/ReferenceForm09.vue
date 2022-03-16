<script setup>
import TopNavigation from '../../../../../components/navigation/TopNavigation.vue'
import CheckboxQuestion from '../../../../../components/form/CheckboxQuestion.vue'
import InputField from '../../../../../components/form/InputField.vue'
import ButtonPrimary from '../../../../../components/buttons/ButtonPrimary.vue'
</script>

<template>
	<div class="w-full h-full">
		<TopNavigation routerLinkPath="/dashboard" text="Nanny Form" hideIcon="true" />
		<main>
			<div class="flex flex-col pt-6 mx-4">
				<form action="#" method="POST">
					<h5 class="my-6 text-left text-header-five font-normal text-gray-900">Reference Check</h5>

					<div class="mt-4 mb-16">
						<div class="mb-2">
							<h6 class="text-header-six font-medium mb-4">Reference</h6>
							<p class="text-sm font-thin mb-4">Do you have a reference?</p>
							<CheckboxQuestion screenReaderOnly="true" legend="Do you have any health conditions?" QuestionOneText="Yes" QuestionTwoText="No" />
						</div>

						<div>
							<p class="text-sm font-thin">If yes, please provide details</p>

							<div class="mt-4 grid grid-cols-2 gap-y-6 gap-x-2">
								<div><InputField text="First name" /></div>
								<div><InputField text="Last name" /></div>
							</div>

							<div class="mt-6">
								<InputField text="Mobile no" />
							</div>

							<div class="mt-6">
								<InputField text="Email" />
							</div>
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
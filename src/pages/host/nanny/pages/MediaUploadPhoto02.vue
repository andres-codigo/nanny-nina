<script setup>
import TopNavigation from '../../../../components/navigation/TopNavigation.vue'
import ButtonPrimary from '../../../../components/buttons/ButtonPrimary.vue'
</script>

<template>
	<div class="h-full">
		<TopNavigation routerLinkPath="/dashboard" />
		<main>
			<div class="flex flex-col pt-6 mx-4">
				<form action="#" method="POST">
					<h2 class="mt-6 mb-2 text-left text-2xl font-normal text-gray-900">Let's put a face to your name</h2>
					<h3	h3 class="font-light">Preferably a smiling picture, if you have a pet or kid in it even better!</h3>

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
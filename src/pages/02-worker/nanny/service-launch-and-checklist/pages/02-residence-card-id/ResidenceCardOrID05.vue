<script setup>
import TopNavigation from '../../../../../../components/navigation/TopNavigation.vue'
import Front from '../../../../../../components/media/identification/Front.vue'
import Back from '../../../../../../components/media/identification/Back.vue'
import ButtonDisabled from '../../../../../../components/buttons/ButtonDisabled.vue'
</script>

<template>
	<div class="w-full h-full">
		<TopNavigation routerLinkPath="/dashboard" text="Media Upload" hideIcon="true" />
		<main>
			<div class="flex flex-col pt-12 mx-4">
				<form action="#" method="POST">
					<Front />

					<hr class="bg-gray-500 my-6" />

					<Back />

					<div class="mt-20">
						<div class="my-6">
							<ButtonDisabled text="Upload &amp; Continue" />
						</div>
					</div>
				</form>
			</div>
		</main>
	</div>
</template>
<template>
	<div class="w-full h-full bg-lilac-500">
		<TopNavigation routerLinkPath="/dashboard" :hideHeader="true" />
		<main>
			<div class="flex flex-col mx-4 mb-10">
				<div class="mt-16 mx-9">
					<h2 class="mb-6 text-header-two font-medium text-green-500 text-center">Congrats!<br /> You have applied to the Sanders!</h2>
				</div>

				<div class="flex items-center justify-center">
					<!--
						Image component for svg here
						<Image src="*.svg" />
						* remove background color in div as visual placeholder
					-->
				</div>

				<div class="mt-96">
					<p class="font-thin text-white text-center">You can now apply to jobs and receive booking requests in the bookings page</p>
					<div class="my-6">
						<ButtonSecondary text="Continue to Explore" />
					</div>

					<div class="flex items-center justify-center">
						<ButtonGhost class="w-full py-3 text-white" text="Cancel Application" />
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation/TopNavigation.vue'
import ButtonSecondary from '../../../../../components/buttons/ButtonSecondary.vue'
import ButtonGhost from '../../../../../components/buttons/ButtonGhost.vue'

export default {
	components: {
		TopNavigation,
		ButtonSecondary,
		ButtonGhost
	}
}
</script>
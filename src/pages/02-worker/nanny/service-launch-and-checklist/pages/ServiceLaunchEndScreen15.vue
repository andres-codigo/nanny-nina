<script setup>
import TopNavigation from '../../../../../components/navigation/TopNavigation.vue'
import ButtonSecondary from '../../../../../components/buttons/ButtonSecondary.vue'
</script>

<template>
	<div class="w-full h-full bg-blue-500">
		<TopNavigation routerLinkPath="/dashboard" :hideHeader="true" :hideIcon="true" />
		<main>
			<div class="h-screen flex flex-col mx-4">
				<div class="mt-16 mx-9">
					<h2 class="mb-6 text-header-two font-medium text-green-500 text-center">Congrats!<br /> You are all set</h2>
					<p class="font-thin text-white text-center">You can now apply to jobs and receive booking requests in the bookings page</p>
				</div>
				<div class="flex items-center justify-center">
					<!--
						Image component for svg here
						<Image src="*.svg" />
						* remove background color in div as visual placeholder
					-->
				</div>
				<div>
					<div class="mt-96">
						<ButtonSecondary text="Go to Explore" />
					</div>
					<p class="mt-8 font-thin text-white text-center"><span class="text-green-200 underline">Learn more about being a Nanny</span></p>
				</div>
			</div>
		</main>
	</div>
</template>
<script setup>
import TopNavigation from '../../../../../components/navigation/TopNavigation.vue'
import ButtonOutlineLight from '../../../../../components/buttons/ButtonOutlineLight.vue'
import ButtonSecondary from '../../../../../components/buttons/ButtonSecondary.vue'
</script>

<template>
	<div class="w-full h-full bg-blue-500">
		<TopNavigation routerLinkPath="/dashboard" :hideHeader="true" :hideIcon="true" />
		<main>
			<div class="h-screen flex flex-col mx-4">
				<div class="mt-16 mx-9">
					<h2 class="mb-6 text-5xl font-medium text-green-500 text-center">Ready to start your Nanny journey?</h2>
					<p class="font-thin text-white text-center">Let's get you setup!</p>
				</div>
				<div class="flex items-center justify-center">
					<!--
						Image component for svg here
						<Image src="*.svg" />
						* remove background colour in div as visual placeholder
					-->
				</div>
				<div>
					<div class="mt-24">
						<ButtonOutlineLight text="Not now, I'm exploring" />
					</div>
					<div class="mt-2">
						<ButtonSecondary text="Get Started" />
					</div>
					<p class="mt-8 font-thin text-white text-center"><span class="text-green-200 underline">Learn more about being a Nanny</span></p>
				</div>
			</div>
		</main>
	</div>
</template>
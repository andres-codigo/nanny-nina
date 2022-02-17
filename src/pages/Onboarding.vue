<script setup>
import OnboardingOne from '../assets/svg/onboarding/onboarding-1.vue'
import Close from '../assets/svg/other/close.vue'
</script>

<template>
	<header>
		<div class="h-16 pt-4 pr-2 bg-green-100">
			<router-link to="/" class="float-right"><Close /></router-link>
		</div>
	</header>
	<main>
		<!-- Temporary DOM as need to discuss carousel -->
		<div class="flex flex-col justify-center bg-green-100">
			<div class="h-screen">
				<div class="mx-6 mb-16">
					<OnboardingOne />
				</div>

				<div class="grid grid-cols-2 mx-6 mt-6">
					<a href="#" class="w-full inline-flex justify-center py-2 rounded-full shadow-sm bg-green-200 text-sm font-medium text-black uppercase">quick &amp; easy</a>
				</div>

				<div class="mx-6 mt-6">
					<h1 class="text-4xl mb-4">Find your prefect nanny that cares</h1>
					<p class="font-light">Whether it's an one time booking or fixed or regular booking, explore and choose your preferred sitter</p>
				</div>

				<div class="flex items-center justify-center space-x-4 mt-10 mb-20">
					<div class="w-3 h-3 bg-black rounded-full"></div>
					<div class="w-3 h-3 bg-white rounded-full"></div>
					<div class="w-3 h-3 bg-white rounded-full"></div>
					<div class="w-3 h-3 bg-white rounded-full"></div>
				</div>

				<div class="mx-8 mt-8">
					<button type="submit" class="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-lg font-medium text-white bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Next</button>
				</div>
			</div>
		</div>
	</main>
</template>
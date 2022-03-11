<script setup>
import ButtonSecondary from '../../../../components/buttons/ButtonSecondary.vue'
import ButtonOutlineLight from '../../../../components/buttons/ButtonOutlineLight.vue'
</script>

<template>
	<div class="h-full bg-indigo-600">
		<main>
			<div class="h-screen flex flex-col items-center justify-center mx-4">
				<form class="mt-32 mb-40" action="#" method="POST">
					<h2 class="mx-5 text-center text-2xl font-normal text-emerald-300">Safe &amp; Affordable childcare for every family</h2>
					<div class="mt-24">
						<ButtonSecondary text="Login" />
					</div>
					<div class="mt-2">
						<ButtonOutlineLight text="Sign Up" />
					</div>
				</form>
				<p class="pb-12 mx-4 font-thin text-xs text-white text-center">We encourage everyone on our platform to visit our <span class="text-emerald-200 underline">Trust & Safety</span> and <span class="text-emerald-200 underline">Privacy Policy</span> to learn more about our commitment to keeping you safe</p>
			</div>
		</main>
	</div>
</template>
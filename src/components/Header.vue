<script setup>
import HeaderLogo from './HeaderLogo.vue'
</script>

<template>
	<header>
		<nav class="mx-auto pr-4">
			<div class="flex items-center justify-between">
				<HeaderLogo />
				<div class="text-sm pt-8">
					<router-link
						to="/onboarding"
						class="font-normal text-indigo-600 hover:text-indigo-500"
					>Onboarding</router-link>
				</div>
			</div>
		</nav>
	</header>
</template>
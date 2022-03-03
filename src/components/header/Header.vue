<script setup>
import HeaderLogo from '../header/HeaderLogo.vue'
</script>

<template>
	<header>
		<nav class="mx-auto pr-4">
			<div class="flex items-center justify-between">
				<HeaderLogo />
				<div class="text-sm pt-8">
					<router-link to="/home" class="float-right"><XIcon class="w-8 h-8" aria-hidden="true" /></router-link>
				</div>
			</div>
		</nav>
	</header>
</template>

<script>
import { XIcon } from '@heroicons/vue/solid'

export default {
	components: {
		XIcon
	},
}
</script>
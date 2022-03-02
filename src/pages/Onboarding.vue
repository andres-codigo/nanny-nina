<script setup>
import Carousel from '../components/carousel/Carousel.vue'
</script>

<template>
	<div class="bg-indigo-200 w-screen h-screen">
		<header>
			<div class="h-16 pt-4 px-4">
				<router-link to="/home" class="float-right"><XIcon class="w-8 h-8" aria-hidden="true" /></router-link>
			</div>
		</header>
		<main>
			<Carousel />
		</main>
	</div>
</template>

<script>
import { XIcon } from '@heroicons/vue/solid'

export default {
  components: {
	XIcon
  },
}
</script>
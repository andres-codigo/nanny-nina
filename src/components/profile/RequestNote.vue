<template>
	<div class="flex flex-col mt-7">
		<h5 class="text-header-five font-bold antialiased">Request Note</h5>
		<p class="my-7">We need your help! We are a Dutch family with two fun kids (girl 3 and boy 2). They love to play outside, bake (and eat!) cookies and cake, chill & relax, make loud music, eat ice-cream, be creative – and have their friends over to play. We do need you to have a drivers license and feel...</p>
		<div class="flex">
			<div class="flex-none"><a href="#" target="_self" class="font-semibold text-blue-500 anchor-with-underline">View full note</a></div>
			<div class="inline-flex items-center justify-center pl-1"><ChevronRightIcon class="w-5 h-5 text-blue-500" /></div>
		</div>
	</div>
</template>

<script>
import { ChevronRightIcon } from '@heroicons/vue/solid'

export default {
	components: {
		ChevronRightIcon
	}
}
</script>
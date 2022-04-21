<template>
	<a href="#" class="flex flex-row border-t py-6 border-gray-50">
		<div class="inline-flex grow">
			<div class="flex flex-col">
				<h5 class="text-header-five font-semibold antialiased">Request Note</h5>
				<p class="mt-7">We need your help! We are a Dutch family with two fun kids (girl 3 and boy 2). They love to play outside, bake (and eat!) cookies and cake, chill & relax, make loud music, eat ice-cream, be creative – and have their friends over to play. We do need you to have a drivers license and feel</p>
			</div>
		</div>
		<div class="flex w-8 justify-end items-center">
			<ChevronRightIcon class="w-8 h-8 text-purple-900" aria-hidden="true" />
		</div>
	</a>
</template>

<script>
import { ChevronRightIcon } from '@heroicons/vue/solid'

export default {
	components: {
		ChevronRightIcon
	}
}
</script>
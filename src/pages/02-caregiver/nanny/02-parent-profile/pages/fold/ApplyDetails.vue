<template>
	<div class="flex mt-6">
		<div class="basis-1/2">
			<div class="grid grid-rows-2">
				<div class="text-xl"><span class="text-2xl font-bold">&euro;13-15</span>/hr</div>
				<div class="text-xl font-bold">2km away</div>
			</div>
		</div>
		<div class="basis-1/2 items-center justify-center">
			<PrimaryButton text="Apply" />
		</div>
		<slot name="trailingIcon"></slot>
	</div>

	<div class="flex flex-col mt-14">
		<h5 class="text-header-five font-bold">Request Note</h5>
		<p class="my-7">We need your help! We are a Dutch family with two fun kids (girl 3 and boy 2). They love to play outside, bake (and eat!) cookies and cake, chill & relax, make loud music, eat ice-cream, be creative – and have their friends over to play. We do need you to have a drivers license and feel...</p>
		<div class="flex">
			<div class="flex-none"><a href="#" class="font-semibold text-purple-500 anchor-with-underline">View full note</a></div>
			<div class="inline-flex items-center justify-center pl-1"><ChevronRightIcon class="w-5 h-5 text-purple-500" /></div>
		</div>
	</div>
</template>

<script>
import PrimaryButton from '../../../../../../components/buttons/ButtonPrimary.vue'

import { ChevronRightIcon } from '@heroicons/vue/solid'

export default {
	components: {
		PrimaryButton,
		ChevronRightIcon
	}
}
</script>
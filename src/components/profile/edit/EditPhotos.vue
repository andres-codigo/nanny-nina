<template>
	<a href="#" class="flex flex-row border-t py-6 border-gray-50">
		<div class="flex flex-col overflow-x-scroll pb-10 no-scrollbar">
			<h5 class="text-header-five font-semibold antialiased mb-7">{{ title }}</h5>
			<div class="flex flex-nowrap">
				<Photo imageUrl="https://images.unsplash.com/photo-1614113072653-5b6f26e1bbc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=192&h=208" />
				<Photo imageUrl="https://images.unsplash.com/photo-1605286236134-5724adb234b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=192&h=208" />
				<Photo imageUrl="https://images.unsplash.com/photo-1484820540004-14229fe36ca4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=192&h=208" />
			</div>
		</div>
		<div class="flex w-8 justify-end items-center">
			<ChevronRightIcon class="w-8 h-8 text-purple-900" aria-hidden="true" />
		</div>
	</a>
</template>

<script>
import Photo from '../_photos/Photo.vue'

import { ChevronRightIcon } from '@heroicons/vue/solid'

export default {
	components: {
		Photo,
		ChevronRightIcon
	},
	props: {
		classes: String,
		title: {
			type: String,
			default: 'Photos'
		}
	}
}
</script>
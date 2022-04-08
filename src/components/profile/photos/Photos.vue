<template>

	<div :class="classes" class="flex flex-col">
		<div class="flex" v-if="showToggleButton">
			<div class="basis-1/2">
				<h5 class="text-header-five font-bold antialiased mb-7">{{ title }}</h5>
			</div>
			<div class="basis-1/2 inline-flex justify-end">
				<ToggleButtonTextLeft backgroundColor="bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" translateXPosition="translate-x-0" text="Hide" />
			</div>
		</div>

		<h5 class="text-header-five font-bold antialiased mb-7" v-else>{{ title }}</h5>

		<div class="flex overflow-x-scroll pb-10 no-scrollbar">
			<div class="flex flex-nowrap">
				<Photo imageUrl="https://images.unsplash.com/photo-1614113072653-5b6f26e1bbc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=192&h=208" />
				<Photo imageUrl="https://images.unsplash.com/photo-1605286236134-5724adb234b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=192&h=208" />
				<Photo imageUrl="https://images.unsplash.com/photo-1484820540004-14229fe36ca4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=192&h=208" />
			</div>
		</div>
	</div>
</template>

<script>
import ToggleButtonTextLeft from '../../form/ToggleButtonTextLeft.vue'
import Photo from './Photo.vue'

export default {
	components: {
		ToggleButtonTextLeft,
		Photo
	},
	props: {
		classes: String,
		title: {
			type: String,
			default: 'Photos'
		},
		showToggleButton: {
			type: Boolean,
			default: false
		}
	}
}
</script>
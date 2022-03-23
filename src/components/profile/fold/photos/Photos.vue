<template>
	<div class="flex flex-col mt-14">
		<h5 class="text-header-five font-bold mb-7">Photos</h5>
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
import Photo from './Photo.vue'

export default {
	components: {
		Photo
	}
}
</script>
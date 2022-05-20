<template>
	<div :class="class" class="relative justify-center">
		<slot name="heart"></slot>
		<div class="w-full h-[240px] overflow-hidden ">
			<img src="https://images.unsplash.com/photo-1543721482-bc95ff1f1dea">
		</div>
		<!-- <div class="flex justify-center">
			<div class="inline-flex absolute bottom-[0.5rem] rounded-3xl justify-center bg-green-500 space-x-3 py-2 px-3">
				<NavigationDot dotWidthAndHeight="h-2 w-2" backgroundColor="bg-purple-500 ring-4 ring-lilac-300" />
				<NavigationDot dotWidthAndHeight="h-2 w-2" backgroundColor="bg-purple-100" backgroundColorHover="hover:bg-purple-500 hover:ring-8 hover:ring-lilac-300" />
				<NavigationDot dotWidthAndHeight="h-2 w-2" backgroundColor="bg-purple-100" backgroundColorHover="hover:bg-purple-500 hover:ring-8 hover:ring-lilac-300" />
				<NavigationDot dotWidthAndHeight="h-2 w-2" backgroundColor="bg-purple-100" backgroundColorHover="hover:bg-purple-500 hover:ring-8 hover:ring-lilac-300" />
			</div>
		</div> -->
		<div class="inline-flex text-sm absolute bottom-[0.5rem] right-4 rounded-3xl justify-center bg-purple-900 text-white w-14">1/8</div>
	</div>
</template>

<script>
import NavigationDot from './NavigationDot.vue'

export default {
	components: {
		NavigationDot
	},
	props: {
		class: String
	}
}
</script>
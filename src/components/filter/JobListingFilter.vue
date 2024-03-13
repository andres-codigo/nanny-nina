<template>
	<div class="flex border-b border-b-1">
		<div class="inline-flex justify-center items-center mx-4">
			<ImageComponent
				src="./assets/svg/filter/filter.svg"
				class="w-4 h-4"
			/>
		</div>
		<div
			class="inline-flex grow overflow-x-scroll py-4 no-scrollbar items-center"
		>
			<slot name="filter-one"></slot>
			<slot name="filter-two"></slot>
			<slot name="filter-three"></slot>
			<slot name="filter-four"></slot>
			<slot name="filter-five"></slot>
			<slot name="filter-six"></slot>
		</div>
	</div>
</template>

<script>
import ImageComponent from '../dom-elements/ImageComponent.vue'

export default {
	components: {
		ImageComponent,
	},
}
</script>

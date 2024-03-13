<template>
	<div
		class="flex flex-row w-full absolute bg-lilac-100 border border-gray-500 rounded-20px hover:rounded-20px px-4 z-10"
	>
		<div class="basis-11/12">
			<div class="flex items-center py-6">
				<div class="basis-11/12">
					<p class="text-purple-900">{{ date }}</p>
				</div>
				<div class="basis-1/12 pr-4">
					<p class="text-purple-900 float-right">&euro;{{ price }}</p>
				</div>
			</div>
		</div>
		<div class="basis-1/12 inline-flex items-center">
			<div class="w-full pr-4">
				<ImageComponent src="./assets/svg/other/chevron-up-gray.svg" />
			</div>
		</div>
	</div>
</template>

<script>
import ImageComponent from '../dom-elements/ImageComponent.vue'

export default {
	components: {
		ImageComponent,
	},
	props: {
		isHost: {
			type: Boolean,
			default: true,
		},
		img: {
			type: String,
			default: './assets/svg/other/chevron-down-gray.svg',
		},
		date: {
			type: String,
			default: 'Thur, 1st December, 2021',
		},
		price: {
			type: String,
			default: '100',
		},
	},
}
</script>

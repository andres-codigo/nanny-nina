<template>
	<div
		class="flex flex-row mb-2 border border-gray-100 rounded-20px hover:rounded-20px hover:shadow-lg hover:shadow-gray-50 px-4"
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
			<div class="w-full pr-4"><ImageComponent :src="img" /></div>
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
			default: 'Wed, 31st November, 2021',
		},
		price: {
			type: String,
			default: '85',
		},
	},
}
</script>

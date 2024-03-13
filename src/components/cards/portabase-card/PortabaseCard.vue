<template>
	<div
		:class="[
			'flex flex-col relative h-48 py-8 rounded-20px',
			backgroundColor,
		]"
	>
		<div class="inline-flex w-full ml-4">
			<h2
				:class="[
					'inline-flex text-header-two font-bold antialiased',
					textColorHeader,
				]"
			>
				{{ header }} <ImageComponent :src="src" alt="" />
			</h2>
		</div>

		<div class="inline-flex w-full justify-center absolute bottom-[1.6rem]">
			<slot name="link"></slot>
		</div>
	</div>
</template>

<script>
import ImageComponent from '../../dom-elements/ImageComponent.vue'

export default {
	components: {
		ImageComponent,
	},
	props: {
		backgroundColor: {
			type: String,
			default: '',
		},
		textColorHeader: {
			type: String,
			default: 'text-purple-900',
		},
		header: {
			type: String,
			default: '',
		},
		src: {
			type: String,
			default: './assets/svg/cards/arrow-right-up.svg',
		},
	},
}
</script>

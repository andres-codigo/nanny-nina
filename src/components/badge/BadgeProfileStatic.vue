<template>
	<div>
		<span class="image">
			<slot name="image"><Img :src="defaultImage" /></slot>
		</span>
		<span class="block text-center select-none text-sm font-light">
			<slot name="title">{{ title }}</slot>
		</span>
	</div>
</template>

<script>
import Img from '../dom-elements/Img.vue'

export default {
	components: {
		Img
	},
	props: {
		title: {
			type: String,
			default: 'Friendly'
		},
		defaultImage: {
			type: String,
			default: './assets/svg/badges/playful.svg'
		}
	}
}
</script>

<style scoped>
.image {
	@apply w-icon-host-personality-badge h-icon-host-personality-badge inline-flex cursor-pointer mt-5 mb-3;
}
</style>
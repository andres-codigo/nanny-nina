<template>
	<div>
		<span class="inline-flex px-2 items-center h-profile-badge mt-5 mb-3"><Img :src="svg" /></span>
		<span class="block text-sm text-center font-light">{{ title }}</span>
	</div>
</template>

<script>
import Img from '../dom-elements/Img.vue'

export default {
	components: {
		Img
	},
	props: {
		svg: {
			type: String,
			default: './assets/svg/badges/friendly.svg'
		},
		title: {
			type: String,
			default: 'Friendly'
		}
	}
}
</script>
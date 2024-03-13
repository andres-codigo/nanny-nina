<template>
	<div
		:class="badgeClass"
		class="float-right h-9 inline-flex rounded-3xl items-center justify-center py-2 px-3"
	>
		<ImageComponent :src="badgeSvg" class="w-5 h-5" alt="" />
		<span class="text-sm font-semibold px-1">{{ badgeText }}</span>
	</div>
</template>

<script>
import ImageComponent from '../dom-elements/ImageComponent.vue'

export default {
	components: {
		ImageComponent,
	},
	props: {
		badgeClass: {
			type: String,
			default: 'bg-purple-500 text-white',
		},
		badgeSvg: {
			type: String,
			default: './assets/svg/badges/hourglass.svg',
		},
		badgeText: {
			type: String,
			default: '+2 days',
		},
	},
}
</script>

<template>
	<div>
		<div :class="[showBadgesEarned ? 'image-with-badges-earned' : 'image']">
			<slot name="image"><ImageComponent :src="defaultImage" /></slot>
		</div>
		<div v-if="showTopBadge" class="block relative z-10">
			<span
				class="inline-flex justify-center rounded-3xl absolute left-[22px] bottom-2 text-white text-xs bg-purple-500 w-11 px-2 py-0.5"
				>Top</span
			>
		</div>
		<span class="block text-center select-none font-light">
			<span class="inline-block">
				<span class="block text-sm">{{ title }}</span>
				<span
					v-if="showBadgesEarned"
					class="block text-left text-gray-500 text-xs"
					>{{ badgesEarned }}</span
				>
			</span>
		</span>
	</div>
</template>

<script>
import ImageComponent from '../dom-elements/ImageComponent.vue'

export default {
	components: {
		ImageComponent,
	},
	props: {
		title: {
			type: String,
			default: 'Friendly',
		},
		badgesEarned: {
			type: String,
			default: '1/10',
		},
		showBadgesEarned: {
			type: Boolean,
			default: false,
		},
		defaultImage: {
			type: String,
			default: './assets/svg/badges/playful.svg',
		},
		showTopBadge: {
			type: Boolean,
			default: false,
		},
	},
}
</script>

<style scoped>
.image {
	@apply w-icon-personality-badge h-icon-personality-badge inline-flex mt-5 mb-3;
}
.image-with-badges-earned {
	@apply w-icon-personality-badge h-icon-personality-badge inline-flex;
}
</style>

<template>
	<div class="flex-none">
		<span class="image"></span>
		<span :class="['block text-center select-none', isTipPage ? 'font-bold' : 'text-sm font-light']">
			<slot name="title">Friendly</slot>
		</span>
	</div>
</template>

<script>
export default {
	data() {
		return {
			defaultBackgroundImage: 'url(' + this.defaultImage + ')',
			hoverBackgroundImage: 'url(' + this.hoverImage + ')',
			activeFocusBackgroundImage: 'url(' + this.activeFocusImage + ')',
		}
	},
	props: {
		title: {
			type: String,
			default: 'Friendly'
		},
		defaultImage: {
			type: String,
			default: './assets/svg/badges/playful.svg'
		},
		hoverImage: {
			type: String,
			default: './assets/svg/badges/playful-hover.svg'
		},
		activeFocusImage: {
			type: String,
			default: './assets/svg/badges/playful-active-focus.svg'
		},
		isTipPage: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style scoped>
.image {
	@apply w-icon-review-tip h-icon-review-tip inline-flex cursor-pointer mt-5 mb-3;
	background-image: v-bind(defaultBackgroundImage);
	@apply bg-no-repeat bg-center;
}
.image:hover {
	background-image: v-bind(hoverBackgroundImage);
	@apply bg-no-repeat bg-center;
}
.image:active, .image:focus {
	background-image: v-bind(activeFocusBackgroundImage);
	@apply bg-no-repeat bg-center;
}

</style>
<template>
	<div>
		<span class="svgImage"></span>
		<span class="block text-sm text-center font-light select-none">{{ title }}</span>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: 'Friendly'
		}
	}
}
</script>
<!--
Gents, I've updated this from being prop based to style scoped based as it
looks like each badge has a hover/active/focus state svg, one example of all
state across repeat svg's should hopefully be helpful you guys
-->
<style scoped>
.svgImage {
	@apply inline-flex px-2 w-profile-badge h-profile-badge cursor-pointer mt-5 mb-3;
	@apply bg-[url('./assets/svg/badges/playful.svg')] bg-no-repeat;
}
.svgImage:hover {
	@apply bg-[url('./assets/svg/badges/playful-hover.svg')] bg-no-repeat;
}
.svgImage:active, .svgImage:focus {
	@apply bg-[url('./assets/svg/badges/playful-active-focus.svg')] bg-no-repeat;
}

</style>
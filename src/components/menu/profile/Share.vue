<template>
	<div class="rounded-md bg-purple-500 p-4">
		<div class="flex">
			<div class="inline-flex items-center">
				<Img src="./assets/svg/other/share.svg" />
			</div>
			<!--
				Unsure if you intend to use the Web Share API so leaving this a static HTML
			-->
			<div class="ml-3 flex-1">
				<h6 class="text-header-six text-white">Share your link</h6>
				<p class="text-sm text-white">nannynina/@pleunstorme</p>
			</div>
		</div>
	</div>
</template>

<script>
import Img from '../../dom-elements/Img.vue'

export default {
	components: {
		Img
	}
}
</script>

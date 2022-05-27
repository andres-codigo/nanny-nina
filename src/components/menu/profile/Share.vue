<template>
	<div class="rounded-md bg-purple-500 w-6/8  px-2 py-4 mr-4">
		<div class="flex flex-row items-center">
			<div class="basis-1/6"><Img src="./assets/svg/other/share.svg" class="w-8 h-8" /></div>
			<div class="basis-5/6 ml-2">
				<h6 class="text-header-six text-white">Share your link</h6>
				<p class="text-xs text-white">{{ isHostMenu ? 'nannynina/@jannestindl' : 'nannynina/@pleunstorme' }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import Img from '../../dom-elements/Img.vue'

export default {
	components: {
		Img
	},
	props: {
		isHostMenu: Boolean
	}
}
</script>

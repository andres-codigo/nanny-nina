<template>
	<div class="flex w-full my-6 mx-4">
		<div class="basis-1/2">
			<div class="grid grid-rows-2">
				<div class="text-xl">
					<slot name="topText"></slot>
				</div>
				<div class="text-xl font-bold">
					<slot name="bottomText"></slot>
				</div>
			</div>
		</div>
		<div class="basis-1/2 items-center">
			<AnchorPrimary :text="anchorText" class="w-button-sm float-right py-4" />
		</div>
	</div>
</template>

<script>
import AnchorPrimary from '../dom-elements/AnchorPrimary.vue'

export default {
	components: {
		AnchorPrimary
	},
	props: {
		anchorText: String
	}
}
</script>
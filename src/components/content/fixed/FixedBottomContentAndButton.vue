<template>
	<div class="flex my-6 mx-4">
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
			<AnchorPrimary :text="anchorText" class="w-button-sm float-right py-4" v-if="!isButton" />
			<ButtonPrimary :text="anchorText" class="w-button-sm float-right py-4" v-else-if="isButton && !isButtonDisabled" />
			<ButtonDisabled :text="anchorText" class="w-button-sm float-right py-4" v-else-if="isButton && isButtonDisabled" />
		</div>
	</div>
</template>

<script>
import AnchorPrimary from '../../dom-elements/AnchorPrimary.vue'
import ButtonPrimary from '../../buttons/ButtonPrimary.vue'
import ButtonDisabled from '../../buttons/ButtonDisabled.vue'

export default {
	components: {
		AnchorPrimary,
		ButtonPrimary,
		ButtonDisabled
	},
	props: {
		anchorText: String,
		isButton: {
			type: Boolean,
			default: false
		},
		isButtonDisabled: {
			type: Boolean,
			default: false
		}
	}
}
</script>
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
			<AnchorPrimary
				v-if="!isButton"
				:text="anchorText"
				classes="w-button-sm float-right py-4"
			/>
			<ButtonPrimary
				v-else-if="isButton && !isButtonDisabled"
				:text="anchorText"
				classes="w-button-sm float-right py-4"
			/>
			<ButtonDisabled
				v-else-if="isButton && isButtonDisabled"
				:text="anchorText"
				classes="w-button-sm float-right py-4"
			/>
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
		ButtonDisabled,
	},
	props: {
		anchorText: {
			type: String,
			default: '',
		},
		isButton: {
			type: Boolean,
			default: false,
		},
		isButtonDisabled: {
			type: Boolean,
			default: false,
		},
	},
}
</script>

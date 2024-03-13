<template>
	<div class="flex flex-col items-center py-6">
		<AnchorPrimary
			v-if="!isDisabled"
			:text="buttonText"
			classes="w-button-sm py-4"
		/>
		<AnchorPrimaryDisabled
			v-else
			:text="buttonText"
			classes="w-button-sm py-4"
		/>
	</div>
</template>

<script>
import AnchorPrimary from '../../dom-elements/AnchorPrimary.vue'
import AnchorPrimaryDisabled from '../../dom-elements/AnchorPrimaryDisabled.vue'

export default {
	components: {
		AnchorPrimary,
		AnchorPrimaryDisabled,
	},
	props: {
		buttonText: {
			type: String,
			default: 'New Invites (2)',
		},
		isDisabled: {
			type: Boolean,
			default: false,
		},
	},
}
</script>

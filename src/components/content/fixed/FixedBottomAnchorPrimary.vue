<template>
	<div class="flex flex-col items-center py-6">
		<AnchorPrimary :text="buttonText" class="w-button-sm py-4" v-if="!isDisabled" />
		<AnchorPrimaryDisabled :text="buttonText" class="w-button-sm py-4" v-else />
	</div>
</template>

<script>
import AnchorPrimary from '../../dom-elements/AnchorPrimary.vue'
import AnchorPrimaryDisabled from '../../dom-elements/AnchorPrimaryDisabled.vue'

export default {
	components: {
		AnchorPrimary,
		AnchorPrimaryDisabled
	},
	props: {
		buttonText: {
			type: String,
			default: 'New Invites (2)'
		},
		isDisabled: {
			type: Boolean,
			default: false
		}
	}
}
</script>
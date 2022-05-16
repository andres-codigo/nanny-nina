<template>
	<div class="flex flex-col items-center py-6">
		<AnchorPrimary :text="buttonText" class="w-button-sm py-4" />
	</div>
</template>

<script>
import AnchorPrimary from '../../buttons/ButtonPrimary.vue'

export default {
	components: {
		AnchorPrimary
	},
	props: {
		buttonText: {
			type: String,
			default: 'New Invites (2)'
		},
	}
}
</script>
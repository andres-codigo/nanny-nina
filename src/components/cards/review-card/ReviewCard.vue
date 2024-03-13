<template>
	<div class="px-3 py-4 w-64 h-48 overflow-hidden rounded-lg border">
		<ReviewCardDetails :user="user" :date="date" />
	</div>
</template>

<script>
import ReviewCardDetails from '../review-card/ReviewCardDetails.vue'

export default {
	components: {
		ReviewCardDetails,
	},
	props: {
		user: {
			type: String,
			default: '',
		},
		date: {
			type: String,
			default: '',
		},
	},
}
</script>

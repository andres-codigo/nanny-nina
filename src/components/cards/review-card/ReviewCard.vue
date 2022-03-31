<template>
	<div class="px-3 py-4 w-64 h-48 overflow-hidden rounded-lg border">
		<ReviewCardDetails :user="user" :date="date" />
	</div>
</template>

<script>
import ReviewCardDetails from '../review-card/ReviewCardDetails.vue'

import { StarIcon } from '@heroicons/vue/solid'

export default {
	components: {
		ReviewCardDetails,
		StarIcon
	},
	props: {
		user: String,
		date: String
	}
}
</script>
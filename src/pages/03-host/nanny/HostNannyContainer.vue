<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<Location title="What’s your address?" class="max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import Location from '../../00-duplicate-pages/Location.vue' /* Template */

export default {
	components: {
		Location
	}
}
</script>
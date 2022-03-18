<template>
	<div class="flex flex-wrap grow gap-y-6 sm:gap-x-4 w-full h-full bg-gray-200">
		<Home01 class="min-w-360-for-dev-not-prod" />
	</div>
</template>

<script>
import Home01 from './pages/Home01.vue'

export default {
	components: {
		Home01
	}
}
</script>

<template>
	<div class="flex flex-wrap grow gap-y-6 sm:gap-x-4 w-full h-full">
		<HomeWithMenu class="min-w-360-for-dev-not-prod" />
	</div>
</template>

<script>
import HomeWithMenu from './pages/HomeWithMenu.vue'

export default {
	components: {
		HomeWithMenu
	}
}
</script>

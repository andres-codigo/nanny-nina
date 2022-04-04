<template>
	<div class="flex flex-wrap grow gap-y-6 sm:gap-x-4 w-full h-full">
		<HomeWithMenuTemplate class="min-w-360-for-dev-not-prod" />
	</div>
</template>

<script>
import HomeWithMenuTemplate from '../../00-duplicate-pages/home/HomeWithMenuTemplate.vue'

export default {
	components: {
		HomeWithMenuTemplate
	}
}
</script>

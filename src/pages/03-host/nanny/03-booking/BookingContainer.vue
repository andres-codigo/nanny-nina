<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<ResponsesWithContent class="max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import ResponsesWithContent from './pages/ResponsesWithContent.vue'

export default {
	components: {
		ResponsesWithContent
	}
}
</script>
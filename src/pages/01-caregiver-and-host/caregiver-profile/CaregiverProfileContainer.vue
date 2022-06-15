<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<Profile class="max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import Profile from './pages/Profile.vue'

export default {
	components: {
		Profile,
	}
}
</script>
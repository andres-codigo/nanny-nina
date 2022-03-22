<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<Profile01 class="max-w-450-for-dev-not-prod" />
		<Profile02 class="max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import Profile01 from './pages/Profile01.vue'
import Profile02 from './pages/Profile02.vue'

export default {
	components: {
		Profile01,
		Profile02
	}
}
</script>
<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<Profile01 class="max-w-450-for-dev-not-prod" />
		<Profile01b class="max-w-450-for-dev-not-prod" />
		<Profile02 class="max-w-450-for-dev-not-prod" />
		<ApplyAboutWorker03 class="max-w-450-for-dev-not-prod" />
		<ApplyMotivation04 class="max-w-450-for-dev-not-prod" />
		<ApplySuccess05 class="max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import Profile01 from './pages/Profile01.vue'
import Profile01b from './pages/Profile01b.vue'
import Profile02 from './pages/Profile02.vue'
import ApplyAboutWorker03 from './pages/ApplyAboutWorker03.vue'
import ApplyMotivation04 from './pages/ApplyMotivation04.vue'
import ApplySuccess05 from './pages/ApplySuccess05.vue'

export default {
	components: {
		Profile01,
		Profile01b,
		Profile02,
		ApplyAboutWorker03,
		ApplyMotivation04,
		ApplySuccess05
	}
}
</script>
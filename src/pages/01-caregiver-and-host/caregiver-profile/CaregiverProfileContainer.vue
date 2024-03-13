<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<Profile class="max-w-450-for-dev-not-prod" />
		<Personal class="max-w-450-for-dev-not-prod" />
		<Preferences classes="max-w-450-for-dev-not-prod" />
		<PerformanceBadges class="max-w-450-for-dev-not-prod" />
		<Services class="max-w-450-for-dev-not-prod" />
		<BlockedUsers class="max-w-450-for-dev-not-prod" />
		<Notifications class="max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import Profile from './pages/Profile.vue'
import Personal from './pages/Personal.vue'
import Preferences from './pages/Preferences.vue'
import PerformanceBadges from './pages/PerformanceBadges.vue'
import Services from './pages/Services.vue'
import BlockedUsers from './pages/BlockedUsers.vue'
import Notifications from './pages/Notifications.vue'

export default {
	components: {
		Profile,
		Personal,
		Preferences,
		PerformanceBadges,
		Services,
		BlockedUsers,
		Notifications,
	},
}
</script>

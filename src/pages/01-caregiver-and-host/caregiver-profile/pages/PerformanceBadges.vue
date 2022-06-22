<template>
	<div class="w-full h-full">
		<TopNavigation text="Badges">
			<template #iconLeft><router-link to="'/dashboard?tab=1"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
			<template #iconRight><QuestionMarkCircleIcon class="w-6 h-6 text-green-500" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col pt-12 mx-4">
				<div class="flex flex-col mb-10">
					<h5 class="text-header-five font-semibold antialiased mb-2">Personality Badges</h5>
					<p class="font-thin mb-4">Earn badges as you complete more bookings, Badges increase your chances of getting even more matches</p>

					<div class="flex flex-wrap gap-x-10 gap-y-6 mt-4">
						<BadgeProfileStatic :showBadgesEarned="true" />
						<BadgeProfileStatic title="Calm/Zen" :showBadgesEarned="true" badgesEarned="0/10" />
						<BadgeProfileStatic title="Playful" :showTopBadge="true" :showBadgesEarned="true" badgesEarned="3/10" />
						<BadgeProfileStatic title="Multitasking" :showBadgesEarned="true" />
						<BadgeProfileStatic title="Family person" :showBadgesEarned="true" badgesEarned="0/10" />
						<BadgeProfileStatic title="Independent" :showBadgesEarned="true" />
						<BadgeProfileStatic title="Proactive" :showBadgesEarned="true" />
						<BadgeProfileStatic title="Creative" :showBadgesEarned="true" badgesEarned="0/10" />
						<BadgeProfileStatic title="Extrovert" :showBadgesEarned="true" badgesEarned="3/10" />
						<BadgeProfileStatic title="Multitasking" :showBadgesEarned="true" />
						<BadgeProfileStatic title="Tidy" :showBadgesEarned="true" badgesEarned="0/10" />
						<BadgeProfileStatic title="Introvert" :showBadgesEarned="true" />
					</div>
				</div>

				<div class="flex flex-col mb-10">
					<h5 class="text-header-five font-semibold antialiased mb-2">Super powers</h5>
					<p class="font-thin mb-4">Unlock superpowers to get even more matches. We certify your account and invite you to more jobs.</p>

					<div class="flex flex-wrap gap-x-10 gap-y-6 mt-4">
						<BadgeProfileStatic title="Rising Star" :showBadgesEarned="true" badgesEarned="Completed" />
						<BadgeProfileStatic title="Supernanny" :showBadgesEarned="true" badgesEarned="16/100pts" />
						<BadgeProfileStatic title="Nanny Ninja" :showBadgesEarned="true" badgesEarned="16/200pts" />
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../components/navigation-and-tabs/TopNavigation.vue'
import BadgeProfileStatic from '../../../../components/badge/BadgeProfileStatic.vue'
import Img from '../../../../components/dom-elements/Img.vue'

import { ChevronLeftIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		BadgeProfileStatic,
		Img,
		ChevronLeftIcon,
		QuestionMarkCircleIcon
	}
}
</script>
<template>
	<div class="w-full h-full">
		<TopNavigation text="Badges">
			<template #iconLeft
				><router-link to="'/dashboard?tab=1"
					><ChevronLeftIcon
						class="w-8 h-8 text-white"
						aria-hidden="true" /></router-link
			></template>
			<template #iconRight
				><QuestionMarkCircleIcon
					class="w-6 h-6 text-green-500"
					aria-hidden="true"
			/></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col pt-12 mx-4">
				<h5 class="text-header-five font-semibold antialiased mb-2">
					Personality Badges
				</h5>
				<p class="font-thin mb-6">
					Earn badges as you complete more bookings, Badges increase
					your chances of getting even more matches
				</p>

				<div class="flex flex-col mb-10">
					<div class="flex flex-wrap gap-x-10 gap-y-6 mt-4">
						<BadgeProfileStatic :show-badges-earned="true" />
						<BadgeProfileStatic
							title="Calm/Zen"
							:show-badges-earned="true"
							badges-earned="0/10"
						/>
						<BadgeProfileStatic
							title="Playful"
							:show-top-badge="true"
							:show-badges-earned="true"
							badges-earned="3/10"
						/>
						<BadgeProfileStatic
							title="Multitasking"
							:show-badges-earned="true"
						/>
						<BadgeProfileStatic
							title="Family person"
							:show-badges-earned="true"
							badges-earned="0/10"
						/>
						<BadgeProfileStatic
							title="Independent"
							:show-badges-earned="true"
						/>
						<BadgeProfileStatic
							title="Proactive"
							:show-badges-earned="true"
						/>
						<BadgeProfileStatic
							title="Creative"
							:show-badges-earned="true"
							badges-earned="0/10"
						/>
						<BadgeProfileStatic
							title="Extrovert"
							:show-badges-earned="true"
							badges-earned="3/10"
						/>
						<BadgeProfileStatic
							title="Multitasking"
							:show-badges-earned="true"
						/>
						<BadgeProfileStatic
							title="Tidy"
							:show-badges-earned="true"
							badges-earned="0/10"
						/>
						<BadgeProfileStatic
							title="Introvert"
							:show-badges-earned="true"
						/>
					</div>
				</div>

				<div class="flex flex-col mb-10">
					<h5 class="text-header-five font-semibold antialiased mb-2">
						Super powers
					</h5>
					<p class="font-thin mb-4">
						Unlock superpowers to get even more matches. We certify
						your account and invite you to more jobs.
					</p>

					<div class="flex flex-wrap gap-x-10 gap-y-6 mt-4">
						<BadgeProfileStatic
							title="Rising Star"
							:show-badges-earned="true"
							badges-earned="Completed"
						/>
						<BadgeProfileStatic
							title="Supernanny"
							:show-badges-earned="true"
							badges-earned="16/100pts"
						/>
						<BadgeProfileStatic
							title="Nanny Ninja"
							:show-badges-earned="true"
							badges-earned="16/200pts"
						/>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../components/navigation-and-tabs/TopNavigation.vue'
import BadgeProfileStatic from '../../../../components/badge/BadgeProfileStatic.vue'

import { ChevronLeftIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		BadgeProfileStatic,
		ChevronLeftIcon,
		QuestionMarkCircleIcon,
	},
}
</script>

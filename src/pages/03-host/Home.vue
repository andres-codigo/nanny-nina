]
<template>
	<div class="min-w-360-for-dev-not-prod">
		<main>
			<div class="min-h-full flex flex-col mx-4 pb-28">
				<UserProgress
					:show-completion-percentage="false"
					welcome-message="Hello, Jane"
					instruction="Complete steps to begin"
				/>
				<div class="grid grid-rows-3 gap-4">
					<div>
						<HomeCard
							:show-completion-steps="false"
							temp-background-color="bg-pink-100"
							temp-focus-ring-color="focus:bg-pink-200"
							user="Nanny"
							content="Book a nanny for emergency, one-time or recurring schedule"
						/>
					</div>
					<div>
						<HomeCard
							:show-completion-steps="false"
							temp-background-color="bg-purple-100"
							temp-focus-ring-color="focus:bg-purple-200"
							user="Au Pair"
							content="Experience a new culture with a host family abroad as a caregiver"
						/>
					</div>
					<div>
						<HomeCard
							:show-completion-steps="false"
							temp-background-color="bg-green-100"
							temp-focus-ring-color="focus:bg-green-200"
							user="Childminder"
							content="Work as a pro-nanny"
						/>
					</div>
				</div>
			</div>
		</main>
		<footer>
			<BottomMenu />
		</footer>
	</div>
</template>

<script>
import UserProgress from '../../components/progress/UserProgress.vue'
import HomeCard from '../../components/cards/home-card/HomeCard.vue'
import BottomMenu from '../../components/menu/BottomMenu.vue'

export default {
	components: {
		UserProgress,
		HomeCard,
		BottomMenu,
	},
}
</script>

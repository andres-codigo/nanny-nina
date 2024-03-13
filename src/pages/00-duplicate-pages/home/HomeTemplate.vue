<template>
	<main>
		<div class="min-h-full flex flex-col mx-4 pb-28">
			<UserProgress
				welcome-message="Hello, Jane"
				instruction="Complete steps to begin"
			/>
			<div class="grid grid-rows-3 gap-4">
				<div>
					<HomeCard
						:show-completion-steps="false"
						temp-background-color="bg-pink-100"
						user="Nanny"
						content="Work on regular fixed schedule, returning days per week"
					/>
				</div>
				<div>
					<HomeCard
						:show-completion-steps="false"
						temp-background-color="bg-purple-100"
						user="Au Pair"
						content="Experience a new culture with a host family abroad as a caregiver"
					/>
				</div>
				<div>
					<HomeCard
						temp-background-color="bg-green-100"
						user="Childminder"
						content="Work as a pro-nanny"
					/>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import UserProgress from '../../../components/progress/UserProgress.vue'
import HomeCard from '../../../components/cards/home-card/HomeCard.vue'

export default {
	components: {
		UserProgress,
		HomeCard,
	},
}
</script>

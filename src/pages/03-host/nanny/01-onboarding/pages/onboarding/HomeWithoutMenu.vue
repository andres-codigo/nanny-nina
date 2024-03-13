<template>
	<div class="w-full h-full">
		<main>
			<div class="h-full flex flex-col mx-4">
				<UserProgress
					:show-completion-percentage="false"
					welcome-message="Welcome, Jane"
					instruction="Find care now"
				/>
				<div class="grid grid-rows-3 gap-4">
					<div>
						<HomeCard
							:show-completion-steps="false"
							temp-background-color="bg-pink-100"
							temp-focus-ring-color="focus:bg-pink-200"
							user="Nanny"
							content="Book a  last minute, one-time, recurring or event nanny"
						/>
					</div>
					<div>
						<HomeCard
							:show-completion-steps="false"
							temp-background-color="bg-purple-100"
							temp-focus-ring-color="focus:bg-purple-200"
							user="Au Pair"
							content="From €375 per month for 30 hours of work/ week"
						/>
					</div>
					<div>
						<HomeCard
							temp-background-color="bg-green-100"
							temp-focus-ring-color="focus:bg-green-200"
							user="Childminder"
							content="Find your certified nanny for full days of childcare to receive allowance"
						/>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import UserProgress from '../../../../../../components/progress/UserProgress.vue'
import HomeCard from '../../../../../../components/cards/home-card/HomeCard.vue'

export default {
	components: {
		UserProgress,
		HomeCard,
	},
}
</script>

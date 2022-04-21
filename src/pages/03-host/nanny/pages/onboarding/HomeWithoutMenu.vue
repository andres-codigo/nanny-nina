<template>
	<div class="w-full h-full">
		<main>
			<div class="h-full flex flex-col mx-4">
				<UserProgress :showCompletionPercentage="false"  welcomeMessage="Welcome, Jane" instruction="Find care now" />
				<div class="grid grid-rows-3 gap-4">
					<div><HomeCard tempBackgroundColor="bg-pink-100" tempFocusRingColor="focus:bg-pink-200" :showCompletionSteps="false" user="Nanny" content="Book a  last minute, one-time, recurring or event nanny" /></div>
					<div><HomeCard tempBackgroundColor="bg-purple-100" tempFocusRingColor="focus:bg-purple-200" :showCompletionSteps="false" user="Au Pair" content="From €375 per month for 30 hours of work/ week" /></div>
					<div><HomeCard tempBackgroundColor="bg-green-100" tempFocusRingColor="focus:bg-green-200" :showCompletionSteps="false" user="Childminder" content="Find your certified nanny for full days of childcare to receive allowance" /></div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import HomeTemplate from '../../../../00-duplicate-pages/home/HomeTemplate.vue'
import UserProgress from '../../../../../components/home/UserProgress.vue'
import HomeCard from '../../../../../components/cards/home-card/HomeCard.vue'

export default {
	components: {
		HomeTemplate,
		UserProgress,
		HomeCard
	}
}
</script>
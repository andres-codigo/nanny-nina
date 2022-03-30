]<template>
	<div class="min-w-360-for-dev-not-prod">
		<main>
			<div class="min-h-full flex flex-col mx-4 pb-20">
				<UserProgress :showCompletionPercentage="false" />
				<div class="grid grid-rows-3 gap-4">
					<div><HomeCard :showCompletionSteps="false" tempBackgroundColor="bg-pink-100" tempFocusRingColor="focus:bg-pink-200" user="Nanny" content="Book a nanny for emergency, one-time or recurring schedule" /></div>
					<div><HomeCard :showCompletionSteps="false" tempBackgroundColor="bg-purple-100" tempFocusRingColor="focus:bg-purple-200" user="Au Pair" content="Experience a new culture with a host family abroad as a caregiver" /></div>
					<div><HomeCard :showCompletionSteps="false" tempBackgroundColor="bg-green-100" tempFocusRingColor="focus:bg-green-200" user="Childminder" content="Work as a pro-nanny" /></div>
				</div>
			</div>
		</main>
		<footer>
			<BottomMenu />
		</footer>
	</div>
</template>

<script>
import UserProgress from '../../components/home/UserProgress.vue'
import HomeCard from '../../components/cards/HomeCard.vue'
import BottomMenu from '../../components/menu/BottomMenu.vue'

export default {
	components: {
		UserProgress,
		HomeCard,
		BottomMenu
	}
}
</script>
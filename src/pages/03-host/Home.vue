<script setup>
import UserProgress from '../../components/home/UserProgress.vue'
import HomeCard from '../../components/cards/HomeCard.vue'
import BottomMenu from '../../components/menu/BottomMenu.vue'
</script>

<template>
	<div class="min-w-360-for-dev-not-prod">
		<main>
			<div class="min-h-full flex flex-col mx-4 pb-20">
				<UserProgress :showCompletionPercentage="false" />
				<HomeCard :showCompletionSteps="false" tempBackgroundColour="bg-pink-100" tempFocusRingColour="focus:ring-pink-200" user="Nanny" content="Book a nanny for emergency, one-time or recurring schedule" />
				<HomeCard :showCompletionSteps="false" tempBackgroundColour="bg-blue-100" tempFocusRingColour="focus:ring-blue-200" user="Au Pair" content="Experience a new culture with a host family abroad as a caregiver" />
				<HomeCard :showCompletionSteps="false" tempBackgroundColour="bg-green-100" tempFocusRingColour="focus:ring-green-200" user="Childminder" content="Work as a pro-nanny" />
			</div>
		</main>
		<footer>
			<BottomMenu />
		</footer>
	</div>
</template>
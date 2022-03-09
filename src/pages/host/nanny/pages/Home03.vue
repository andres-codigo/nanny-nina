<script setup>
import UserProgress from '../../../../components/home/UserProgress.vue'
import HomeCard from '../../../../components/cards/HomeCard.vue'
</script>

<template>
	<div class="bg-white w-full h-screen">
		<main>
			<div class="min-h-full flex flex-col mx-4">
				<UserProgress :showCompletionPercentage="false" />
				<HomeCard :showCompletionSteps="false" tempBackgroundColour="bg-pink-100" tempFocusRingColour="focus:ring-pink-200" user="Nanny" content="Book a nanny for emergency, one-time or recurring schedule" />
				<HomeCard :showCompletionSteps="false" tempBackgroundColour="bg-indigo-100" tempFocusRingColour="focus:ring-indigo-200" user="Au Pair" content="Experience a new culture with a host family abroad as a caregiver" />
				<HomeCard :showCompletionSteps="false" tempBackgroundColour="bg-emerald-100" tempFocusRingColour="focus:ring-emerald-200" user="Childminder" content="Work as a pro-nanny" />
			</div>
		</main>
	</div>
</template>
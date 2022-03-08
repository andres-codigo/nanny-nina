<script setup>
import UserProgress from '../../../../components/home/UserProgress.vue'
import HomeCard from '../../../../components/cards/HomeCard.vue'
</script>

<template>
	<div class="bg-white w-full h-screen">
		<main>
			<div class="min-h-full flex flex-col mx-4 mt-10">
				<UserProgress />
				<HomeCard tempBackgroundColour="bg-pink-100" user="Nanny" content="Work on regular fixed schedule, returning days per week" />
				<HomeCard tempBackgroundColour="bg-indigo-100" user="Au Pair" content="Experience a new culture with a host family abroad as a caregiver" />
				<HomeCard tempBackgroundColour="bg-emerald-100" user="Childminder" content="Work as a pro-nanny" />
			</div>
		</main>
	</div>
</template>
<script setup>
import UserProgress from '../../../../components/home/UserProgress.vue'
import HomeCard from '../../../../components/cards/HomeCard.vue'
</script>

<template>
	<div class="bg-white w-full h-screen">
		<header>
			<div class="h-16 pt-4 px-4">
				<router-link to="/dashboard" class="float-right"><XIcon class="w-8 h-8" aria-hidden="true" /></router-link>
			</div>
		</header>
		<main>
			<div class="min-h-full flex flex-col mx-4">
				<UserProgress />
				<HomeCard tempBackgroundColor="bg-pink-100" tempFocusRingColor="focus:ring-pink-200" user="Nanny" content="Work on regular fixed schedule, returning days per week" />
				<HomeCard tempBackgroundColor="bg-blue-100" tempFocusRingColor="focus:ring-blue-200" user="Au Pair" content="Experience a new culture with a host family abroad as a caregiver" />
				<HomeCard tempBackgroundColor="bg-green-100" tempFocusRingColor="focus:ring-green-200" user="Childminder" content="Work as a pro-nanny" />
			</div>
		</main>
	</div>
</template>

<script>
import { XIcon } from '@heroicons/vue/solid'

export default {
	components: {
		XIcon
	}
}
</script>
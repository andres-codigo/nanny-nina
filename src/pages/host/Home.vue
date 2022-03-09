<script setup>
import UserProgress from '../../components/home/UserProgress.vue'
import HomeCard from '../../components/cards/HomeCard.vue'
</script>

<template>
	<div class="min-w-360-for-dev-not-prod">
		<main>
			<div class="min-h-full flex flex-col mx-4">
				<UserProgress :showCompletionPercentage="false" />
				<HomeCard :showCompletionSteps="false" tempBackgroundColour="bg-pink-100" tempFocusRingColour="focus:ring-pink-200" user="Nanny" content="Book a nanny for emergency, one-time or recurring schedule" />
				<HomeCard :showCompletionSteps="false" tempBackgroundColour="bg-indigo-100" tempFocusRingColour="focus:ring-indigo-200" user="Au Pair" content="Experience a new culture with a host family abroad as a caregiver" />
				<HomeCard :showCompletionSteps="false" tempBackgroundColour="bg-emerald-100" tempFocusRingColour="focus:ring-emerald-200" user="Childminder" content="Work as a pro-nanny" />
			</div>
		</main>
		<footer>
			<section class="block fixed inset-x-0 w-full bottom-0 z-10 bg-white border-t border-gray min-w-360-for-dev-not-prod">
				<div class="flex justify-between">
					<router-link to="/dashboard" class="inline-block w-full justify-center text-center pt-2 pb-1 text-gray-400 focus:text-indigo-500 hover:text-indigo-500">
						<HomeIcon class="w-8 h-8 inline-block mb-1" />
						<span class="tab tab-home block text-xs">Home</span>
					</router-link>
					<router-link to="/dashboard" class="inline-block w-full justify-center text-center pt-2 pb-1 text-gray-400 focus:text-indigo-500 hover:text-indigo-500">
						<BookmarkIcon class="w-8 h-8 inline-block mb-1" />
						<span class="tab tab-home block text-xs">Bookings</span>
					</router-link>
					<router-link to="/dashboard" class="inline-block w-full justify-center text-center pt-2 pb-1 text-gray-400 focus:text-indigo-500 hover:text-indigo-500">
						<PlusCircleIcon class="w-8 h-8 inline-block mb-1" />
						<span class="tab tab-home block text-xs">Book</span>
					</router-link>
					<router-link to="/dashboard" class="inline-block w-full justify-center text-center pt-2 pb-1 text-gray-400 focus:text-indigo-500 hover:text-indigo-500">
						<BellIcon class="w-8 h-8 inline-block mb-1" />
						<span class="tab tab-home block text-xs">Inbox</span>
					</router-link>
					<router-link to="/dashboard" class="inline-block w-full justify-center text-center pt-2 pb-1 text-gray-400 focus:text-indigo-500 hover:text-indigo-500">
						<DotsVerticalIcon class="w-8 h-8 inline-block mb-1" />
						<span class="tab tab-home block text-xs">More</span>
					</router-link>
				</div>
			</section>
		</footer>
	</div>
</template>

<script>
import { HomeIcon, BookmarkIcon, PlusCircleIcon, BellIcon, DotsVerticalIcon } from '@heroicons/vue/solid'

export default {
	components: {
		HomeIcon,
		BookmarkIcon,
		PlusCircleIcon,
		BellIcon,
		DotsVerticalIcon
	}
}
</script>
<template>
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
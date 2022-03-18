<template>
	<section class="block fixed inset-x-0 w-full bottom-0 z-10 bg-white border-t border-gray min-w-360-for-dev-not-prod">
		<div class="flex items-center h-20 justify-between">
			<BottomMenuItem to="dashboard" text="Home" class="text-blue-500"><HomeIcon class="w-8 h-8 inline-block mb-1" /></BottomMenuItem>
			<BottomMenuItem to="dashboard" text="Bookings" class="text-gray-400"><BookmarkIcon class="w-8 h-8 inline-block mb-1" /></BottomMenuItem>
			<BottomMenuItem to="dashboard" text="Book" class="text-gray-400"><PlusCircleIcon class="w-8 h-8 inline-block mb-1" /></BottomMenuItem>
			<BottomMenuItem to="dashboard" text="Inbox" class="text-gray-400"><BellIcon class="w-8 h-8 inline-block mb-1" /></BottomMenuItem>
			<BottomMenuItem to="dashboard" text="More" class="text-gray-400"><DotsVerticalIcon class="w-8 h-8 inline-block mb-1" /></BottomMenuItem>
		</div>
	</section>
</template>

<script>
import BottomMenuItem from './BottomMenuItem.vue'
import { HomeIcon, BookmarkIcon, PlusCircleIcon, BellIcon, DotsVerticalIcon } from '@heroicons/vue/solid'

export default {
	components: {
		BottomMenuItem,
		HomeIcon,
		BookmarkIcon,
		PlusCircleIcon,
		BellIcon,
		DotsVerticalIcon
	}
}
</script>
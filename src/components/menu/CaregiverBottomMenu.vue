<template>
	<section class="block fixed inset-x-0 w-full bottom-0 z-10 bg-white border-t border-gray min-w-360-for-dev-not-prod">
		<div class="flex items-center h-20 justify-between">
			<BottomMenuItem to="dashboard" text="Home" class="text-purple-500"><Img src="./assets/svg/menu/home.svg" class="inline-block mb-1" /></BottomMenuItem>
			<BottomMenuItem to="dashboard" text="Bookings" class="text-gray-400"><Img src="./assets/svg/menu/bookings.svg" class="inline-block mb-1" /></BottomMenuItem>
			<BottomMenuItem to="dashboard" text="Inbox" class="text-gray-400"><Img src="./assets/svg/menu/inbox.svg" class="inline-block mb-1" /></BottomMenuItem>
			<BottomMenuItem to="dashboard" text="Discover" class="text-gray-400"><Img src="./assets/svg/menu/discover.svg" class="inline-block mb-1" /></BottomMenuItem>
			<BottomMenuItem to="dashboard" text="Profile" class="text-gray-400"><Img src="./assets/svg/menu/profile.svg" class="inline-block mb-1" /></BottomMenuItem>
		</div>
	</section>
</template>

<script>
import BottomMenuItem from './BottomMenuItem.vue'
import Img from '../dom-elements/Img.vue'

import { HomeIcon, BookmarkIcon, PlusCircleIcon, BellIcon, DotsVerticalIcon } from '@heroicons/vue/solid'

export default {
	components: {
		BottomMenuItem,
		Img,
		HomeIcon,
		BookmarkIcon,
		PlusCircleIcon,
		BellIcon,
		DotsVerticalIcon
	}
}
</script>
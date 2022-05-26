<template>
	<section class="block fixed inset-x-0 w-full bottom-0 z-10 bg-white border-t border-gray min-w-360-for-dev-not-prod">
		<div class="flex items-center h-20 justify-between">
			<BottomMenuItem to="dashboard" text="Home" :class="[isHomeSelected ? 'text-purple-500 hover:text-purple-400 focus:text-purple-600' : 'text-gray-400']">
				<Img :src="isHomeSelected ? './assets/svg/menu/bottom/home-selected.svg' : './assets/svg/menu/bottom/home.svg'" class="inline-block mb-1" />
			</BottomMenuItem>

			<BottomMenuItem to="dashboard" text="Bookings" class="text-gray-400">
				<Img src="./assets/svg/menu/bottom/bookings.svg" class="inline-block mb-1" />
			</BottomMenuItem>

			<BottomMenuItem to="dashboard" text="Request" class="text-gray-400">
				<Img src="./assets/svg/other/add-circle-gray-background.svg" class="inline-block mb-1" />
			</BottomMenuItem>

			<BottomMenuItem to="dashboard" text="Inbox" class="text-gray-400">
				<Img src="./assets/svg/notifications/alarm.svg" class="inline-block mb-1" />
			</BottomMenuItem>

			<BottomMenuItem to="dashboard" text="Profile" :class="[isMoreSelected ? 'text-purple-500 hover:text-purple-400 focus:text-purple-600' : 'text-gray-400']">
				<Img :src="isMoreSelected ? './assets/svg/menu/bottom/more-vertical-selected.svg' : './assets/svg/menu/bottom/more-vertical.svg'" class="inline-block mb-1" />
			</BottomMenuItem>
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
	},
	props: {
		isHomeSelected: {
			type: Boolean,
			default: true
		},
		isBookingsSelected: {
			type: Boolean,
			default: false
		},
		isNewRequestSelected: {
			type: Boolean,
			default: false
		},
		isInboxSelected: {
			type: Boolean,
			default: false
		},
		isMoreSelected: {
			type: Boolean,
			default: false
		},
	}
}
</script>
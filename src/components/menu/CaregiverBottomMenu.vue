<template>
	<section
		class="fixed inset-x-0 bottom-0 z-10 block w-full bg-white border-t border-gray min-w-360-for-dev-not-prod"
	>
		<div class="flex items-center justify-between h-20">
			<BottomMenuItem
				to="dashboard"
				text="Home"
				:class="[
					isHomeSelected
						? 'text-purple-500 hover:text-purple-400 focus:text-purple-600'
						: 'text-gray-400',
				]"
			>
				<ImageComponent
					:src="
						isHomeSelected
							? './assets/svg/menu/bottom/home-selected.svg'
							: './assets/svg/menu/bottom/home.svg'
					"
					class="inline-block mb-1"
				/>
			</BottomMenuItem>

			<BottomMenuItem
				to="dashboard"
				text="Bookings"
				class="text-gray-400"
			>
				<ImageComponent
					src="./assets/svg/menu/bottom/bookings.svg"
					class="inline-block mb-1"
				/>
			</BottomMenuItem>

			<BottomMenuItem
				to="dashboard"
				text="Inbox"
				:class="[
					isInboxSelected
						? 'text-purple-500 hover:text-purple-400 focus:text-purple-600'
						: 'text-gray-400',
				]"
			>
				<ImageComponent
					:src="
						isInboxSelected
							? './assets/svg/menu/bottom/inbox-selected.svg'
							: './assets/svg/menu/bottom/inbox.svg'
					"
					class="inline-block mb-1"
				/>
			</BottomMenuItem>

			<BottomMenuItem
				to="dashboard"
				text="Discover"
				class="text-gray-400"
			>
				<ImageComponent
					src="./assets/svg/menu/bottom/discover.svg"
					class="inline-block mb-1"
				/>
			</BottomMenuItem>

			<BottomMenuItem
				to="dashboard"
				text="Profile"
				:class="[
					isProfileSelected
						? 'text-purple-500 hover:text-purple-400 focus:text-purple-600'
						: 'text-gray-400',
				]"
			>
				<ImageComponent
					:src="
						isProfileSelected
							? './assets/svg/menu/bottom/profile-selected.svg'
							: './assets/svg/menu/bottom/profile.svg'
					"
					class="inline-block mb-1"
				/>
			</BottomMenuItem>
		</div>
	</section>
</template>

<script>
import BottomMenuItem from './BottomMenuItem.vue'
import ImageComponent from '../dom-elements/ImageComponent.vue'

export default {
	components: {
		BottomMenuItem,
		ImageComponent,
	},
	props: {
		isHomeSelected: {
			type: Boolean,
			default: true,
		},
		isBookingsSelected: {
			type: Boolean,
			default: false,
		},
		isInboxSelected: {
			type: Boolean,
			default: false,
		},
		isDiscoverSelected: {
			type: Boolean,
			default: false,
		},
		isProfileSelected: {
			type: Boolean,
			default: false,
		},
	},
}
</script>

<template>
	<li class="bg-white">
		<router-link :to="routerLinkPath" class="block hover:bg-gray-50">
			<div :class="['py-4', subItem ? 'ml-16 mr-4' : 'mx-4']">
				<div class="flex items-center justify-between">
					<p :class="['text-sm font-medium truncate', textColor]">{{ title }}</p>
					<div class="ml-2 flex-shrink-0 flex">
						<p :class="['px-2 inline-flex text-xs leading-5 font-semibold rounded-full', textColorBadge, backgroundColorBadge]">{{ textBadge }}</p>
					</div>
				</div>
			</div>
			 <div :class="['pb-4 sm:flex sm:justify-between', hideNotes ? 'hidden sm:hidden' : '', subItem ? 'pl-16 pr-4' : 'mx-4']">
				<div class="sm:flex">
					<p class="flex items-center text-sm text-gray-500">
						<UsersIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
						{{ notes }}
					</p>
				</div>
				<div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
					<CalendarIcon class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
					<p>
						<time :datetime="date">{{ date }}</time>
					</p>
				</div>
			</div>
		</router-link>
	</li>
</template>

<script>
import { UsersIcon, CalendarIcon } from '@heroicons/vue/solid'

export default {
	components: {
		UsersIcon,
		CalendarIcon
	},
	props: {
		routerLinkPath: String,
		title: String,
		textColor: String,
		textBadge: String,
		textColorBadge: String,
		backgroundColorBadge: String,
		hideNotes: {
			type: Boolean,
			default: true
		},
		subItem: {
			type: Boolean,
			default: false
		},
		notes: String,
		date: String
	}
}
</script>
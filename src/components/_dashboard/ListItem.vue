<template>
	<li class="bg-white">
		<router-link :to="routerLinkPath" class="block hover:bg-gray-50">
			<div class="px-4 py-4">
				<div class="flex items-center justify-between">
					<p :class="['text-sm font-medium truncate', textColor]">{{ title }}</p>
					<div class="ml-2 flex-shrink-0 flex">
						<p :class="['px-2 inline-flex text-xs leading-5 font-semibold rounded-full', textColorBadge, backgroundColorBadge]">{{ textBadge }}</p>
					</div>
				</div>
			</div>
			 <div :class="['mx-4 pb-4 sm:flex sm:justify-between', hide ? 'hidden sm:hidden' : '']">
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
	props: {
		routerLinkPath: String,
		title: String,
		textColor: String,
		textBadge: String,
		textColorBadge: String,
		backgroundColorBadge: String,
		hide: {
			type: Boolean,
			default: true
		},
		notes: String,
		date: String
	},
	components: {
		UsersIcon,
		CalendarIcon
	},
}
</script>
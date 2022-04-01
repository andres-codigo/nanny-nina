<template>
	<div class="border-b border-b-gray-50">
		<a href="#" target="_self">
			<div class="flex flex-row mt-4 mx-4">
				<div class="flex-none items-center justify-center w-12">
					<img class="h-12 w-12 rounded-full" :src="src" alt="">
				</div>
				<div class="inline-flex w-full ml-4">
					<div class="flex w-full">
						<div class="inline-flex grow">
							<h6 class="text-header-six font-semibold antialiased">{{ title }}</h6>
						</div>
						<div class="inline-flex justify-end w-6">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
								<path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
							</svg>
						</div>
					</div>
				</div>
			</div>
			<div class="flex flex-row text-sm mb-2 ml-20">
				<div class="flex-none w-6"><LocationMarkerIcon class="w-5 h-5" /></div>
				<div class="w-24">2km</div>
				<div class="flex-none w-6"><CalendarIcon class="w-5 h-5" /></div>
				<div class="grow">Occasional</div>
			</div>
			<div class="flex flex-row text-sm mb-2 ml-20">
				<div class="flex-none w-6"><CashIcon class="w-5 h-5" /></div>
				<div class="w-24">€13-€15/hr</div>
				<div class="flex-none w-6"><ClockIcon class="w-5 h-5" /></div>
				<div class="grow">From Wed, Dec 2</div>
			</div>
			<div class="flex flex-row text-sm mb-2 ml-20">
				<div class="flex-none w-6 h-6"><UsersIcon class="w-5 h-5" /></div>
				<div class="w-24 h-6">{{ responses }} Responses</div>
			</div>
			<div class="flex flex-row justify-end text-xs text-gray-500 mr-4">{{ published }} ago</div>
		</a>
	</div>
</template>

<script>
import { LocationMarkerIcon, CashIcon, UsersIcon, CalendarIcon, ClockIcon, BookmarkIcon } from '@heroicons/vue/outline'

export default {
	components: {
		LocationMarkerIcon,
		CalendarIcon,
		CashIcon,
		ClockIcon,
		UsersIcon,
		BookmarkIcon
	},
	props: {
		src: String,
		title: String,
		responses: String,
		published: String
	}
}
</script>
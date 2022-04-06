<template>
	<div>
		<a href="#" target="_self">
			<div class="flex flex-row mt-4 mb-12 mx-4">
				<div class="flex-none items-center justify-center w-16">
					<img class="h-16 w-16 rounded-full" :src="src" alt="">
				</div>
				<div class="flex-row w-full ml-4">
					<div class="inline-flex w-full">
						<div class="inline-flex grow">
							<h6 class="text-header-six font-semibold antialiased">{{ title }}</h6>
						</div>
						<div class="inline-flex justify-end w-6">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor" v-if="filledHeart">
								<path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
							</svg>
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" v-else>
								<path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
							</svg>
						</div>
					</div>
					<div class="flex flex-row mt-1">
						<div class="inline-flex">
							<div class="w-24 mr-2">
								<div class="grid grid-cols-5 gap-2">
									<div><StarIcon class="w-5 h-5 text-yellow-400" /></div>
									<div><StarIcon class="w-5 h-5 text-yellow-400" /></div>
									<div><StarIcon class="w-5 h-5 text-yellow-400" /></div>
									<div><StarIcon class="w-5 h-5 text-gray-100" /></div>
									<div><StarIcon class="w-5 h-5 text-gray-100" /></div>
								</div>
							</div>
							<div class="inline-flex justify-center"><span class="text-sm">(4.5/5)</span></div>
						</div>
					</div>
					<div class="flex flex-row items-center mt-4 mb-2">
						<div class="flex-none w-6"><ClockIcon class="w-5 h-5" /></div>
						<div>{{ availability }}</div>
					</div>
					<div class="flex flex-row items-center mt-4">
						<div class="flex-none w-6"><BriefcaseIcon class="w-5 h-5" /></div>
						<div class="w-12">2yrs</div>
						<div class="flex-none w-6"><LocationMarkerIcon class="w-5 h-5" /></div>
						<div class="w-12">2km</div>
						<div class="flex-none w-6"><CashIcon class="w-5 h-5" /></div>
						<div class="grow">From &euro;10/hr</div>
					</div>
				</div>
			</div>
		</a>
	</div>
</template>

<script>
import { ClockIcon, BriefcaseIcon, LocationMarkerIcon, CashIcon, StarIcon } from '@heroicons/vue/outline'

export default {
	components: {
		ClockIcon,
		BriefcaseIcon,
		LocationMarkerIcon,
		CashIcon,
		StarIcon
	},
	props: {
		src: String,
		title: String,
		availability: String,
		filledHeart: {
			type: Boolean,
			default: false
		}
	}
}
</script>
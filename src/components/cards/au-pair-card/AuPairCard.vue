<template>
	<div class="inline-flex w-full border border-gray-50 hover:border hover:border-gray-500 rounded-3xl">
		<a href="/" target="_self" class="w-full h-card-au-pair focus:opacity-60">
			<div :class="['flex flex-row rounded-t-3xl', tempBackgroundColor]">
				<div class="relative flex grow h-64 overflow-hidden">
					<span class="absolute right-2 top-2 w-6"><HeartIcon class="w-6 h-6 text-red-500" aria-hidden="true" /></span>
					<!--
						Image svg here
						<img src="*.svg" />
						* remove background color in div as visual placeholder
					-->
				</div>
			</div>
			<div class="h-56 mx-4">
				<div class="mt-10 mb-4">
					<h4 class="text-header-four font-semibold antialiased mb-1">The Sanders</h4>
					<p class="text-sm text-gray-500 font-thin">Shared on 5mins ago</p>
				</div>
				<div class="flex flex-row mb-3 items-center">
					<div class="flex-none w-6">
						<GlobeAltIcon class="w-5 h-5" />
					</div>
					<div class="grow font-thin">Speak Dutch, English</div>
					<div class="flex-none w-6"><GlobeIcon class="w-5 h-5" /></div>
					<div class="grow font-thin">Amsterdam, NL</div>
				</div>
				<div class="flex flex-row text-sm mb-3">
					<div class="flex-none w-6"><CalendarIcon class="w-5 h-5" /></div>
					<div class="grow font-thin">€13-€15/hr</div>
					<div class="flex-none w-6"><ClockIcon class="w-5 h-5" /></div>
					<div class="grow font-thin">From Wed, Dec 2</div>
				</div>
				<div class="flex flex-row text-sm mb-3">
					<div class="flex-none w-6 h-6"><UserIcon class="w-5 h-5" /></div>
					<div class="grow font-thin">2 kids (2yr, 3yr)</div>
				</div>
			</div>
		</a>
	</div>
</template>

<script>
import { HeartIcon, GlobeAltIcon, GlobeIcon, CalendarIcon, ClockIcon, UserIcon } from '@heroicons/vue/solid'

export default {
	components: {
		HeartIcon,
		GlobeAltIcon,
		GlobeIcon,
		UserIcon,
		CalendarIcon,
		ClockIcon
	},
	props: {
		tempBackgroundColor: String,
		tempFocusRingColor: String,
		user: String,
		content: String,
		showCompletionSteps: {
			type: Boolean,
			default: true
		}
	}
}
</script>
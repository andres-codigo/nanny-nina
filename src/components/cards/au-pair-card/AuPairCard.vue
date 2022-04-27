<template>
	<div class="inline-flex w-full border border-gray-50 hover:border hover:border-gray-500 rounded-3xl mb-10">
		<a href="/" target="_self" class="w-full h-card-au-pair focus:opacity-60">
			<div :class="['flex flex-row rounded-t-3xl', tempBackgroundColor]">
				<div class="relative grow h-64 overflow-hidden">
					<span class="absolute right-6 top-2 w-6"><HeartIcon class="w-11 h-11 text-red-500" aria-hidden="true" /></span>
					<!--
						Image svg/png here
						<img src="*.svg" class="rounded-t-3xl" />
						* remove background color in div as visual placeholder
					-->
					<img src="https://images.unsplash.com/photo-1543721482-bc95ff1f1dea" class="rounded-t-3xl">
				</div>
			</div>
			<div class="h-56 mx-4">
				<div class="my-6">
					<h4 class="text-header-four font-semibold antialiased mb-1">The Sanders</h4>
					<p class="text-sm text-gray-500 font-thin">Shared on 5mins ago</p>
				</div>
				<div class="flex flex-row mb-4 items-center">
					<div class="flex-none w-6"><GlobeAltIcon class="w-5 h-5" /></div>
					<div class="inline-flex grow items-center font-thin">
						Speak Dutch, English <span class="h-1 w-1 bg-purple-900 rounded-full mx-1"></span> Amsterdam, NL
					</div>
				</div>
				<div class="flex flex-row mb-3">
					<div class="flex-none w-6"><CalendarIcon class="w-5 h-5" /></div>
					<div class="inline-flex grow items-center font-thin">
						Starting Nov 2021 <span class="h-1 w-1 bg-purple-900 rounded-full mx-1"></span> <ClockIcon class="w-5 h-5" /> For 12months
					</div>
				</div>
				<div class="flex flex-row mb-3">
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
<template>
	<header>
		<div class="flex bg-indigo-600">
			<div class="flex-none inline-flex justify-center items-center -ml-1.5 w-14 h-14">
				<router-link :to="routerLinkPath"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link>
			</div>
			<div :class="['grow h-14 inline-flex justify-center items-center text-white', hideHeader ? 'hidden sm:hidden' : '']">{{ text }}</div>
			<div :class="['flex-none inline-flex justify-center items-center w-14 h-14', hideIcon ? 'hidden sm:hidden' : '']"><QuestionMarkCircleIcon class="w-8 h-8 text-green" aria-hidden="true" /></div>
		</div>
	</header>
</template>

<script>
import { ChevronLeftIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	props: {
		routerLinkPath: String,
		text: String,
		hideHeader: {
			type: Boolean,
			default: false
		},
		hideIcon: {
			type: Boolean,
			default: false
		},
	},
	components: {
		ChevronLeftIcon,
		QuestionMarkCircleIcon
	},
}
</script>
<template>
	<header>
		<div :class="['flex', backgroundColor, backgroundColor === 'bg-white' ? 'drop-shadow-md' : '']">
			<div class="flex-none inline-flex justify-center items-center -ml-1.5 w-14 h-14">
				<router-link :to="routerLinkPath"><ChevronLeftIcon :class="['w-8 h-8', iconColor]" aria-hidden="true" /></router-link>
			</div>
			<div :class="['grow h-14 inline-flex justify-center items-center text-xl', headerColor, hideHeader ? 'hidden sm:hidden' : '']">{{ text }}</div>
			<div class="flex-none inline-flex justify-center items-center w-14 h-14">
				<slot></slot>
			</div>
		</div>
	</header>
</template>

<script>
import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		ChevronLeftIcon
	},
	props: {
		backgroundColor: {
			type: String,
			default: 'bg-blue-500'
		},
		iconColor: {
			type: String,
			default: 'text-white'
		},
		headerColor: {
			type: String,
			default: 'text-white'
		},
		routerLinkPath: String,
		text: String,
		hideHeader: {
			type: Boolean,
			default: false
		}
	}
}
</script>
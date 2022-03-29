<template>
	<span class="justify-center rounded-full text-white text-xs font-bold antialiased leading-none bg-lilac-500 inline-flex w-button-xs my-1 mx-1 px-2 py-2">
		<span class="inline-flex text-xs truncate ... pr-2 w-14">{{ text }}</span>
		<button type="button" class="flex-shrink-0 ml-0.5 h-5 w-5 rounded-full inline-flex items-center justify-center hover:bg-lilac-400 focus:bg-lilac-600">
			<span class="sr-only">Remove</span>
			<XCircleIcon class="w-5 h-5 relative -right-0" />
		</button>
	</span>
</template>

<script>
import { XCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		XCircleIcon
	},
	props: {
		text: String
	}
}
</script>
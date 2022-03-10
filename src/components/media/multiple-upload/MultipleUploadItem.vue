<template>
	<button
		class="
			flex shrink items-center justify-center
			relative
			h-44 w-32
			rounded-lg
			text-indigo-500
			bg-indigo-100
			hover:border-transparent hover:text-indigo-400 hover:bg-indigo-200
			focus:outline-none focus:ring-2 focus:ring-offset-2">
		<span class="flex items-center justify-center h-12 w-12">
			<PlusIcon class="w-8 h-8" aria-hidden="true" />
		</span>
	</button>
</template>

<script>
import { PlusIcon } from '@heroicons/vue/solid'

export default {
	components: {
		PlusIcon
	}
}
</script>
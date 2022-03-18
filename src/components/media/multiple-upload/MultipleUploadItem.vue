<!-- TODO: bg color and text for all states -->
<template>
	<button
		class="
			flex shrink items-center justify-center
			relative
			h-44 w-32
			rounded-lg
			text-purple-500
			bg-purple-100
			hover:border-transparent hover:text-purple-400 hover:bg-purple-200
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
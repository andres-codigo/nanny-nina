<template>
	<button
		class="
			flex shrink items-center justify-center
			relative
			w-28 h-32
			rounded-lg
			text-lilac-500
			bg-purple-50
			hover:border-transparent hover:bg-purple-100
			focus:border-transparent focus:bg-green-100">
		<span class="flex items-center justify-center h-12 w-12">
			<PlusIcon class="w-6 h-6" aria-hidden="true" />
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
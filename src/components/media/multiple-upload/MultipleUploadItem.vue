<template>
	<span class="flex shrink items-center justify-center relative h-44 w-32 rounded-lg bg-indigo-100">
		<span class="flex items-center justify-center h-12 w-12">
			<PlusIcon class="w-8 h-8 text-indigo-500" aria-hidden="true" />
		</span>
	</span>
</template>

<script>
import { PlusIcon } from '@heroicons/vue/solid'

export default {
	components: {
		PlusIcon
	}
}
</script>
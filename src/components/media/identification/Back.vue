<template>
	<h2 class="mb-2 text-left text-2xl font-normal text-gray-900">Residence Card/ID (Back)</h2>
	<h3	class="font-light">Please upload the back of your permit/ID card</h3>

	<div class="mt-10">
		<div class="flex items-center justify-center mb-6">
			<span
				class="
					flex items-center justify-center
					relative
					h-56 w-56
					rounded-full
					bg-indigo-100
				">
				<UserIcon class="w-32 h-32 text-indigo-400" aria-hidden="true" />
				<button
					class="
						flex items-center justify-center
						absolute bottom-6 right-0
						h-12 w-12
						rounded-full drop-shadow-lg
						text-slate-800
						bg-slate-100
						hover:border-transparent hover:text-slate-700 hover:bg-slate-200
						focus:outline-none focus:ring-2 focus:ring-offset-2
					">
					<PlusIcon class="w-8 h-8" aria-hidden="true" />
				</button>
			</span>
		</div>
		<p class="text-sm font-light text-center text-gray-500">Size limit 5MB</p>
	</div>
</template>

<script>
import { UserIcon, PlusIcon } from '@heroicons/vue/solid'

export default {
	components: {
		UserIcon,
		PlusIcon
	}
}
</script>
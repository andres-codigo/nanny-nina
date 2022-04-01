<!-- TODO: bg color for default, hover & focus, including border or no border decision -->
<template>
	<h5 class="text-left text-header-five antialiased mb-2">Residence Card/ID (Back)</h5>
	<p	class="text-sm font-light">Please upload the back of your permit/ID card</p>

	<div class="mt-10">
		<div class="flex items-center justify-center mb-6">
			<button
				class="
					flex items-center justify-center
					relative
					h-56 w-56
					rounded-full
					bg-lilac-100
					hover:border-transparent hover:text-gray-200 hover:bg-gray-100
					focus:outline-none focus:ring-0
				">
				<DocumentTextIcon class="w-32 h-32 text-lilac-500" aria-hidden="true" />
				<span
					class="
						flex items-center justify-center
						absolute bottom-6 right-0
						h-12 w-12
						rounded-full drop-shadow-lg
						text-gray-800
						bg-white
					">
					<PlusIcon class="w-7 h-7" aria-hidden="true" />
				</span>
			</button>
		</div>
		<p class="text-sm font-light text-center text-gray-500">Size limit 5MB</p>
	</div>
</template>

<script>
import { UserIcon, DocumentTextIcon, PlusIcon } from '@heroicons/vue/solid'

export default {
	components: {
		UserIcon,
		DocumentTextIcon,
		PlusIcon
	}
}
</script>
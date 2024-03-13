<!-- TODO: bg color for progress -->
<template>
	<div class="flex flex-row mb-4 mt-4">
		<div class="basis-1/2">
			<h6 class="text-header-five font-semibold antialiased">
				{{ welcomeMessage }}
			</h6>
			<p class="text-sm text-gray-500 antialiased pt-2">
				{{ instruction }}
			</p>
		</div>
		<div
			:class="[
				'basis-1/2 mr-4 relative',
				!showCompletionPercentage ? 'hidden sm:hidden' : '',
			]"
		>
			<div class="absolute -bottom-1 right-0">
				<span
					class="inline-block text-sm text-purple-900 font-light antialiased"
					>30% Ready to work</span
				>
				<div class="bg-gray-200 rounded-full overflow-hidden">
					<div
						class="h-2 bg-purple-500 rounded-full"
						style="width: 30%"
					></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		welcomeMessage: {
			type: String,
			default: '',
		},
		instruction: {
			type: String,
			default: '',
		},
		showCompletionPercentage: {
			type: Boolean,
			default: true,
		},
	},
}
</script>

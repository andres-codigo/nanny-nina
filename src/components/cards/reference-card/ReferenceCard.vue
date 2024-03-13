<template>
	<div class="border-b border-b-gray-50 mb-10">
		<div class="flex w-full">
			<div class="inline-flex grow mt-4 mb-4">
				<div class="w-16">
					<img class="h-16 w-16 rounded-full" :src="src" alt="" />
				</div>
				<div class="ml-4">
					<h6 class="text-header-six font-semibold antialiased">
						{{ name }}
					</h6>
					<p class="text-sm font-thin text-gray-500">
						{{ position }}
					</p>
				</div>
			</div>
		</div>
		<div class="w-full mb-4">
			<slot name="content"></slot>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		src: {
			type: String,
			default: '',
		},
		name: {
			type: String,
			default: '',
		},
		position: {
			type: String,
			default: '',
		},
	},
}
</script>

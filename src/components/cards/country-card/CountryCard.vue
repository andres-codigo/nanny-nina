<template>
	<div
		class="inline-flex w-full border border-gray-50 hover:shadow-lg hover:shadow-gray-100 rounded-3xl"
	>
		<a href="/" class="w-full relative focus:opacity-60">
			<div
				:class="['flex flex-row h-96 rounded-3xl', tempBackgroundColor]"
			>
				<div class="block overflow-hidden rounded-3xl">
					<!--
						Image svg here
						<img src="*.svg" />
						* remove background color in div as visual placeholder
					-->
					<img :src="src" class="country-image" />
				</div>
			</div>
			<div class="h-40 absolute top-0 z-10">
				<div class="mt-8 ml-4">
					<h1
						class="text-header-one text-white font-semibold antialiased"
					>
						{{ country }}
					</h1>
				</div>
				<div
					class="inline-flex min-w-apply-country justify-center rounded-full text-sm text-purple-900 font-bold antialiased leading-none bg-white mt-4 ml-4 py-3 px-4"
				>
					{{ content }}
				</div>
			</div>
		</a>
	</div>
</template>

<script>
export default {
	props: {
		tempBackgroundColor: {
			type: String,
			default: '',
		},
		src: {
			type: String,
			default: '',
		},
		country: {
			type: String,
			default: '',
		},
		content: {
			type: String,
			default: '',
		},
	},
}
</script>

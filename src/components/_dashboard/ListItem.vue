<template>
	<li class="bg-white">
		<router-link :to="routerLinkPath" class="block hover:bg-gray-50">
			<span class="block hover:bg-gray-50">
				<div class="px-4 py-4 sm:px-6">
					<div class="flex items-center justify-between">
						<p :class="['text-sm font-medium truncate', textColor]">{{ title }}</p>
						<div class="ml-2 flex-shrink-0 flex">
							<p :class="['px-2 inline-flex text-xs leading-5 font-semibold rounded-full', textColorBadge, backgroundColorBadge]">{{ textBadge }}</p>
						</div>
					</div>
				</div>
			</span>
		</router-link>
	</li>
</template>

<script>
export default {
	props: {
		routerLinkPath: String,
		title: String,
		textColor: String,
		textBadge: String,
		textColorBadge: String,
		backgroundColorBadge: String,
	}
}
</script>
<template>
	<div class="inline-flex w-full border border-gray-50  hover:border hover:border-gray-500  rounded-3xl">
		<a href="/" class="w-full relative focus:opacity-60">
			<div :class="['flex flex-row h-96 rounded-3xl', tempBackgroundColor]">
				<div class="relative flex grow overflow-hidden">
					<!--
						Image svg here
						<img src="*.svg" />
						* remove background color in div as visual placeholder
					-->
				</div>
			</div>
			<div class="h-40 absolute top-0 z-10">
				<div class="mt-8 ml-4">
					<h1 class="text-header-one text-white font-semibold antialiased">{{ country }}</h1>
				</div>
				<div class="
					inline-flex min-w-apply-country
					justify-center
					rounded-full
					text-sm text-purple-900 font-bold
					antialiased leading-none
					bg-white
					mt-4 ml-4
					py-3 px-4
				">{{ content }}</div>
			</div>
		</a>
	</div>
</template>

<script>
import { QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		QuestionMarkCircleIcon
	},
	props: {
		tempBackgroundColor: String,
		country: String,
		content: String
	}
}
</script>
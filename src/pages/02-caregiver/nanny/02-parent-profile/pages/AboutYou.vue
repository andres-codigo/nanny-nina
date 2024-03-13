<template>
	<div>
		<TopNavigation
			background-color="bg-white"
			:display-border-bottom="true"
			header-color="text-purple-900"
			text="About You"
		>
			<template #iconLeft
				><router-link to="/dashboard?tab=2"
					><ChevronLeftIcon
						class="w-8 h-8 text-purple-900"
						aria-hidden="true" /></router-link
			></template>
			<template #iconRight
				><DotsVerticalIcon
					class="w-6 h-6 text-purple-900"
					aria-hidden="true"
			/></template>
		</TopNavigation>
		<main>
			<div class="h-full flex flex-col pt-12 mx-4">
				<h5 class="text-header-five font-semibold antialiased">
					Briefly describe yourself &amp; hobbies
				</h5>

				<div class="mt-2 mb-10">
					<label for="motivation" class="sr-only"
						>For example, My name is John Doe, I am a student at
						UVA, I enjoy cooking, riding a bike , I have 10years
						work experience etc.</label
					>
					<p class="text-sm font-light text-gray-500">
						For example, My name is John Doe, I am a student at UVA,
						I enjoy cooking, riding a bike , I have 10years work
						experience etc.
					</p>
					<div class="mt-8">
						<TextareaComponent id="about-you" name="about-you" />
					</div>
				</div>

				<div class="flex flex-col justify-center items-center mt-10">
					<ButtonPrimary
						text="Next"
						classes="w-button-lg text-xl py-4"
					/>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import TextareaComponent from '../../../../../components/form/TextareaComponent.vue'
import ButtonPrimary from '../../../../../components/buttons/ButtonPrimary.vue'

import { ChevronLeftIcon, DotsVerticalIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		TextareaComponent,
		ButtonPrimary,
		ChevronLeftIcon,
		DotsVerticalIcon,
	},
}
</script>

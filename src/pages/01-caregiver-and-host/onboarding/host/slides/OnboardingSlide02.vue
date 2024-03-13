<template>
	<div>
		<TopNavigation
			background-color="bg-lilac-100"
			:display-border-bottom="false"
		>
			<template #iconRight
				><router-link to="/dashboard?tab=1"
					><XIcon
						class="w-8 h-8 text-purple-900"
						aria-hidden="true" /></router-link
			></template>
		</TopNavigation>
		<main>
			<div
				class="min-h-screen flex flex-col justify-center px-4 bg-lilac-100"
			>
				<div class="flex justify-center h-48">
					<!--
						Image svg here
						<img src="*.svg" />
						* remove background color in div as visual placeholder
					-->
				</div>

				<div class="pt-6">
					<Badge
						title="we've got you covered"
						background-color="bg-green-50"
						text-color="text-purple-900"
					/>
				</div>

				<div class="pt-6">
					<CarouselHeader title="You are fully insured" />
					<CarouselHeader title="and safer with us" />
					<Paragraph
						content="Sometimes accidents happen, we get that. You don't have to worry, all our partners are fully covered and insured, so you don't have to worry"
					/>
				</div>

				<div class="inline-flex justify-center space-x-5 pt-10">
					<NavigationDot
						background-color="bg-purple-500 ring-8 ring-lilac-300"
					/>
					<NavigationDot
						background-color="bg-lilac-300"
						background-color-hover="hover:bg-purple-500 hover:ring-8 hover:ring-lilac-300"
					/>
					<NavigationDot
						background-color="bg-lilac-300"
						background-color-hover="hover:bg-purple-500 hover:ring-8 hover:ring-lilac-300"
					/>
					<NavigationDot
						background-color="bg-lilac-300"
						background-color-hover="hover:bg-purple-500 hover:ring-8 hover:ring-lilac-300"
					/>
				</div>

				<div
					class="flex flex-col justify-center items-center pt-20 pb-24 px-4"
				>
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
import Badge from '../../../../../components/carousel/Badge.vue'
import CarouselHeader from '../../../../../components/carousel/CarouselHeader.vue'
import Paragraph from '../../../../../components/carousel/Paragraph.vue'
import NavigationDot from '../../../../../components/carousel/NavigationDot.vue'
import ButtonPrimary from '../../../../../components/buttons/ButtonPrimary.vue'

import { XIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Badge,
		CarouselHeader,
		Paragraph,
		NavigationDot,
		ButtonPrimary,
		XIcon,
	},
}
</script>

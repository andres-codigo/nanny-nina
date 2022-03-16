<script setup>
import Image from '../../../../components/carousel/Image.vue'
import Badge from '../../../../components/carousel/Badge.vue'
import Header from '../../../../components/carousel/Header.vue'
import Paragraph from '../../../../components/carousel/Paragraph.vue'
import NavigationDot from '../../../../components/carousel/NavigationDot.vue'
import ButtonPrimary from '../../../../components/buttons/ButtonPrimary.vue'
</script>

<template>
	<div class="bg-purple-200">
		<header>
			<div class="h-16 pt-4 px-4">
				<router-link to="/dashboard" class="float-right"><XIcon class="w-8 h-8" aria-hidden="true" /></router-link>
			</div>
		</header>
		<main>
			<div class="flex flex-col justify-center px-4 bg-purple-200">
				<div class="flex justify-center min-h-325">
					<Image src="../../../assets/svg/onboarding/onboarding-1.svg" />
				</div>

				<div class="pt-6">
					<Badge title="quick &amp; easy" backgroundColor="bg-purple-100" textColor="text-black" />
				</div>

				<div class="pt-4">
					<Header title="Find your prefect nanny that cares" />
					<Paragraph content="Whether it's an one time booking or fixed or regular booking, explore and choose your preferred sitter" />
				</div>

				<div class="inline-flex justify-center space-x-6 slideshow-navigation pt-10">
					<NavigationDot backgroundColor="bg-black" backgroundColorHover="hover:bg-black" />
					<NavigationDot backgroundColor="bg-white" backgroundColorHover="hover:bg-black" />
					<NavigationDot backgroundColor="bg-white" backgroundColorHover="hover:bg-black" />
				</div>

				<div class="pt-20 pb-10 px-4">
					<ButtonPrimary text="Next" />
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import { XIcon } from '@heroicons/vue/solid'

export default {
	data() {
		return {
			slideIndex: 0,
		}
	},
	components: {
		XIcon
	}
}
</script>
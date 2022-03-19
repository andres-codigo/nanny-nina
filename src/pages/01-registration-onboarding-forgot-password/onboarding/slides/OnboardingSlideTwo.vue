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
					<Image src="../../../assets/svg/onboarding/onboarding-2.svg" />
				</div>

				<div class="pt-6">
					<Badge title="we've got you covered" backgroundColor="bg-purple-100" textColor="text-black" />
				</div>

				<div class="pt-4">
					<Header title="You are fully insured and safer with us" />
					<Paragraph content="We understand that sometimes accidents happen, this is why all our partners are fully covered and insured, so you don't have to worry" />
				</div>

				<div class="inline-flex justify-center space-x-6 slideshow-navigation pt-10">
					<NavigationDot backgroundColor="bg-white" backgroundColorHover="hover:bg-black" />
					<NavigationDot backgroundColor="bg-black" backgroundColorHover="hover:bg-black" />
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
import Image from '../../../../components/carousel/Image.vue'
import Badge from '../../../../components/carousel/Badge.vue'
import Header from '../../../../components/carousel/Header.vue'
import Paragraph from '../../../../components/carousel/Paragraph.vue'
import NavigationDot from '../../../../components/carousel/NavigationDot.vue'
import ButtonPrimary from '../../../../components/buttons/ButtonPrimary.vue'
import { XIcon } from '@heroicons/vue/solid'

export default {
	data() {
		return {
			slideIndex: 0,
		}
	},
	components: {
		Image,
		Badge,
		Header,
		Paragraph,
		NavigationDot,
		ButtonPrimary,
		XIcon
	}
}
</script>
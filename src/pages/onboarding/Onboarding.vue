<script setup>
import Image from '../../components/carousel/Image.vue'
import Badge from '../../components/carousel/Badge.vue'
import Header from '../../components/carousel/Header.vue'
import Paragraph from '../../components/carousel/Paragraph.vue'
import NavigationDot from '../../components/carousel/NavigationDot.vue'
import Button from '../../components/form/Button.vue'
</script>

<template>
	<div class="bg-indigo-200 w-screen h-screen">
		<header>
			<div class="h-16 pt-4 px-4">
				<router-link to="/home" class="float-right"><XIcon class="w-8 h-8" aria-hidden="true" /></router-link>
			</div>
		</header>
		<main>
			<div class="flex flex-col justify-center px-4 bg-indigo-200">
				<div class="flex justify-center min-h-325">
					<Image svg="../../assets/svg/onboarding/onboarding-1.svg" />
					<Image svg="../../assets/svg/onboarding/onboarding-2.svg" />
					<Image svg="../../assets/svg/onboarding/onboarding-3.svg" />
				</div>

				<div class="pt-6">
					<Badge title="quick &amp; easy" backgroundColor="bg-indigo-100" textColor="text-black" />
				</div>

				<div class="pt-4">
					<Header title="Find your prefect nanny that cares" />
					<Paragraph content="Whether it's an one time booking or fixed or regular booking, explore and choose your preferred sitter" />
				</div>

				<div class="inline-flex justify-center space-x-6 slideshow-navigation pt-10">
					<NavigationDot backgroundColor="bg-white" backgroundColorHover="hover:bg-black" @click="currentSlide(1)" />
					<NavigationDot backgroundColor="bg-white" backgroundColorHover="hover:bg-black" @click="currentSlide(2)" />
					<NavigationDot backgroundColor="bg-white" backgroundColorHover="hover:bg-black" @click="currentSlide(3)" />
				</div>

				<div class="pt-20 pb-10 px-4">
					<router-link to="/onboarding/2">
						<Button
							text="Next"
							textColour="text-white"
							backgroundColor="bg-indigo-600"
							textColourHover="hover:text-white"
							backgroundColorHover="hover:bg-indigo-500"
							backgroundColorFocus="focus:ring-indigo-500"
						/>
					</router-link>
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
	},
	methods: {
		currentSlide(slideNumber) {
			this.showSlides(slideNumber);
		},
		showSlides(slideNumber) {
			this.slideIndex = slideNumber;
			let i;
			const slides = document.getElementsByClassName("onBoarding");
			const dots = document.getElementsByClassName("dot");

			if (slideNumber > slides.length) {
				this.slideIndex = 1;
			}

			if (slideNumber < 1) {
				this.slideIndex = slides.length;
			}

			for (i = 0; i < slides.length; i++) {
				slides[i].style.display = "none";
			}

			for (i = 0; i < dots.length; i++) {
				dots[i].className = dots[i].className.replace(" active", "");
			}

			slides[this.slideIndex-1].style.display = "block";
			dots[this.slideIndex-1].className += " active";
		},
	},
	mounted() {
		this.slideIndex = 1;
		this.showSlides(this.slideIndex);
	}
}
</script>

<style scoped>
.active {
  @apply bg-black;
}

.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

</style>

<template>
	<div class="w-full h-full">
		<TopNavigation
			background-color="bg-white"
			:display-border-bottom="false"
		>
			<template #iconRight
				><router-link to="/dashboard?tab=3"
					><XIcon
						class="w-8 h-8 text-gray-500"
						aria-hidden="true" /></router-link
			></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col justify-center pt-12 mx-4">
				<div class="pb-4">
					<h4 class="text-header-four font-semibold antialiased mb-2">
						Caregiver Insurance
					</h4>
					<p class="font-semibold">7min read</p>
					<p class="text-sm">01/06/2022</p>
				</div>

				<p class="uppercase text-center text-13px font-semibold pb-4">
					insurance
				</p>

				<div class="pb-20">
					<ImageComponent
						src="https://images.unsplash.com/photo-1609220136736-443140cffec6"
					/>
					<h5 class="text-header-five font-semibold antialiased mt-4">
						Why we offer
					</h5>
					<p class="text-sm">
						Cover up to €1000 per year with a deductible of €350.
						The insurance is part of the service fee that families
						pay, the nanny does not pay.
					</p>
				</div>

				<div class="pb-20">
					<ImageComponent
						src="https://images.unsplash.com/photo-1609220136736-443140cffec6"
					/>
					<h5 class="text-header-five font-semibold antialiased mt-4">
						Why we offer
					</h5>
					<p class="text-sm">
						Cover up to €1000 per year with a deductible of €350.
						The insurance is part of the service fee that families
						pay, the nanny does not pay.
					</p>
				</div>

				<div class="pb-10">
					<ImageComponent
						src="https://images.unsplash.com/photo-1609220136736-443140cffec6"
					/>
					<h5 class="text-header-five font-semibold antialiased mt-4">
						Why we offer
					</h5>
					<p class="text-sm">
						Cover up to €1000 per year with a deductible of €350.
						The insurance is part of the service fee that families
						pay, the nanny does not pay.
					</p>
				</div>

				<a href="#" target="_self" class="w-full"
					><ImageComponent
						src="./assets/svg/other/arrow-circle-up.svg"
						class="float-right w-12 h-12"
				/></a>

				<div class="flex flex-col mb-10">
					<h5 class="text-header-five font-semibold antialiased mb-2">
						Other topics
					</h5>

					<div class="grid grid-cols-2 gap-4 mt-4">
						<div>
							<ImageComponent
								src="https://images.unsplash.com/photo-1609220136736-443140cffec6"
							/>
							<h5
								class="text-header-five font-semibold antialiased mt-4"
							>
								Payment issues
							</h5>
							<p class="text-13px text-purple-800">3min read</p>
						</div>
						<div>
							<ImageComponent
								src="https://images.unsplash.com/photo-1609220136736-443140cffec6"
							/>
							<h5
								class="text-header-five font-semibold antialiased mt-4"
							>
								How to get more matches
							</h5>
							<p class="text-13px text-purple-800">4min read</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../components/navigation-and-tabs/TopNavigation.vue'
import ImageComponent from '../../../../components/dom-elements/ImageComponent.vue'

import { XIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		ImageComponent,
		XIcon,
	},
}
</script>

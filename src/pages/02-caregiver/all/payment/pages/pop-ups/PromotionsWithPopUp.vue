<template>
	<!--
	PART ONE OF THREE
	When calling a pop-up you'll need to add a 'relative' class to the parent
-->
	<div class="relative w-full h-full">
		<TopNavigation text="Promotions">
			<template #iconLeft
				><router-link to="'/dashboard?tab=1"
					><ChevronLeftIcon
						class="w-8 h-8 text-white"
						aria-hidden="true" /></router-link
			></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col mx-4 z-0">
				<JobListingFilter>
					<template #filter-one
						><JobListingFilterItemSelected text="Location"
					/></template>
					<template #filter-two
						><JobListingFilterItem text="One-time"
					/></template>
					<template #filter-three
						><JobListingFilterItem text="Recurring"
					/></template>
					<template #filter-four
						><JobListingFilterItem text="[filter type]"
					/></template>
				</JobListingFilter>

				<div class="flex flex-col py-6">
					<h4 class="text-header-four font-semibold antialiased mb-2">
						This week's promotions
					</h4>
					<p class="font-light antialiased">
						Locations you can earn more this week
					</p>
				</div>

				<div class="mb-10">
					<PromotionsCard
						badge-text="Recurring"
						badge-svg="./assets/svg/badges/lock.svg"
						badge-class="bg-green-500 text-purple-900 w-28"
						user="Almera: 7 days left"
					/>
					<PromotionsCard
						background-color="bg-lilac-50"
						badge-text="Recurring"
						badge-class="bg-lilac-50 text-purple-900 w-28"
						user="Utretch: 2 days left"
					>
						<template #promotionalHeader>+€2/hr</template>
					</PromotionsCard>
					<PromotionsCard
						background-color="bg-lilac-100"
						badge-text="Recurring"
						badge-svg="./assets/svg/badges/event.svg"
						badge-class="bg-lilac-100 text-purple-900 w-28"
						user="Almera: 7 days left"
					/>
				</div>
			</div>
		</main>
		<!--
			PART TWO OF THREE
			I've wrapped the pop-up around a <section> HTML tag below for ease of separation of code for you
		-->
		<section>
			<div
				class="absolute inset-x-0 bottom-0 h-3/4 z-index-10 w-full rounded-t-30px bg-white border border-gray-500 px-4 pt-6"
			>
				<TopNavigation background-color="bg-white">
					<template #iconRight
						><router-link to="/dashboard?tab=1"
							><XIcon
								class="w-8 h-8 text-purple-900"
								aria-hidden="true" /></router-link
					></template>
				</TopNavigation>
				<div class="flex flex-col">
					<!--
						PART THREE OF THREE
						The below DOM will naturally vary depending on what is been displayed, whereas everything above is by and large necessary
					-->
					<div
						class="flex flex-col justify-center items-center my-10"
					>
						<ImageComponent
							class="w-44 h-44"
							src="./assets/svg/mail/mail.svg"
							alt=""
						/>
					</div>
					<h2 class="text-header-two font-semibold antialiased mb-6">
						Earn (+€2/hr)
					</h2>
					<p class="font-light antialiased">
						You can earn more on One time bookings placed in this
						area. Complete a booking here to earn a reward.
					</p>

					<div
						class="flex flex-col justify-center items-center mt-32"
					>
						<ButtonPrimary
							text="Apply to bookings"
							classes="w-button-lg text-xl py-4"
						/>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation-and-tabs/TopNavigation.vue'
import ImageComponent from '../../../../../../components/dom-elements/ImageComponent.vue'

import JobListingFilter from '../../../../../../components/filter/JobListingFilter.vue'
import JobListingFilterItem from '../../../../../../components/filter/JobListingFilterItem.vue'
import JobListingFilterItemSelected from '../../../../../../components/filter/JobListingFilterItemSelected.vue'

import PromotionsCard from '../../../../../../components/cards/promotions-card/PromotionsCard.vue'
import ButtonPrimary from '../../../../../../components/buttons/ButtonPrimary.vue'

import { ChevronLeftIcon, XIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		ImageComponent,
		JobListingFilter,
		JobListingFilterItem,
		JobListingFilterItemSelected,
		PromotionsCard,
		ButtonPrimary,
		ChevronLeftIcon,
		XIcon,
	},
}
</script>

<template>
	<div class="w-full">
		<TopNavigation backgroundColor="bg-white" :displayBorderBottom="true" headerColor="text-purple-900" text="Request Overview">
			<template #iconLeft><router-link to="/dashboard?tab=3"><ChevronLeftIcon class="w-8 h-8 text-purple-900" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="h-full pt-12 pb-28 mx-4">
				<h5 class="text-header-five font-semibold antialiased mb-10">After School Sitter Needed For 2 days</h5>

				<EditToCareFor>
					<template #details><p>2 kids > 3yrs (M), 2yrs (F)</p></template>
				</EditToCareFor>

				<EditDate>
					<template #header>Start Date</template>
					<template #date>Wednesday, 31st November 2021</template>
					<template #time>15:00-17:00</template>
				</EditDate>

				<EditDate>
					<template #header>Other Date(s)</template>
					<template #date>Wednesday, 3rd December 2021</template>
					<template #time>18:00-21:00</template>
				</EditDate>

				<EditRequestNote />

				<EditPreferences />

				<EditPhotos  />
			</div>
			<section class="block fixed inset-x-0 w-full bottom-0 z-10 bg-white border-t border-gray">
				<FixedBottomPricingConfirmation anchorText="Invite">
					<template #topText><span class="text-2xl font-bold">&euro;13-15</span>/hr</template>
					<template #bottomText>2km away</template>
				</FixedBottomPricingConfirmation>
			</section>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation-and-tabs/TopNavigation.vue'
import EditToCareFor from '../../../../../../components/profile/edit/EditToCareFor.vue'
import EditDate from '../../../../../../components/profile/edit/EditDate.vue'
import EditRequestNote from '../../../../../../components/profile/edit/EditRequestNote.vue'
import EditPreferences from '../../../../../../components/profile/edit/EditPreferences.vue'
import EditPhotos from '../../../../../../components/profile/edit/EditPhotos.vue'
import FixedBottomPricingConfirmation from '../../../../../../components/content/fixed/FixedBottomPricingConfirmation.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		EditToCareFor,
		EditDate,
		EditRequestNote,
		EditPreferences,
		EditPhotos,
		FixedBottomPricingConfirmation,
		ChevronLeftIcon
	}
}
</script>
<template>
	<div class="w-full">
		<TopNavigation
			background-color="bg-white"
			:display-border-bottom="true"
			header-color="text-purple-900"
			text="Request Overview"
		>
			<template #iconLeft
				><router-link to="/dashboard?tab=3"
					><ChevronLeftIcon
						class="w-8 h-8 text-purple-900"
						aria-hidden="true" /></router-link
			></template>
		</TopNavigation>
		<main>
			<div class="h-full pt-12 mx-4">
				<h5 class="text-header-five font-semibold antialiased mb-10">
					After School Sitter Needed For 2 days
				</h5>

				<EditToCareFor>
					<template #details
						><p>2 kids > 3yrs (M), 2yrs (F)</p></template
					>
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

				<EditPhotos />
			</div>
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

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		EditToCareFor,
		EditDate,
		EditRequestNote,
		EditPreferences,
		EditPhotos,
		ChevronLeftIcon,
	},
}
</script>

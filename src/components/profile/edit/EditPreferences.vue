<template>
	<a
		href="#"
		:class="classes"
		class="flex flex-row border-t py-6 border-gray-50"
	>
		<div class="inline-flex grow">
			<div class="flex flex-col">
				<h5 class="text-header-five font-semibold antialiased">
					{{ title }}
				</h5>
				<div class="flex flex-wrap mt-4">
					<BadgeWithIcon text="Cooking"
						><template #icon><CakeIcon class="w-5 h-5" /></template
					></BadgeWithIcon>
					<BadgeWithIcon text="Biking"
						><template #icon
							><UserCircleIcon class="w-5 h-5" /></template
					></BadgeWithIcon>
					<BadgeWithIcon text="Dutch"
						><template #icon
							><ChatAlt2Icon class="w-5 h-5" /></template
					></BadgeWithIcon>
					<BadgeWithIcon text="Non-smoker"
						><template #icon
							><ArrowRightIcon class="w-5 h-5" /></template
					></BadgeWithIcon>
					<BadgeWithIcon text="Bathing"
						><template #icon
							><ArrowRightIcon class="w-5 h-5" /></template
					></BadgeWithIcon>
					<BadgeWithIcon text="Homework"
						><template #icon
							><ArrowRightIcon class="w-5 h-5" /></template
					></BadgeWithIcon>
					<BadgeWithIcon text="Housekeeping"
						><template #icon
							><ArrowRightIcon class="w-5 h-5" /></template
					></BadgeWithIcon>
					<BadgeWithIcon text="First Aid"
						><template #icon
							><ArrowRightIcon class="w-5 h-5" /></template
					></BadgeWithIcon>
					<BadgeWithIcon text="Available on short notice"
						><template #icon
							><ArrowRightIcon class="w-5 h-5" /></template
					></BadgeWithIcon>
					<BadgeWithIcon text="Pet Lover"
						><template #icon
							><ArrowRightIcon class="w-5 h-5" /></template
					></BadgeWithIcon>
				</div>
			</div>
		</div>
		<div class="flex w-8 justify-end items-center">
			<ChevronRightIcon
				class="w-8 h-8 text-purple-900"
				aria-hidden="true"
			/>
		</div>
	</a>
</template>

<script>
import BadgeWithIcon from '../../badge/BadgeWithIcon.vue'

import {
	ChevronRightIcon,
	CakeIcon,
	UserCircleIcon,
	ChatAlt2Icon,
	ArrowRightIcon,
} from '@heroicons/vue/solid'

export default {
	components: {
		BadgeWithIcon,
		ChevronRightIcon,
		CakeIcon,
		UserCircleIcon,
		ChatAlt2Icon,
		ArrowRightIcon,
	},
	props: {
		classes: {
			type: String,
			default: '',
		},
		title: {
			type: String,
			default: 'Preferences',
		},
	},
}
</script>

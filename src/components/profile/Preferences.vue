<template>
	<div :class="class" class="flex flex-col">
		<h5 class="text-header-five font-bold antialiased">{{ title }}</h5>
		<div class="flex flex-wrap mt-4">
			<Badge text="Cooking"><template #icon><CakeIcon class="w-5 h-5"/></template></Badge>
			<Badge text="Biking"><template #icon><UserCircleIcon class="w-5 h-5"/></template></Badge>
			<Badge text="Dutch"><template #icon><ChatAlt2Icon class="w-5 h-5"/></template></Badge>
			<Badge text="Non-smoker"><template #icon><ArrowRightIcon class="w-5 h-5"/></template></Badge>
			<Badge text="Bathing"><template #icon><ArrowRightIcon class="w-5 h-5"/></template></Badge>
			<Badge text="Homework"><template #icon><ArrowRightIcon class="w-5 h-5"/></template></Badge>
			<Badge text="Housekeeping"><template #icon><ArrowRightIcon class="w-5 h-5"/></template></Badge>
			<Badge text="First Aid"><template #icon><ArrowRightIcon class="w-5 h-5"/></template></Badge>
			<Badge text="Available on short notice"><template #icon><ArrowRightIcon class="w-5 h-5"/></template></Badge>
			<Badge text="Pet Lover"><template #icon><ArrowRightIcon class="w-5 h-5"/></template></Badge>
		</div>
	</div>
</template>

<script>
import Badge from '../badge/Badge.vue'

import { CakeIcon, UserCircleIcon, ChatAlt2Icon, ArrowRightIcon } from '@heroicons/vue/solid'

export default {
	components: {
		Badge,
		CakeIcon,
		UserCircleIcon,
		ChatAlt2Icon,
		ArrowRightIcon
	},
	props: {
		class: String,
		title: {
			type: String,
			default: 'Preferences'
		}
	}
}
</script>
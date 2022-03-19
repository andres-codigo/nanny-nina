<template>
	<div class="w-full h-full">
		<TopNavigation routerLinkPath="/dashboard" backgroundColor="bg-white" iconColor="text-black" headerColor="text-black" text="New Request">
			<DotsVerticalIcon class="w-6 h-6 text-black" aria-hidden="true" />
		</TopNavigation>
		<main>
			<div class="h-screen flex flex-col mx-4">

			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation/TopNavigation.vue'
import { DotsVerticalIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		DotsVerticalIcon
	}
}
</script>

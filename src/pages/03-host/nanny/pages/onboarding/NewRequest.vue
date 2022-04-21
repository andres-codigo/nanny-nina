<!-- TODO: hover, focus for LinkCard's -->
<template>
	<div class="w-full h-full">
		<TopNavigation backgroundColor="bg-white-500" :dropShadow="false">
			<template #iconRight><router-link to="/dashboard"><XIcon class="w-8 h-8 text-purple-900" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col justify-center pt-12 mx-4">
				<h5 class="text-left text-header-five font-semibold antialiased mb-4">What kind of nanny do you want?</h5>
				<div class="inline-flex pb-8">
					<LinkCard to="dashboard" class="text-white bg-purple-500 hover:bg-purple-300 focus:bg-purple-400" title="One-time">
						<template #details><p class="text-white pt-2">Urgent nanny for single or multiple days. Maximum 12days </p></template>
					</LinkCard>
				</div>
				<div class="inline-flex pb-8">
					<LinkCard to="dashboard" class="text-purple-900 bg-green-500 hover:bg-green-300 focus:bg-green-400" title="Recurring" >
						<template #details><p class="pt-2">I need a nanny on returning days over a longer period</p></template>
					</LinkCard>
				</div>
				<div class="inline-flex">
					<LinkCard to="dashboard" class="text-purple-900 bg-lilac-50 hover:bg-lilac-100 focus:bg-lilac-200" title="Event" >
						<template #details><p class="pt-2">Book a nanny for birthday, wedding &amp; other special occasions</p></template>
					</LinkCard>
				</div>

				<div class="flex flex-col justify-center items-center my-4">
					<a href="#" target="_self" class="anchor-with-underline text-blue-500 text-center font-medium">Learn more about Nannies</a>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation/TopNavigation.vue'
import LinkCard from '../../../../../components/cards/link-card/LinkCard.vue'
import ButtonOutlineDark from '../../../../../components/buttons/ButtonOutlineDark.vue'
import ButtonPrimary from '../../../../../components/buttons/ButtonPrimary.vue'

import { XIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		LinkCard,
		ButtonOutlineDark,
		ButtonPrimary,
		XIcon
	}
}
</script>
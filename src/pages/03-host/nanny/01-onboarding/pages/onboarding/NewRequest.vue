<template>
	<div class="w-full h-full">
		<TopNavigation :display-border-bottom="false">
			<template #iconRight
				><router-link to="/dashboard?tab=3"
					><XIcon
						class="w-8 h-8 text-white"
						aria-hidden="true" /></router-link
			></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col justify-center pt-12 mx-4">
				<h5 class="text-header-five font-semibold antialiased mb-4">
					What kind of nanny do you want?
				</h5>
				<div class="inline-flex pb-8">
					<LinkCard
						to="dashboard"
						classes="text-purple-900 bg-lilac-50 hover:shadow-lg hover:shadow-gray-50 focus:bg-lilac-200"
						title="One-time"
					>
						<template #details
							><p>
								Urgent nanny for single or multiple days.
								Maximum 12days
							</p></template
						>
					</LinkCard>
				</div>
				<div class="inline-flex pb-8">
					<LinkCard
						:show-placeholder-s-v-g="true"
						to="dashboard"
						classes="text-purple-900 bg-green-500 hover:shadow-lg hover:shadow-gray-50 focus:bg-green-600"
						title="Recurring"
					>
						<template #details
							><p class="pr-24">
								I need a nanny on returning days over a longer
								period
							</p></template
						>
					</LinkCard>
				</div>
				<div class="inline-flex">
					<LinkCard
						to="dashboard"
						classes="text-white bg-purple-500 hover:shadow-lg hover:shadow-gray-50 focus:bg-purple-600"
						title="Event"
					>
						<template #details
							><p class="text-white pr-24">
								Book a nanny for birthday, wedding &amp; other
								special occasions
							</p></template
						>
					</LinkCard>
				</div>

				<div class="flex flex-col justify-center items-center my-16">
					<a
						href="#"
						target="_self"
						class="anchor-blue anchor-with-underline text-center font-medium"
						>Learn more about Nannies</a
					>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation-and-tabs/TopNavigation.vue'
import LinkCard from '../../../../../../components/cards/link-card/LinkCard.vue'
import { XIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		LinkCard,
		XIcon,
	},
}
</script>

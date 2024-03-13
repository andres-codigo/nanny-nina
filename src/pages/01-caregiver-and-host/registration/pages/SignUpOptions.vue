<!-- TODO: hover, focus for LinkCard's -->
<template>
	<div>
		<TopNavigation
			background-color="bg-white"
			:display-border-bottom="false"
		>
			<template #iconRight
				><router-link to="/dashboard?tab=1"
					><XIcon
						class="w-8 h-8 text-purple-900"
						aria-hidden="true" /></router-link
			></template>
		</TopNavigation>
		<main>
			<div class="min-h-screen flex flex-col justify-center pt-12 mx-4">
				<h5 class="text-header-five font-semibold antialiased mb-2">
					Welcome to Nanny Nina
				</h5>
				<div class="inline-flex pb-8">
					<LinkCard
						to="dashboard"
						classes="text-purple-900 bg-green-500 hover:shadow-lg hover:shadow-gray-50 focus:bg-green-600"
						title="Sign up as Parent/Host"
					>
						<template #details
							><p>
								Request Nanny, Childminder or Au pair
							</p></template
						>
					</LinkCard>
				</div>
				<div class="inline-flex pb-8">
					<LinkCard
						to="dashboard"
						classes="text-white bg-purple-500 hover:shadow-lg hover:shadow-gray-300 focus:bg-purple-600"
						title="Sign up for Care jobs"
					>
						<template #details
							><p class="text-white">
								Work as Nanny, Childminder or Au pair
							</p></template
						>
					</LinkCard>
				</div>
				<div class="inline-flex items-center justify-center">
					<span class="mr-2">Already have an account?</span>
					<ButtonOutlineDark
						text="Sign In"
						classes="text-base w-button-xs py-1"
					/>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../components/navigation-and-tabs/TopNavigation.vue'
import LinkCard from '../../../../components/cards/link-card/LinkCard.vue'
import ButtonOutlineDark from '../../../../components/buttons/ButtonOutlineDark.vue'

import { XIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		LinkCard,
		ButtonOutlineDark,
		XIcon,
	},
}
</script>

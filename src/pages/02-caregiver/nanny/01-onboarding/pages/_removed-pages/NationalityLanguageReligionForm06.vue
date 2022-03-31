<template>
	<div class="w-full h-full">
		<TopNavigation text="Nanny Form">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col pt-6 mx-4">
				<form class="w-full" action="#" method="POST">
					<h5 class="text-left text-header-five text-gray-900 font-semibold antialiased my-6">Let's get to know you better</h5>

					<div class="mt-4 mb-8">
						<h5 class="text-header-five font-semibold antialiased">Where are you from?</h5>
						<div class="mt-4 grid grid-cols-2 gap-y-6 gap-x-2">
							<div><SelectMenu text="Nationality" /></div>
						</div>
					</div>

					<div class="my-16">
						<h5 class="text-header-five font-semibold antialiased">Language</h5>
						<div class="mt-4 grid grid-cols-2 gap-y-6 gap-x-2">
							<div><SelectMenu text="Language(s)" /></div>
							<div class="flex flex-wrap justify-center items-center mt-4">
								<BadgeRemove text="Dutch" />
								<BadgeRemove text="English" />
								<BadgeRemove text="Portuguese" />
								<BadgeRemove text="Irish" />
							</div>
						</div>
					</div>

					<div class="mt-16 mb-24">
						<h5 class="text-header-five font-semibold antialiased">What is your religion?</h5>
						<div class="mt-4 grid grid-cols-2 gap-y-6 gap-x-2">
							<div><SelectMenu text="Religion" /></div>
						</div>
					</div>

					<div class="flex flex-col justify-center items-center mt-10">
						<ButtonPrimary text="Next" class="w-button-lg text-xl py-4" />
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation/TopNavigation.vue'
import SelectMenu from '../../../../../../components/form/SelectMenu.vue'
import BadgeRemove from '../../../../../../components/badge/BadgeRemove.vue'
import ButtonPrimary from '../../../../../../components/buttons/ButtonPrimary.vue'

import { ChevronLeftIcon, XCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		SelectMenu,
		BadgeRemove,
		ButtonPrimary,
		ChevronLeftIcon,
		XCircleIcon
	}
}
</script>
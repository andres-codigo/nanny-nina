<template>
	<div>
		<TopNavigation backgroundColor="bg-lilac-100" :displayBorderBottom="false">
			<template #iconRight><router-link to="/dashboard?tab=1"><XIcon class="w-8 h-8 text-purple-900" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="min-h-screen flex flex-col justify-center px-4 bg-lilac-100">
				<div class="flex justify-center h-48">
					<!--
						Image svg here
						<img src="*.svg" />
						* remove background color in div as visual placeholder
					-->
				</div>

				<div class="pt-6">
					<Badge title="Don't miss out on goodies" backgroundColor="bg-green-50" textColor="text-purple-900" />
				</div>

				<div class="pt-6">
					<Header title="Earn  even more" />
					<Header title="&euro; &euro; &euro;" />
					<Paragraph content="Get even more with higher demands, in-app rewards and r referrals" />
				</div>

				<div class="inline-flex justify-center space-x-5 pt-10">
					<NavigationDot backgroundColor="bg-purple-500 ring-8 ring-lilac-300" />
					<NavigationDot backgroundColor="bg-lilac-300" backgroundColorHover="hover:bg-purple-500 hover:ring-8 hover:ring-lilac-300" />
					<NavigationDot backgroundColor="bg-lilac-300" backgroundColorHover="hover:bg-purple-500 hover:ring-8 hover:ring-lilac-300" />
					<NavigationDot backgroundColor="bg-lilac-300" backgroundColorHover="hover:bg-purple-500 hover:ring-8 hover:ring-lilac-300" />
				</div>

				<div class="flex flex-col justify-center items-center pt-20 pb-24 px-4">
					<ButtonPrimary text="Next" class="w-button-lg text-xl py-4" />
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import Badge from '../../../../../components/carousel/Badge.vue'
import Header from '../../../../../components/carousel/Header.vue'
import Paragraph from '../../../../../components/carousel/Paragraph.vue'
import NavigationDot from '../../../../../components/carousel/NavigationDot.vue'
import ButtonPrimary from '../../../../../components/buttons/ButtonPrimary.vue'

import { XIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Badge,
		Header,
		Paragraph,
		NavigationDot,
		ButtonPrimary,
		XIcon
	}
}
</script>
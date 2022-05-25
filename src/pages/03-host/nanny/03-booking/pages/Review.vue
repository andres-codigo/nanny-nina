<template>
	<div class="w-full h-full">
		<TopNavigation :displayBorderBottom="false">
			<template #iconRight><router-link to="/dashboard?tab=3"><Img src="./assets/svg/ticks-and-crosses/cross-remove-white.svg" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col pt-12 mx-4">
				<form class="w-full" action="#" method="POST">
					<Img class="rounded-full h-16 w-16 mb-4" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="" />
					<h5 class="text-header-five font-semibold antialiased mb-2">Leave a tip for Brittany</h5>
					<p class="font-thin mb-4">Do you want to reward Brittany for her service?</p>

					<div class="flex flex-wrap gap-x-0 justify-center mt-4">
						<!--
							The hover and active/focus images are the same as I only have what you
							see to go on; eventually, all three states for each type of image will need
							to be provided
						-->
						<BadgeProfileDynamic :isTipPage="true" defaultImage="./assets/svg/tip/small.svg" hoverImage="./assets/svg/tip/small.svg" activeFocusImage="./assets/svg/tip/small.svg">
							<template #title>&euro;2</template>
						</BadgeProfileDynamic>
						<BadgeProfileDynamic :isTipPage="true" defaultImage="./assets/svg/tip/medium.svg" hoverImage="./assets/svg/tip/medium.svg" activeFocusImage="./assets/svg/tip/medium.svg">
							<template #title>&euro;5</template>
						</BadgeProfileDynamic>
						<BadgeProfileDynamic :isTipPage="true" defaultImage="./assets/svg/tip/high.svg" hoverImage="./assets/svg/tip/high.svg" activeFocusImage="./assets/svg/tip/high.svg">
							<template #title>&euro;10</template>
						</BadgeProfileDynamic>
						<BadgeProfileDynamic :isTipPage="true" defaultImage="./assets/svg/tip/other.svg" hoverImage="./assets/svg/tip/other.svg" activeFocusImage="./assets/svg/tip/other.svg">
							<template #title>Other</template>
						</BadgeProfileDynamic>
					</div>

					<div class="mt-16">
						<p class="font-thin mt-8 mb-4">Leave a message</p>
						<InputFieldBorderBottomOnly type="text" />
					</div>

					<div class="flex flex-col items-center mt-40 mb-8">
						<div><ButtonPrimary text="Submit" class="w-button-sm text-xl py-4" /></div>
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import Img from '../../../../../components/dom-elements/Img.vue'
import BadgeProfileDynamic from '../../../../../components/badge/BadgeProfileDynamic.vue'
import InputFieldBorderBottomOnly from '../../../../../components/form/InputFieldBorderBottomOnly.vue'
import ButtonPrimary from '../../../../../components/buttons/ButtonPrimary.vue'

import { XIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Img,
		BadgeProfileDynamic,
		InputFieldBorderBottomOnly,
		ButtonPrimary,
		XIcon
	}
}
</script>
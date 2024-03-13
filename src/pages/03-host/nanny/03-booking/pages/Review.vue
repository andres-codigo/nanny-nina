<template>
	<div class="w-full h-full">
		<TopNavigation :display-border-bottom="false">
			<template #iconRight
				><router-link to="/dashboard?tab=3"
					><ImageComponent
						src="./assets/svg/ticks-and-crosses/cross-remove-white.svg" /></router-link
			></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col pt-12 mx-4">
				<form class="w-full" action="#" method="POST">
					<ImageComponent
						class="rounded-full h-16 w-16 mb-4"
						src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
						alt=""
					/>
					<h5 class="text-header-five font-semibold antialiased mb-2">
						Leave a tip for Brittany
					</h5>
					<p class="font-thin mb-4">
						Do you want to reward Brittany for her service?
					</p>

					<div class="flex flex-wrap gap-x-0 justify-center mt-4">
						<!--
							The hover and active/focus images are the same as I only have what you
							see to go on; eventually, all three states for each type of image will need
							to be provided
						-->
						<BadgeProfileDynamic
							:is-tip-page="true"
							default-image="./assets/svg/tip/small.svg"
							hover-image="./assets/svg/tip/small.svg"
							active-focus-image="./assets/svg/tip/small.svg"
						>
							<template #title>&euro;2</template>
						</BadgeProfileDynamic>
						<BadgeProfileDynamic
							:is-tip-page="true"
							default-image="./assets/svg/tip/medium.svg"
							hover-image="./assets/svg/tip/medium.svg"
							active-focus-image="./assets/svg/tip/medium.svg"
						>
							<template #title>&euro;5</template>
						</BadgeProfileDynamic>
						<BadgeProfileDynamic
							:is-tip-page="true"
							default-image="./assets/svg/tip/high.svg"
							hover-image="./assets/svg/tip/high.svg"
							active-focus-image="./assets/svg/tip/high.svg"
						>
							<template #title>&euro;10</template>
						</BadgeProfileDynamic>
						<BadgeProfileDynamic
							:is-tip-page="true"
							default-image="./assets/svg/tip/other.svg"
							hover-image="./assets/svg/tip/other.svg"
							active-focus-image="./assets/svg/tip/other.svg"
						>
							<template #title>Other</template>
						</BadgeProfileDynamic>
					</div>

					<div class="mt-16">
						<p class="font-thin mt-8 mb-4">Leave a message</p>
						<InputFieldBorderBottomOnly type="text" />
					</div>

					<div class="flex flex-col items-center mt-40 mb-8">
						<div>
							<ButtonPrimary
								text="Submit"
								classes="w-button-sm text-xl py-4"
							/>
						</div>
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import ImageComponent from '../../../../../components/dom-elements/ImageComponent.vue'
import BadgeProfileDynamic from '../../../../../components/badge/BadgeProfileDynamic.vue'
import InputFieldBorderBottomOnly from '../../../../../components/form/InputFieldBorderBottomOnly.vue'
import ButtonPrimary from '../../../../../components/buttons/ButtonPrimary.vue'

export default {
	components: {
		TopNavigation,
		ImageComponent,
		BadgeProfileDynamic,
		InputFieldBorderBottomOnly,
		ButtonPrimary,
	},
}
</script>

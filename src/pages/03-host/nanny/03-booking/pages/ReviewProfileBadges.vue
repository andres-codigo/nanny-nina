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
				<h5 class="text-header-five font-semibold antialiased mb-2">
					Brittany's Badges (6)
				</h5>
				<p class="font-thin mb-4">
					This is what other parents thought of Brittany
				</p>

				<div class="flex flex-wrap gap-x-7 mt-4">
					<BadgeProfileStatic>
						<template #image
							><ImageComponent
								src="./assets/svg/badges/playful-active-focus.svg"
						/></template>
					</BadgeProfileStatic>
					<BadgeProfileStatic />
					<BadgeProfileStatic />
					<BadgeProfileStatic />
					<BadgeProfileStatic />
					<BadgeProfileStatic />
				</div>

				<div class="flex flex-col items-center mt-40 mb-8">
					<div>
						<AnchorPrimary
							text="Got It"
							classes="w-button-sm text-xl py-4"
						/>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import BadgeProfileStatic from '../../../../../components/badge/BadgeProfileStatic.vue'
import ImageComponent from '../../../../../components/dom-elements/ImageComponent.vue'
import AnchorPrimary from '../../../../../components/dom-elements/AnchorPrimary.vue'

export default {
	components: {
		TopNavigation,
		BadgeProfileStatic,
		ImageComponent,
		AnchorPrimary,
	},
}
</script>

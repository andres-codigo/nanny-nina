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
					<BadgeProfileDynamic />
					<BadgeProfileDynamic />
					<BadgeProfileDynamic />
					<BadgeProfileDynamic />
					<BadgeProfileDynamic />
					<BadgeProfileDynamic />
					<BadgeProfileDynamic />
					<BadgeProfileDynamic />
					<BadgeProfileDynamic />
					<BadgeProfileDynamic />
					<BadgeProfileDynamic />
					<BadgeProfileDynamic />
				</div>

				<div class="flex flex-col items-center my-20">
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
import BadgeProfileDynamic from '../../../../../components/badge/BadgeProfileDynamic.vue'
import ImageComponent from '../../../../../components/dom-elements/ImageComponent.vue'
import AnchorPrimary from '../../../../../components/dom-elements/AnchorPrimary.vue'

export default {
	components: {
		TopNavigation,
		BadgeProfileDynamic,
		ImageComponent,
		AnchorPrimary,
	},
}
</script>

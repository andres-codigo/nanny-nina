<template>
	<div class="w-full h-full bg-lilac-500">
		<TopNavigation routerLinkPath="/dashboard" :hideHeader="true" />
		<main>
			<div class="h-screen flex flex-col mx-4">
				<div class="mt-16 mx-9">
					<h2 class="mb-6 text-header-two font-medium text-green-500 text-center">Let's help you find the perfect jobs for you</h2>
					<p class="font-thin text-white text-center">Let's know your personal preferences </p>
				</div>
				<div class="flex items-center justify-center">
					<!--
						Image component for svg here
						<Image src="*.svg" />
					-->
				</div>

				<div class="mt-96">
					<ButtonSecondary text="Get Started" />
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation/TopNavigation.vue'
import ButtonSecondary from '../../../../../../components/buttons/ButtonSecondary.vue'

export default {
	components: {
		TopNavigation,
		ButtonSecondary
	}
}
</script>
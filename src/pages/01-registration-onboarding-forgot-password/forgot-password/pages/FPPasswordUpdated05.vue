<template>
	<div class="h-screen">
		<TopNavigation backgroundColor="bg-white" :dropShadow="false">
			<template #iconLeft><Header /></template>
		</TopNavigation>
		<main>
			<div class="min-h-full flex flex-col justify-center mt-20 mx-4">
				<form class="w-full" action="#" method="POST">
					<div class="mt-6">
						<h4 class="text-left text-header-four text-gray-900">Password Updated!</h4>
						<p class="mt-6 text-sm font-light">Your password has been updated!</p>
					</div>

					<div class="h-28">&nbsp;</div>

					<div class="grid grid-rows-1">
						<div><ButtonPrimary text="Login" /></div>
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../components/navigation/TopNavigation.vue'
import Header from '../../../../components/header/Header.vue'
import ButtonPrimary from '../../../../components/buttons/ButtonPrimary.vue'

export default {
	components: {
		TopNavigation,
		Header,
		ButtonPrimary
	}
}
</script>
<template>
	<div class="h-screen">
		<TopNavigation backgroundColor="bg-white" :dropShadow="false">
			<template #iconLeft><Header /></template>
		</TopNavigation>
		<main>
			<div class="min-h-full flex flex-col justify-center mt-20 mx-4">
				<form class="w-full" action="#" method="POST">
					<div class="mt-6">
						<h4 class="text-left text-header-four text-gray-900">Oops! Link Expired</h4>
						<p class="mt-6 text-sm font-light">Your link has expired because you haven't used it in 24 hours.  You can create another link by clicking the button below.</p>
					</div>

					<div class="mt-14 h-40">&nbsp;</div>

					<div class="grid grid-rows-2 gap-2">
						<div><ButtonPrimary text="Request Link" /></div>
						<div><ButtonGhost text="Cancel" /></div>
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
import ButtonGhost from '../../../../components/buttons/ButtonGhost.vue'

export default {
	components: {
		TopNavigation,
		Header,
		ButtonPrimary,
		ButtonGhost
	}
}
</script>
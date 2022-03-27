<template>
	<div>
		<TopNavigation backgroundColor="bg-white" :dropShadow="false">
			<template #iconLeft><Header /></template>
		</TopNavigation>
		<main>
			<div class="h-screen flex flex-col items-center justify-center mx-4">
				<form class="w-full" action="#" method="POST">
					<div class="grid grid-rows-3 grid-flow-col gap-0">
						<div>
							<div class="grid grid-rows-2 gap-0">
								<div><h4 class="mb-6 text-center  text-header-four font-semibold">Password Updated!</h4></div>
								<div><p class="text-center font-light">Your password has been updated!</p></div>
							</div>
						</div>
						<div class="flex flex-col justify-center items-center">
							<Mail class="w-44 h-44" />
						</div>
						<div class="flex flex-col justify-center items-center">
							<div class="grid grid-rows-1 gap-0">
								<div><ButtonPrimary text="Continue to Login" class="w-button-lg py-4 mt-20" /></div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../components/navigation/TopNavigation.vue'
import Header from '../../../../components/header/Header.vue'
import Mail from '../../../../assets/svg/mail/mail.vue'
import ButtonPrimary from '../../../../components/buttons/ButtonPrimary.vue'

export default {
	components: {
		TopNavigation,
		Header,
		Mail,
		ButtonPrimary
	}
}
</script>
<template>
	<div>
		<TopNavigation
			background-color="bg-white"
			:display-border-bottom="false"
		>
			<template #iconLeft><HeaderLogo class="mx-5 mt-8" /></template>
		</TopNavigation>
		<main>
			<div
				class="h-screen flex flex-col items-center justify-center mx-4"
			>
				<form class="w-full" action="#" method="POST">
					<div class="grid grid-rows-3 grid-flow-col gap-0">
						<div>
							<div class="grid grid-rows-2 gap-0">
								<div>
									<h4
										class="text-center text-header-four font-semibold antialiased mb-6"
									>
										Password Updated!
									</h4>
								</div>
								<div>
									<p class="text-center font-light">
										Your password has been updated!
									</p>
								</div>
							</div>
						</div>
						<div class="flex flex-col justify-center items-center">
							<ImageComponent
								class="w-44 h-44"
								src="./assets/svg/mail/mail.svg"
								alt=""
							/>
						</div>
						<div class="flex flex-col justify-center items-center">
							<div class="grid grid-rows-1 gap-0">
								<div>
									<ButtonPrimary
										text="Continue to Login"
										classes="w-button-lg text-xl py-4 mt-20"
									/>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../components/navigation-and-tabs/TopNavigation.vue'
import HeaderLogo from '../../../../components/content/logos/HeaderLogo.vue'
import ImageComponent from '../../../../components/dom-elements/ImageComponent.vue'
import ButtonPrimary from '../../../../components/buttons/ButtonPrimary.vue'

export default {
	components: {
		TopNavigation,
		HeaderLogo,
		ImageComponent,
		ButtonPrimary,
	},
}
</script>

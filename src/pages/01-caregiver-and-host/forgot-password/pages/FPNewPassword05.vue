<template>
	<div>
		<TopNavigation
			background-color="bg-white"
			:display-border-bottom="false"
		>
			<template #iconLeft><HeaderLogo class="mx-5 mt-8" /></template>
		</TopNavigation>
		<main>
			<div class="h-screen mt-20 mx-4">
				<form class="w-full" action="#" method="POST">
					<div class="mt-6">
						<h4 class="text-header-four font-semibold antialiased">
							Enter New Password
						</h4>
					</div>

					<div class="grid grid-rows-2 gap-2 mt-14 mb-20">
						<div class="mb-8">
							<InputField
								text="New Password"
								type="password"
								value="newpassword"
							/>
						</div>
						<div>
							<InputField text="Retype Password" type="text" />
						</div>
					</div>

					<div class="flex flex-col justify-center items-center">
						<div class="grid grid-rows-2 gap-2">
							<div>
								<ButtonPrimary
									text="Change Password"
									classes="w-button-lg text-xl py-4"
								/>
							</div>
							<div><ButtonGhost text="Cancel" /></div>
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
import ButtonPrimary from '../../../../components/buttons/ButtonPrimary.vue'
import ButtonGhost from '../../../../components/buttons/ButtonGhost.vue'
import InputField from '../../../../components/form/InputField.vue'

export default {
	components: {
		TopNavigation,
		HeaderLogo,
		ButtonPrimary,
		ButtonGhost,
		InputField,
	},
}
</script>

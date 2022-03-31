<template>
	<div>
		<TopNavigation backgroundColor="bg-white" :dropShadow="false">
			<template #iconLeft><Header class="mx-5 mt-8" /></template>
		</TopNavigation>
		<main>
			<div class="h-screen mt-20 mx-4">
				<form class="w-full" action="#" method="POST">
					<div class="mt-6">
						<h4 class="text-left text-header-four text-gray-900 antialiased">Enter New Password</h4>
					</div>

					<div class="grid grid-rows-2 gap-2 mt-14 mb-20">
						<div class="mb-8"><InputField text="New Password" type="password" value="newpassword" /></div>
						<div><InputField text="Retype Password" type="text" /></div>
					</div>

					<div class="flex flex-col justify-center items-center">
						<div class="grid grid-rows-2 gap-2">
							<div><ButtonPrimary text="Change Password" class="w-button-lg text-xl py-4" /></div>
							<div><ButtonGhost text="Cancel" /></div>
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
import ButtonPrimary from '../../../../components/buttons/ButtonPrimary.vue'
import ButtonGhost from '../../../../components/buttons/ButtonGhost.vue'
import InputField from '../../../../components/form/InputField.vue'

export default {
	components: {
		TopNavigation,
		Header,
		ButtonPrimary,
		ButtonGhost,
		InputField
	}
}
</script>
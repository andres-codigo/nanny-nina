<template>
	<div class="h-screen">
		<TopNavigation backgroundColor="bg-white" :dropShadow="false">
			<template #iconLeft><Header /></template>
		</TopNavigation>
		<main>
			<div class="min-h-full flex flex-col justify-center mt-20 mx-4">
				<form class="w-full" action="#" method="POST">
					<div class="mt-6">
						<h4 class="text-left text-header-four text-gray-900">Enter New Password</h4>
					</div>

					<div class="grid grid-rows-2 gap-2 mt-14 mb-20">
						<div class="mb-8"><InputField text="New Password" type="password" value="newpassword" /></div>
						<div><InputField text="Retype Password" type="text" /></div>
					</div>

					<div class="grid grid-rows-2 gap-2">
						<div><ButtonPrimary text="Change Password" /></div>
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
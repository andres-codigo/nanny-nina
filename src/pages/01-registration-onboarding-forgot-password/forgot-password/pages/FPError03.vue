<template>
	<div>
		<TopNavigation backgroundColor="bg-white" :dropShadow="false">
			<template #iconLeft><Header class="mx-5 mt-8" /></template>
		</TopNavigation>
		<main>
			<div class="h-screen mt-20 mx-4">
				<form class="w-full" action="#" method="POST">
					<div class="mt-6">
						<h4 class="text-left text-header-four text-gray-900 antialiased">Forgot Password</h4>
						<p class="mt-6 text-sm font-light">Please enter your registered email, you will receive an email with a verification code to reset your password.</p>
					</div>

					<div class="mt-14 h-40">
						<label for="email" class="block text-xs font-light text-gray-700 pl-4">Email Address</label>
						<div class="mt-1">
							<input
								type="email"
								name="email"
								id="email"
								class="
									appearance-none block w-full
									px-3 py-2
									border border-red-500 text-black rounded-full shadow-sm
									placeholder-red-500
									focus:outline-none focus:ring-0 focus:border-red-500"
								placeholder="you@example.com"
								value="adamwathan"
								aria-invalid="true"
								aria-describedby="email-error"
							>
						</div>
						<p class="mt-2 text-sm text-red-500 pl-4" id="email-error">The email address you have entered is incorrect</p>
					</div>

					<div class="flex flex-col justify-center items-center">
						<div class="grid grid-rows-2 gap-2">
							<div><ButtonDisabled text="Request Link" class="w-button-lg text-xl py-4" /></div>
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
import ButtonDisabled from '../../../../components/buttons/ButtonDisabled.vue'
import ButtonGhost from '../../../../components/buttons/ButtonGhost.vue'

export default {
	components: {
		TopNavigation,
		Header,
		ButtonDisabled,
		ButtonGhost
	}
}
</script>
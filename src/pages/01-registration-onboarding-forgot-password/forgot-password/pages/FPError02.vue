<template>
	<div class="bg-white">
		<Header />
		<main>
			<div class="min-h-full flex flex-col justify-center py-12 mx-4 mt-8">
				<h4 class="my-6 text-left text-header-four font-normal text-gray-900">Forgot Password</h4>
				<p class="mb-4 h-20 text-sm font-light">Please enter your registered email, you will receive an email with a verification code to reset your password.</p>
				<form action="#" method="POST">
					<div class="m-0 h-28">
						<label for="email" class="block text-sm font-light text-gray-700 pl-4">Email Address</label>
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
									focus:outline-none focus:ring-0 focus:ring-red-500 focus:border-red-500"
								placeholder="you@example.com"
								value="adamwathan"
								aria-invalid="true"
								aria-describedby="email-error"
							>
						</div>
						<p class="mt-2 text-sm text-red-500 pl-4" id="email-error">The email address you have entered is incorrect</p>
					</div>

					<div class="mt-10">
						<div class="my-6">
							<ButtonPrimary text="Request Link" />
						</div>

						<div class="flex items-center justify-center">
							<ButtonGhost text="Cancel" />
						</div>
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import Header from '../../../../components/header/Header.vue'
import ButtonPrimary from '../../../../components/buttons/ButtonPrimary.vue'
import ButtonGhost from '../../../../components/buttons/ButtonGhost.vue'

export default {
	components: {
		Header,
		ButtonPrimary,
		ButtonGhost
	}
}
</script>
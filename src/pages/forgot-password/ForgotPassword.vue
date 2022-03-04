<script setup>
import Header from '../../components/header/Header.vue'
import ButtonIndigo from '../../components/form/ButtonIndigo.vue'
import Google from '../../assets/svg/other/google.vue'
</script>

<template>
	<div class="w-screen h-screen">
		<Header />
		<main>
			<div class="min-h-full flex flex-col justify-center py-12 mx-10 mt-8">
				<h2 class="my-4 text-left text-2xl font-normal text-gray-900">Forgot Password</h2>
				<p class="font-light text-sm">Please enter your registered email, you will receive an email with a verification code to reset your password.</p>
				<form class="mt-10" action="#" method="POST">
					<div>
						<label for="email" class="block text-sm font-light text-gray-700 pl-4">Email address</label>
						<div class="mt-1">
							<input id="email" name="email" type="email" autocomplete="email" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
						</div>
					</div>

					<div class="mt-14">
						<div class="my-6">
							<ButtonIndigo text="Request Link" />
						</div>

						<div class="flex items-center justify-center">
							<div class="text-sm">
								<a href="#" class="text-lg font-medium underline hover:no-underline">Cancel</a>
							</div>
						</div>
					</div>
				</form>
			</div>
		</main>
	</div>
</template>
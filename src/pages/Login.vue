<script setup>
import Google from '../assets/svg/other/google.vue'
</script>

<template>
	<div class="min-h-full flex flex-col justify-center py-12 mx-10 mt-8">
		<h2 class="my-6 text-left text-2xl font-normal text-gray-900">Login</h2>
		<form class="" action="#" method="POST">
			<div>
				<label for="email" class="block text-sm font-normal text-gray-700"> Email Address </label>
				<div class="mt-1">
					<input id="email" name="email" type="email" autocomplete="email" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
				</div>
			</div>

			<div class="mt-6">
				<label for="password" class="block text-sm font-normal text-gray-700"> Password </label>
				<div class="mt-1">
					<input id="password" name="password" type="password" autocomplete="current-password" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-full shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
				</div>
			</div>

			<div class="mt-14">
				<div class="flex items-center justify-center">
					<div class="text-sm">Don't have an account?<a href="#" class="font-normal text-indigo-600 hover:text-indigo-500"> Create one</a></div>
				</div>

				<div class="my-6">
					<button type="submit" class="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
				</div>

				<div class="flex items-center justify-center">
					<div class="text-sm">
						<a href="#" class="font-normal text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
					</div>
				</div>
			</div>
		</form>

		<div class="mt-14">
			<div class="relative">
				<div class="absolute inset-0 flex items-center">
				<div class="w-full border-t border-gray-300" />
				</div>
				<div class="relative flex justify-center text-sm">
					<span class="px-2 bg-white text-gray-500"> OR </span>
				</div>
			</div>

			<div class="mt-6 grid grid-cols-1">
				<div>
					<a href="#" class="w-full inline-flex justify-center py-4 px-4 border border-gray-300 rounded-full shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
						<Google />
						<span class="pl-2 font-medium text-gray-900">Sign in with Google</span>
					</a>
				</div>
			</div>
		</div>
  	</div>
</template>
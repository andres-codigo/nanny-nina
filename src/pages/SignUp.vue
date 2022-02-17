<script setup>
import LinkCard from '../components/LinkCard.vue'
</script>


<template>
	<header>
		<div class="h-16 pt-4 pr-2">
			<router-link to="/home" class="float-right"><XIcon class="w-8 h-8" aria-hidden="true" /></router-link>
		</div>
	</header>
	<main>
		<div class="min-h-full flex flex-col justify-center py-12 mx-4">
			<h2 class="ml-4 my-6 text-left text-2xl font-medium text-gray-900">Sign Up</h2>
			<LinkCard to="home" class="text-black bg-emerald-200 focus:ring-emerald-500" title="Join as Parent/Host" />
			<LinkCard to="home" class="text-white bg-indigo-600 focus:ring-indigo-500" title="Join for Care jobs" />
			<div class="flex items-center justify-center">
				<div class="text-sm">
					<router-link to="/sign-up" class="mr-2 font-normal text-indigo-600">Already have an account?</router-link>
					<button type="button" class="inline-flex items-center px-4 py-1 border border-black font-medium rounded-full text-black bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign in</button>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import { XIcon } from '@heroicons/vue/solid'

export default {
	components: {
		XIcon
	},
}
</script>
<script setup>
import LinkCard from '../../../../components/cards/LinkCard.vue'
</script>

<template>
	<div class="w-full h-screen">
		<header>
			<div class="h-16 pt-4 px-4">
				<router-link to="/dashboard" class="float-right"><XIcon class="w-8 h-8" aria-hidden="true" /></router-link>
			</div>
		</header>
		<main>
			<div class="min-h-full flex flex-col justify-center py-12 mx-4">
				<h2 class="mb-2 text-left text-xl font-medium text-gray-900">Welcome to Nanny Nina</h2>
				<LinkCard to="dashboard" class="text-black bg-emerald-200 hover:opacity-75 focus:ring-emerald-500" title="Sign up as Parent/Host" content="Request Nanny, Childminder or Au pair" />
				<LinkCard to="dashboard" class="text-white bg-indigo-600 hover:opacity-75 focus:ring-indigo-500" title="Sing up for Care jobs" content="Work as Nanny, Childminder or Au pair" />
				<div class="flex items-center justify-center">
					<div class="text-sm">
						<span class="mr-2 font-thin">Already have an account?</span>
						<button type="button" class="inline-flex items-center px-4 py-1 border border-black font-medium rounded-full text-black bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign in</button>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import { XIcon } from '@heroicons/vue/solid'

export default {
	components: {
		XIcon
	},
}
</script>
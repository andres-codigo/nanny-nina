<script setup>
import Mail from '../../assets/svg/mail/mail.vue'
</script>

<template>
	<div class="bg-indigo-600 w-full h-screen">
		<header>
			<div class="h-16 pt-4 pr-2">
				<router-link to="/dashboard" class="float-right"><XIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link>
			</div>
		</header>
		<main>
			<div class="min-h-full flex flex-col justify-center">
				<h2 class="mb-6 text-center text-3xl font-medium text-emerald-200">Check your mail</h2>
				<div class="flex items-center justify-center mx-8">
					<p class="font-light text-white text-center">We've sent a verification link to your mail, please click this link to login</p>
				</div>
				<div class="flex items-center justify-center my-28">
					<Mail class="w-44 h-44" />
				</div>
				<div class="flex items-center justify-center mx-8">
					<p class="font-light text-white text-sm text-center">Did not receive any email? Please check your spam or <span class="font-light text-emerald-200">resend link</span>.  Error singing up?  Try <span class="font-light text-emerald-200">signing up again.</span></p>
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
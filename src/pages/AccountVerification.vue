<script setup>
import Mail from '../assets/svg/mail/mail.vue'
</script>

<template>
	<div class="bg-indigo-600">
		<header>
			<div class="h-16 pt-4 pr-2">
				<router-link to="/sign-up" class="float-right"><XIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link>
			</div>
		</header>
		<main>
			<div class="h-screen flex flex-col justify-center">
				<h2 class="mb-6 text-center text-3xl font-medium text-emerald-200">Check your mail</h2>
				<div class="flex items-center justify-center mb-16">
					<Mail class="w-44 h-44" />
				</div>
				<div class="flex items-center justify-center mx-8 mb-28">
					<p class="font-light text-white text-sm text-center">We've sent a verification link to your mail, please click this link to verify your account</p>
				</div>
				<div class="flex items-center justify-center mx-8">
					<p class="font-light text-white text-sm text-center">Did not receive any email? Please check your spam or <router-link to="/sign-up" class="font-light text-emerald-200"> try another email address</router-link></p>
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
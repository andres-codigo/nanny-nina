<template>
	<div class="bg-lilac-500 w-full h-screen">
		<TopNavigation>
			<template #iconRight><router-link to="/dashboard"><XIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="min-h-full flex flex-col justify-center">
				<h1 class="mb-6 text-center text-header-one font-medium text-green-500">Check your mail</h1>
				<div class="flex items-center justify-center mx-8">
					<p class="font-light text-white text-center">We've sent a verification link to your mail, please click this link to login</p>
				</div>
				<div class="flex items-center justify-center my-28">
					<Mail class="w-44 h-44" />
				</div>
				<div class="flex items-center justify-center mx-8">
					<p class="font-light text-white text-center">Did not receive any email? Please check your spam or <span class="font-light text-green-200">resend link</span>.  Error singing up?  Try <span class="font-light text-green-200">signing up again.</span></p>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation/TopNavigation.vue'
import Mail from '../../../../../assets/svg/mail/mail.vue'
import { XIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Mail,
		XIcon
	}
}
</script>
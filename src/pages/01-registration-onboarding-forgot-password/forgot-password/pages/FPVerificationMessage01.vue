<template>
	<div class="bg-purple-500">
		<main>
			<div class="h-screen flex flex-col items-center justify-center mx-4">
				<div class="grid grid-rows-3 grid-flow-col gap-0">

					<div>
						<div class="grid grid-rows-2 gap-0">
							<div><h1 class="mb-6 text-center text-header-one font-bold text-green-500">Check your mail</h1></div>
							<div><p class="text-white text-center font-light">We've sent a verification link to your mail, please click this link to login</p></div>
						</div>
					</div>

					<div class="flex flex-col justify-center items-center">
						<Mail class="w-44 h-44" />
					</div>

					<div class="mt-32">
						<p class="text-white text-center font-light">Did not receive any email? Please check your spam or <a href="#" class="text-green-200 font-light anchor-with-underline">resend link</a>.  Error singing up?  Try <a href="#" class="text-green-200 font-light anchor-with-underline">signing up again.</a></p>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../components/navigation/TopNavigation.vue'
import Mail from '../../../../assets/svg/mail/mail.vue'

import { XIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Mail,
		XIcon
	}
}
</script>
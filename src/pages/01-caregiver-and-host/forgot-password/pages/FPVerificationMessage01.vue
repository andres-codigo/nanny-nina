<template>
	<div class="bg-purple-500">
		<main>
			<div class="h-screen flex flex-col items-center justify-center mx-4">
				<div class="grid grid-rows-3 grid-flow-col gap-0">

					<div>
						<div class="grid grid-rows-2 gap-0">
							<div><h1 class="text-center text-header-one font-semibold text-green-500 antialiased mb-6">Check your mail</h1></div>
							<div><p class="text-white text-center font-light">We've sent a verification link to your mail, please click this link to login</p></div>
						</div>
					</div>

					<div class="flex flex-col justify-center items-center">
						<Img class="w-44 h-44" src="./assets/svg/mail/mail.svg" alt="" />
					</div>

					<div class="mt-32">
						<p class="text-white text-center font-light">Did not receive any email? Please check your spam or <a href="#" target="_self" class="font-light anchor-green anchor-with-underline">resend link</a>.  Error singing up?  Try <a href="#" target="_self" class="font-light anchor-green anchor-with-underline">signing up again.</a></p>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../components/navigation-and-tabs/TopNavigation.vue'
import Img from '../../../../components/dom-elements/Img.vue'

import { XIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Img,
		XIcon
	}
}
</script>
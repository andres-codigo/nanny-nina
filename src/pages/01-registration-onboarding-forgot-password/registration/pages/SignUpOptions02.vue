<!-- TODO: hover, focus for LinkCard's -->
<template>
	<div>
		<main>
			<div class="min-h-screen flex flex-col justify-center mx-4">
				<h5 class="text-left text-header-five font-semibold antialiased mb-2">Welcome to Nanny Nina</h5>
				<div class="inline-flex pb-8">
					<LinkCard to="dashboard" class="text-purple-900 bg-green-500 hover:bg-green-300 focus:bg-green-400" title="Sign up as Parent/Host" >
						<template #details><p class="pt-2">Request Nanny, Childminder or Au pair</p></template>
					</LinkCard>
				</div>
				<div class="inline-flex pb-8">
					<LinkCard to="dashboard" class="text-white bg-purple-500 hover:bg-purple-300 focus:bg-purple-400" title="Sign up for Care jobs">
						<template #details><p class="text-white pt-2">Work as Nanny, Childminder or Au pair</p></template>
					</LinkCard>
				</div>
				<div class="inline-flex items-center justify-center">
					<span class="mr-2">Already have an account?</span>
					<ButtonOutlineDark text="Sign In" class="text-base w-button-xs py-1" />
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import LinkCard from '../../../../components/cards/LinkCard.vue'
import ButtonOutlineDark from '../../../../components/buttons/ButtonOutlineDark.vue'

import { XIcon } from '@heroicons/vue/solid'

export default {
	components: {
		LinkCard,
		ButtonOutlineDark,
		XIcon
	}
}
</script>
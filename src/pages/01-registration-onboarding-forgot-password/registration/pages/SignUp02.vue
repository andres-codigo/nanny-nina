<!-- TODO: hover, focus for LinkCard's -->
<template>
	<div class="w-full h-screen">
		<header>
			<div class="h-16 pt-4 px-4">
				<router-link to="/dashboard" class="float-right"><XIcon class="w-8 h-8" aria-hidden="true" /></router-link>
			</div>
		</header>
		<main>
			<div class="min-h-full flex flex-col justify-center py-12 mx-4">
				<h6 class="mb-2 text-left text-header-six font-medium text-gray-900">Welcome to Nanny Nina</h6>
				<LinkCard to="dashboard" class="text-black bg-green-500 hover:bg-green-400 focus:ring-green-600" title="Sign up as Parent/Host" content="Request Nanny, Childminder or Au pair" />
				<LinkCard to="dashboard" class="text-white bg-blue-500 hover:bg-blue-400 focus:ring-blue-600" title="Sign up for Care jobs" content="Work as Nanny, Childminder or Au pair" />
				<div class="flex items-center justify-center">
					<span class="mr-2 font-thin">Already have an account?</span>
					<ButtonOutlineDark text="Sign In" class="w-20 py-1" />
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
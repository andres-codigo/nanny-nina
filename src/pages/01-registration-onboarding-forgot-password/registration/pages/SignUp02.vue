<!-- TODO: hover, focus for LinkCard's -->
<script setup>
import LinkCard from '../../../../components/cards/LinkCard.vue'
import ButtonOutlineDark from '../../../../components/buttons/ButtonOutlineDark.vue'
import ButtonOutlineDarkSmall from '../../../../components/buttons/ButtonOutlineDarkSmall.vue'
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
				<h6 class="mb-2 text-left text-header-six font-medium text-gray-900">Welcome to Nanny Nina</h6>
				<LinkCard to="dashboard" class="text-black bg-green-500 hover:bg-green-400 focus:ring-green-400" title="Sign up as Parent/Host" content="Request Nanny, Childminder or Au pair" />
				<LinkCard to="dashboard" class="text-white bg-blue-500 hover:bg-blue-400 focus:ring-blue-400" title="Sing up for Care jobs" content="Work as Nanny, Childminder or Au pair" />
				<div class="flex items-center justify-center">
					<span class="mr-2 font-thin">Already have an account?</span>
					<ButtonOutlineDarkSmall text="Sign In" />
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
<!-- TODO: hover, focus for LinkCard's -->
<template>
	<div>
		<main>
			<div class="min-h-screen flex flex-col justify-center mx-4">
				<h6 class="mb-2 text-left text-header-six font-medium text-gray-900">Welcome to Nanny Nina</h6>
				<div class="inline-flex pb-8">
					<LinkCard to="dashboard" class="text-black bg-green-500 hover:bg-green-400 focus:ring-green-600" title="Sign up as Parent/Host" content="Request Nanny, Childminder or Au pair" />
				</div>
				<div class="inline-flex pb-8">
					<LinkCard to="dashboard" class="text-white bg-blue-500 hover:bg-blue-400 focus:ring-blue-600" title="Sign up for Care jobs" content="Work as Nanny, Childminder or Au pair" />
				</div>
				<div class="inline-flex items-center justify-center">
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
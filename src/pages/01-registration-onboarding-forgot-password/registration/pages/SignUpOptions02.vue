<!-- TODO: hover, focus for LinkCard's -->
<template>
	<div>
		<main>
			<div class="min-h-screen flex flex-col justify-center mx-4">
				<h5 class="mb-2 text-left text-header-five font-semibold text-gray-900">Welcome to Nanny Nina</h5>
				<div class="inline-flex pb-8">
					<LinkCard to="dashboard" class="text-black bg-green-500 hover:bg-green-400 focus:ring-green-600" title="Sign up as Parent/Host" content="Request Nanny, Childminder or Au pair" />
				</div>
				<div class="inline-flex pb-8">
					<LinkCard to="dashboard" class="text-white bg-lilac-500 hover:bg-lilac-400 focus:ring-lilac-600" title="Sign up for Care jobs" content="Work as Nanny, Childminder or Au pair" />
				</div>
				<div class="inline-flex items-center justify-center">
					<span class="mr-2">Already have an account?</span>
					<ButtonOutlineDark text="Sign In" class="py-1 w-button-xs" />
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
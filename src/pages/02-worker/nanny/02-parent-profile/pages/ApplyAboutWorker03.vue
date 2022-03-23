<template>
	<div class="w-full h-full">
		<TopNavigation routerLinkPath="/dashboard" backgroundColor="bg-white" iconColor="text-black" headerColor="text-black" text="About You">
			<DotsVerticalIcon class="w-6 h-6 text-black" aria-hidden="true" />
		</TopNavigation>
		<main>
			<div class="flex flex-col pt-6 mx-4">
				<h5 class="my-6 text-left text-header-five font-normal text-gray-900">Briefly describe yourself &amp; hobbies</h5>

				<div class="mt-4 mb-16">
					<Textarea text="About you" name="about-you" id="about-you" />
				</div>

				<div class="mt-10">
					<ButtonPrimary text="Save &amp; Continue" />
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation/TopNavigation.vue'
import Textarea from '../../../../../components/form/Textarea.vue'
import ButtonPrimary from '../../../../../components/buttons/ButtonPrimary.vue'
import { DotsVerticalIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Textarea,
		ButtonPrimary,
		DotsVerticalIcon
	}
}
</script>

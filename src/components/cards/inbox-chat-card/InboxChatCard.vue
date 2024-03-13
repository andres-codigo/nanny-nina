<template>
	<div :class="['flex flex-col relative h-48 rounded-3xl', backgroundColor]">
		<div class="mt-8 mb-4 ml-4">
			<p class="text-sm font-medium antialiased">{{ header }}</p>
		</div>

		<div class="flex ml-4 mb-4 -space-x-3">
			<div>
				<img
					class="rounded-full h-14 w-14 z-0"
					src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
					alt=""
				/>
			</div>
			<div>
				<img
					class="rounded-full h-14 w-14 z-10"
					src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
					alt=""
				/>
			</div>
			<div>
				<img
					class="rounded-full h-14 w-14 z-20"
					src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
					alt=""
				/>
			</div>
			<div>
				<img
					class="rounded-full h-14 w-14 z-30"
					src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
					alt=""
				/>
			</div>
			<div>
				<img
					class="rounded-full h-14 w-14 z-40"
					src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
					alt=""
				/>
			</div>
			<div
				class="flex items-center justify-center rounded-full h-14 w-14 z-50 bg-green-500"
			>
				<ImageComponent
					class="mr-1 h-4 w-4"
					src="./assets/svg/logo/alternate-logo.svg"
				/>
				<ImageComponent
					class="h-4 w-4"
					src="./assets/svg/logo/alternate-logo.svg"
				/>
			</div>
		</div>

		<div class="ml-4 mb-10">
			<AnchorPrimary
				text="Send us a message"
				classes="w-button-chat-send-a-message text-sm font-semibold py-2"
			>
				<template #leadingIcon
					><ImageComponent
						class="h-4 w-4 mr-1"
						src="./assets/svg/other/send-white.svg"
				/></template>
			</AnchorPrimary>
		</div>
	</div>
</template>

<script>
import ImageComponent from '../../dom-elements/ImageComponent.vue'
import AnchorPrimary from '../../dom-elements/AnchorPrimary.vue'

export default {
	components: {
		ImageComponent,
		AnchorPrimary,
	},
	props: {
		backgroundColor: {
			type: String,
			default: 'bg-purple-50',
		},
		textColorHeader: {
			type: String,
			default: 'text-white',
		},
		header: {
			type: String,
			default: 'Got a question or an issue? We’re here to help!',
		},
	},
}
</script>

<template>
	<div :class="['flex flex-col relative h-48 rounded-3xl', backgroundColor]">
		<div class="w-full mt-8 mb-6 ml-4">
			<h4
				:class="[
					'text-header-four font-semibold antialiased',
					textColorHeader,
				]"
			>
				{{ header }}
			</h4>
		</div>

		<div class="flex ml-4 -space-x-3">
			<div>
				<img
					class="rounded-full h-16 w-16 z-0"
					src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
					alt=""
				/>
			</div>
			<div>
				<img
					class="rounded-full h-16 w-16 z-10"
					src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
					alt=""
				/>
			</div>
			<div>
				<img
					class="rounded-full h-16 w-16 z-20"
					src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
					alt=""
				/>
			</div>
			<div>
				<img
					class="rounded-full h-16 w-16 z-30"
					src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
					alt=""
				/>
			</div>
			<div>
				<img
					class="rounded-full h-16 w-16 z-40"
					src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
					alt=""
				/>
			</div>
			<div
				class="flex items-center justify-center rounded-full h-16 w-16 z-50 bg-green-500"
			>
				<ImageComponent
					class="inline mr-1 h-4 w-4"
					src="./assets/svg/logo/alternate-logo.svg"
					alt=""
				/>
				<ImageComponent
					class="inline mr-1 h-4 w-4"
					src="./assets/svg/logo/alternate-logo.svg"
					alt=""
				/>
			</div>
		</div>
	</div>
</template>

<script>
import ImageComponent from '../../../components/dom-elements/ImageComponent.vue'

export default {
	components: {
		ImageComponent,
	},
	props: {
		backgroundColor: {
			type: String,
			default: '',
		},
		textColorHeader: {
			type: String,
			default: 'text-white',
		},
		header: {
			type: String,
			default: '',
		},
	},
}
</script>

<template>
	<div class="flex flex-row pb-6">
		<div class="mx-3">
			<ImageComponent
				:src="leftSvg"
				:class="[
					'rounded-full mb-4',
					isHost ? 'h-20 w-20' : 'h-16 w-16',
				]"
			/>
		</div>
		<div class="pt-1">
			<p
				:class="[
					'text-2xl text-purple-900',
					showDescription ? 'mb-1' : 'mb-4',
				]"
			>
				{{ member }}
			</p>
			<p
				v-if="showDescription"
				class="text-xs font-thin text-gray-500 mb-4"
			>
				{{ description }}
			</p>
			<ButtonOutlineDark
				classes="inline-flex items-center w-button-download text-sm leading-none font-semibold py-2"
			>
				<template #iconWithText>
					<ImageComponent
						class="w-4 h-4"
						src="./assets/svg/other/download-black.svg"
						alt=""
					/>
					<span class="pl-2">Download</span>
				</template>
			</ButtonOutlineDark>
		</div>
	</div>
</template>

<script>
import ImageComponent from '../dom-elements/ImageComponent.vue'
import ButtonOutlineDark from '../buttons/ButtonOutlineDark.vue'

export default {
	components: {
		ImageComponent,
		ButtonOutlineDark,
	},
	props: {
		isHost: {
			type: Boolean,
			default: true,
		},
		leftSvg: {
			type: String,
			default:
				'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		member: {
			type: String,
			default: 'Sanders',
		},
		description: {
			type: String,
			default: '20 completed bookings',
		},
		showDescription: {
			type: Boolean,
			default: true,
		},
	},
}
</script>

<template>
	<div class="flex flex-row">
		<div class="basis-11/12">
			<div
				:class="[
					'flex items-center px-4',
					hideContent ? 'py-6' : 'py-2',
				]"
			>
				<div v-if="!hideStatusIcon" class="mr-2">
					<slot name="iconLeft"></slot>
				</div>
				<div
					:class="[
						'flex flex-col',
						hideContent ? 'my-2' : 'my-4 ml-2',
					]"
				>
					<div
						v-if="!hidePending"
						class="flex text-xs relative -top-2"
					>
						<p class="font-thin text-gray-500">Pending (0/2)</p>
					</div>

					<div class="flex flex-col">
						<h5
							class="text-header-five text-purple-900 font-semibold antialiased -mt-2"
						>
							{{ title
							}}<span
								v-if="!hideMandatoryRedStar"
								class="pl-1 text-red"
								>*</span
							>
						</h5>
						<span
							v-if="!hideContent"
							:class="[
								'inline-flex mt-2 font-medium',
								isCaregiverHostOptionDescription
									? 'text-xs'
									: 'text-sm',
							]"
							>{{ description }}</span
						>
					</div>

					<div v-if="showBadge" class="inline-flex mt-4">
						<ButtonPreferenceOutlineGrey
							text="&euro;10"
							class="text-sm w-20 py-3 mr-2"
						/>
						<ButtonPreferenceOutlineGrey
							text="&euro;15"
							class="text-sm w-20 py-3"
						/>
					</div>
				</div>
			</div>
		</div>
		<div class="basis-1/12 inline-flex items-center">
			<div :class="['w-full pr-4', hideHyperlinkIcon ? 'hidden' : '']">
				<ImageComponent
					src="./assets/svg/other/chevron-right-black.svg"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import ButtonPreferenceOutlineGrey from '../buttons/ButtonPreferenceOutlineGrey.vue'
import ImageComponent from '../dom-elements/ImageComponent.vue'

export default {
	components: {
		ButtonPreferenceOutlineGrey,
		ImageComponent,
	},
	props: {
		hideStatusIcon: {
			type: Boolean,
			default: false,
		},
		hideContent: {
			type: Boolean,
			default: true,
		},
		hidePending: {
			type: Boolean,
			default: false,
		},
		hideMandatoryRedStar: {
			type: Boolean,
			default: true,
		},
		showBadge: {
			type: Boolean,
			default: false,
		},
		isCaregiverHostOptionDescription: {
			type: Boolean,
			default: false,
		},
		hideHyperlinkIcon: {
			type: Boolean,
			default: false,
		},
		title: {
			type: String,
			default: '',
		},
		description: {
			type: String,
			default: '',
		},
	},
}
</script>

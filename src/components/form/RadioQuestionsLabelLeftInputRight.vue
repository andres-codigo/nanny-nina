<template>
	<fieldset>
		<legend :class="screenReaderOnly ? 'sr-only' : ''">{{ legend }}</legend>
		<div
			:class="[
				'flex font-medium mb-2',
				sideBySideRadioButtons ? '' : 'flex-col ',
			]"
		>
			<div class="flex-none mb-2">
				<RadioWithContainerLabelLeftInputRight
					:is-question-one="isQuestionOne"
					:side-by-side-radio-buttons="sideBySideRadioButtons"
					:text="questionOneText"
				/>
				<p
					:class="[
						'text-xs w-3/4 text-gray-500 font-thin',
						questionOneSubTextHidden ? 'hidden' : '',
					]"
				>
					{{ questionOneSubText }}
				</p>
			</div>
			<div
				:class="[
					'flex-none mb-2',
					sideBySideRadioButtons ? 'pl-8' : '',
				]"
			>
				<RadioWithContainerLabelLeftInputRight
					:side-by-side-radio-buttons="sideBySideRadioButtons"
					:text="questionTwoText"
				/>
				<p
					:class="[
						'text-xs w-3/4 text-gray-500 font-thin',
						questionTwoSubTextHidden ? 'hidden' : '',
					]"
				>
					{{ questionTwoSubText }}
				</p>
			</div>
			<div
				v-if="hasThirdQuestion"
				:class="[
					'flex-none mb-2',
					sideBySideRadioButtons ? 'pl-8' : '',
				]"
			>
				<RadioWithContainerLabelLeftInputRight
					:side-by-side-radio-buttons="sideBySideRadioButtons"
					:text="questionThreeText"
				/>
				<p
					:class="[
						'text-xs w-3/4 text-gray-500 font-thin',
						questionThreeSubTextHidden ? 'hidden' : '',
					]"
				>
					{{ questionThreeSubText }}
				</p>
			</div>
			<div
				v-if="hasFourthQuestion"
				:class="[
					'flex-none mb-2',
					sideBySideRadioButtons ? 'pl-8' : '',
				]"
			>
				<RadioWithContainerLabelLeftInputRight
					:side-by-side-radio-buttons="sideBySideRadioButtons"
					:text="questionFourText"
				/>
				<p
					:class="[
						'text-xs w-3/4 text-gray-500 font-thin',
						questionFourSubTextHidden ? 'hidden' : '',
					]"
				>
					{{ questionFourSubText }}
				</p>
			</div>
			<div
				v-if="hasFifthQuestion"
				:class="[
					'flex-none mb-2',
					sideBySideRadioButtons ? 'pl-8' : '',
				]"
			>
				<RadioWithContainerLabelLeftInputRight
					:side-by-side-radio-buttons="sideBySideRadioButtons"
					:text="questionFiveText"
				/>
				<p
					:class="[
						'text-xs w-3/4 text-gray-500 font-thin',
						questionFiveSubTextHidden ? 'hidden' : '',
					]"
				>
					{{ questionFiveSubText }}
				</p>
			</div>
		</div>
	</fieldset>
</template>

<script>
import RadioWithContainerLabelLeftInputRight from './RadioWithContainerLabelLeftInputRight.vue'

export default {
	components: {
		RadioWithContainerLabelLeftInputRight,
	},
	props: {
		screenReaderOnly: {
			type: Boolean,
			default: false,
		},
		legend: {
			type: String,
			default: '',
		},
		sideBySideRadioButtons: {
			type: Boolean,
			default: true,
		},
		/* Question One */
		isQuestionOne: {
			type: Boolean,
			default: true,
		},
		questionOneText: {
			type: String,
			default: '',
		},
		questionOneSubText: {
			type: String,
			default: '',
		},
		questionOneSubTextHidden: {
			type: Boolean,
			default: true,
		},

		/* Question Two */
		questionTwoText: {
			type: String,
			default: '',
		},
		questionTwoSubText: {
			type: String,
			default: '',
		},
		questionTwoSubTextHidden: {
			type: Boolean,
			default: true,
		},

		/* Question Three */
		hasThirdQuestion: {
			type: Boolean,
			default: false,
		},
		questionThreeText: {
			type: String,
			default: '',
		},
		questionThreeSubText: {
			type: String,
			default: '',
		},
		questionThreeSubTextHidden: {
			type: Boolean,
			default: true,
		},

		/* Question Four */
		hasFourthQuestion: {
			type: Boolean,
			default: false,
		},
		questionFourText: {
			type: String,
			default: '',
		},
		questionFourSubText: {
			type: String,
			default: '',
		},
		questionFourSubTextHidden: {
			type: Boolean,
			default: true,
		},

		/* Question Five */
		hasFifthQuestion: {
			type: Boolean,
			default: false,
		},
		questionFiveText: {
			type: String,
			default: '',
		},
		questionFiveSubText: {
			type: String,
			default: '',
		},
		questionFiveSubTextHidden: {
			type: Boolean,
			default: true,
		},
	},
}
</script>

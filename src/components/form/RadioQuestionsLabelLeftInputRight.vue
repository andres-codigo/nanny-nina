<template>
	<fieldset>
		<legend :class="screenReaderOnly ? 'sr-only' : ''">{{ legend }}</legend>
		<div :class="['flex font-medium mb-2', sideBySideRadioButtons ? '' : 'flex-col ']">
			<div class="flex-none mb-2">
				<RadioWithContainerLabelLeftInputRight :isQuestionOne="isQuestionOne" :sideBySideRadioButtons="sideBySideRadioButtons" :text="questionOneText" />
				<p :class="['text-xs w-3/4 text-gray-500 font-thin', questionOneSubTextHidden ? 'hidden' : '']">{{ questionOneSubText }}</p>
			</div>
			<div :class="['flex-none mb-2', sideBySideRadioButtons ? 'pl-8' : '']">
				<RadioWithContainerLabelLeftInputRight :sideBySideRadioButtons="sideBySideRadioButtons" :text="questionTwoText" />
				<p :class="['text-xs w-3/4 text-gray-500 font-thin', questionTwoSubTextHidden ? 'hidden' : '']">{{ questionTwoSubText }}</p>
			</div>
			<div :class="['flex-none mb-2', sideBySideRadioButtons ? 'pl-8' : '']" v-if="hasThirdQuestion">
				<RadioWithContainerLabelLeftInputRight :sideBySideRadioButtons="sideBySideRadioButtons" :text="questionThreeText" />
				<p :class="['text-xs w-3/4 text-gray-500 font-thin', questionThreeSubTextHidden ? 'hidden' : '']">{{ questionThreeSubText }}</p>
			</div>
			<div :class="['flex-none mb-2', sideBySideRadioButtons ? 'pl-8' : '']" v-if="hasFourthQuestion">
				<RadioWithContainerLabelLeftInputRight :sideBySideRadioButtons="sideBySideRadioButtons" :text="questionFourText" />
				<p :class="['text-xs w-3/4 text-gray-500 font-thin', questionFourSubTextHidden ? 'hidden' : '']">{{ questionFourSubText }}</p>
			</div>
			<div :class="['flex-none mb-2', sideBySideRadioButtons ? 'pl-8' : '']" v-if="hasFifthQuestion">
				<RadioWithContainerLabelLeftInputRight :sideBySideRadioButtons="sideBySideRadioButtons" :text="questionFiveText" />
				<p :class="['text-xs w-3/4 text-gray-500 font-thin', questionFiveSubTextHidden ? 'hidden' : '']">{{ questionFiveSubText }}</p>
			</div>
		</div>
	</fieldset>
</template>

<script>
import RadioWithContainerLabelLeftInputRight from './RadioWithContainerLabelLeftInputRight.vue'

export default {
	components: {
		RadioWithContainerLabelLeftInputRight
	},
	props: {
		screenReaderOnly: {
			type: Boolean,
			default: false
		},
		legend: String,
		sideBySideRadioButtons: {
			type: Boolean,
			default: true
		},
		/* Question One */
		isQuestionOne: {
			type: Boolean,
			default: true
		},
		questionOneText: String,
		questionOneSubText: String,
		questionOneSubTextHidden: {
			type: Boolean,
			default: true
		},

		/* Question Two */
		questionTwoText: String,
		questionTwoSubText: String,
		questionTwoSubTextHidden: {
			type: Boolean,
			default: true
		},

		/* Question Three */
		hasThirdQuestion: {
			type: Boolean,
			default: false
		},
		questionThreeText: String,
		questionThreeSubText: String,
		questionThreeSubTextHidden: {
			type: Boolean,
			default: true
		},

		/* Question Four */
		hasFourthQuestion: {
			type: Boolean,
			default: false
		},
		questionFourText: String,
		questionFourSubText: String,
		questionFourSubTextHidden: {
			type: Boolean,
			default: true
		},

		/* Question Five */
		hasFifthQuestion: {
			type: Boolean,
			default: false
		},
		questionFiveText: String,
		questionFiveSubText: String,
		questionFiveSubTextHidden: {
			type: Boolean,
			default: true
		}
	}
}
</script>
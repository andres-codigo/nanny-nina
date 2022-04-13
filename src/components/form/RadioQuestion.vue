<template>
	<fieldset>
		<legend :class="screenReaderOnly ? 'sr-only' : ''">{{ legend }}</legend>
		<div :class="['flex font-medium mb-2', sideBySideRadioButtons ? '' : 'flex-col ']">
			<div class="flex-none mb-2">
				<RadioWithContainerAndLabel :isQuestionOne="true" :sideBySideRadioButtons="sideBySideRadioButtons" :text="questionOneText" />
				<p :class="['text-xs w-3/4 text-gray-500 font-thin', questionOneSubTextHidden ? 'hidden' : '']">{{ questionOneSubText }}</p>
			</div>
			<div :class="['flex-none mb-2', sideBySideRadioButtons ? 'pl-8' : '']">
				<RadioWithContainerAndLabel :sideBySideRadioButtons="sideBySideRadioButtons" :text="questionTwoText" />
				<p :class="['text-xs w-3/4 text-gray-500 font-thin', questionTwoSubTextHidden ? 'hidden' : '']">{{ questionTwoSubText }}</p>
			</div>
			<div :class="['flex-none mb-2', sideBySideRadioButtons ? 'pl-8' : '']" v-if="hasThirdQuestion">
				<RadioWithContainerAndLabel :sideBySideRadioButtons="sideBySideRadioButtons" :text="questionThreeText" />
				<p :class="['text-xs w-3/4 text-gray-500 font-thin', questionThreeSubTextHidden ? 'hidden' : '']">{{ questionThreeSubText }}</p>
			</div>
		</div>
	</fieldset>
</template>

<script>
import RadioWithContainerAndLabel from './RadioWithContainerAndLabel.vue'

export default {
	components: {
		RadioWithContainerAndLabel
	},
	props: {
		screenReaderOnly: {
			type: Boolean,
			default: false
		},
		sideBySideRadioButtons: {
			type: Boolean,
			default: true
		},
		legend: String,
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
		questionTwoText: String,
		questionTwoSubText: String,
		questionTwoSubTextHidden: {
			type: Boolean,
			default: true
		},
		hasThirdQuestion: {
			type: Boolean,
			default: false
		},
		questionThreeText: String,
		questionThreeSubText: String,
		questionThreeSubTextHidden: {
			type: Boolean,
			default: true
		}
	}
}
</script>
<template>
	<fieldset>
		<legend :class="screenReaderOnly ? 'sr-only' : ''">{{ legend }}</legend>
		<div :class="['flex font-medium mb-2', sideBySideRadioButtons ? '' : 'flex-col ']">
			<div class="flex-none">
				<RadioWithContainerAndLabel :sideBySideRadioButtons="sideBySideRadioButtons" :text="questionOneText" />
				<p :class="['text-xs text-gray-500 font-thin', questionOneSubTextHidden ? 'hidden' : '']">{{ questionOneSubText }}</p>
			</div>
			<div :class="['flex-none', sideBySideRadioButtons ? 'pl-8' : '']">
				<RadioWithContainerAndLabel :sideBySideRadioButtons="sideBySideRadioButtons" :text="questionTwoText" />
				<p :class="['text-xs text-gray-500 font-thin', questionTwoSubTextHidden ? 'hidden' : '']">{{ questionTwoSubText }}</p>
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
		}
	}
}
</script>
<template>
	<fieldset>
		<legend :class="screenReaderOnly ? 'sr-only' : ''">{{ legend }}</legend>
		<div class="flex font-medium mb-2">
			<div class="flex-none"><RadioWithContainerAndLabel :text="questionOneText" /></div>
			<div class="flex-none pl-8"><RadioWithContainerAndLabel :text="questionTwoText" /></div>
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
		legend: String,
		questionOneText: String,
		questionTwoText: String
	}
}
</script>
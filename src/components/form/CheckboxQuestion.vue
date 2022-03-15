<script setup>
import Checkbox from './Checkbox.vue'
</script>

<template>
	<fieldset>
		<legend :class="screenReaderOnly ? 'sr-only' : ''">{{ legend }}</legend>
		<div class="flex font-medium mb-2">
			<div class="flex-none"><Checkbox :text="QuestionOneText" /></div>
			<div class="flex-none pl-8"><Checkbox :text="QuestionTwoText" /></div>
		</div>
	</fieldset>
</template>

<script>
export default {
	props: {
		screenReaderOnly: {
			type: Boolean,
			default: false
		},
		legend: String,
		QuestionOneText: String,
		QuestionTwoText: String
	}
}
</script>
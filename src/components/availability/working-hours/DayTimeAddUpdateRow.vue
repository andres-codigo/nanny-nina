<template>
	<div class="flex flex-row h-20">
		<div class="inline-flex justify-center availability-toggle-button items-center">
			<slot name="toggleDay"></slot>
		</div>
		<div class="inline-flex justify-center availability-remove-button items-center">
			<slot name="removeIcon"></slot>
		</div>
		<div class="inline-flex justify-center items-center">
			<slot name="inputHours"></slot>
		</div>
		<div class="inline-flex justify-center availability-add-button items-center">
			<slot name="AddIcon"></slot>
		</div>
		<div class="inline-flex justify-center items-center">
			<slot name="button"></slot>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		rowWithTimeInputOnly: {
			type: Boolean,
			default: true
		}
	}
}
</script>

<!--  Template
<DayOrTimeAvailabilityRow>
	<template #toggleDay></template>
	<template #removeIcon></template>
	<template #inputHours></template>
	<template #inputNumberOfKids></template>
	<template #AddIcon></template>
</DayOrTimeAvailabilityRow>
-->
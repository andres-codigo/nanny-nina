<template>
	<div :class="['flex flex-row', rowWithTimeInputOnly ? 'h-20' : 'h-32']">
		<div
			:class="[
				'inline-flex justify-center availability-toggle-button',
				rowWithTimeInputOnly ? 'items-center' : 'pt-6',
			]"
		>
			<slot name="toggleDay"></slot>
		</div>
		<div
			:class="[
				'inline-flex justify-center availability-remove-button',
				rowWithTimeInputOnly ? 'items-center' : 'pt-6',
			]"
		>
			<slot name="removeIcon"></slot>
		</div>
		<div
			:class="[
				'inline-flex grow justify-center',
				rowWithTimeInputOnly ? 'items-center' : 'pt-4 pr-2',
			]"
		>
			<slot v-if="rowWithTimeInputOnly" name="inputHours"></slot>
			<div
				v-else
				class="grid grid-cols-1 gap-4 gap-y-1 gap-x-0 justify-items-center"
			>
				<div><slot name="inputHours"></slot></div>
				<div><slot name="inputNumberOfKids"></slot></div>
			</div>
		</div>
		<div
			:class="[
				'inline-flex justify-center availability-add-button',
				rowWithTimeInputOnly ? 'items-center' : 'pt-6',
			]"
		>
			<slot name="AddIcon"></slot>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		rowWithTimeInputOnly: {
			type: Boolean,
			default: true,
		},
	},
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

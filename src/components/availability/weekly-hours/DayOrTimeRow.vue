<template>
	<div class="flex flex-row  h-20">
		<div class="inline-flex justify-center items-center availability-toggle-button">
			<slot name="toggleDay"></slot>
		</div>
		<div class="inline-flex justify-center items-center availability-remove-button">
			<slot name="removeIcon"></slot>
		</div>
		<div class="inline-flex grow justify-center items-center px-4">
			<slot name="inputHours"></slot>
			<slot name="inputNumberOfKids"></slot>
		</div>
		<div class="inline-flex justify-center items-center availability-add-button">
			<slot name="AddIcon"></slot>
		</div>
	</div>
</template>

<!--  Template
<DayOrTimeAvailabilityRow>
	<template #toggleDay></template>
	<template #removeIcon></template>
	<template #inputHours></template>
	<template #inputNumberOfKids></template>
	<template #AddIcon></template>
</DayOrTimeAvailabilityRow>
-->
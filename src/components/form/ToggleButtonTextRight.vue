<template>
	<button
		type="button"
		:disabled="isDisabled"
		:class="[
			'relative inline-flex flex-shrink-0 h-6 w-12 border-2 border-transparent rounded-full transition-colors ease-in-out duration-200',
			backgroundColor,
			isDisabled ? 'disabled:opacity-50' : 'cursor-pointer',
		]"
		role="switch"
		aria-checked="false"
	>
		<span
			aria-hidden="true"
			:class="[
				'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
				translateXPosition,
			]"
		></span></button
	><span
		:class="[
			'pl-2 w-12 text-xl font-medium',
			isDisabled ? 'text-gray-500' : '',
		]"
		>{{ text }}</span
	>
</template>

<script>
export default {
	props: {
		text: {
			type: String,
			default: '',
		},
		backgroundColor: {
			type: String,
			default: '',
		},
		translateXPosition: {
			type: String,
			default: '',
		},
		isDisabled: {
			type: Boolean,
			default: false,
		},
	},
}
</script>

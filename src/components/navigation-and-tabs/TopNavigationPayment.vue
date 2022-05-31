<template>
	<header>
		<div :class="['flex', backgroundColor, displayBorderBottom ? 'border-b border-gray-100' : '']">
			<div :class="['grow h-14 inline-flex items-center text-header-four font-semibold antialiased ml-4', headerColor]">
				{{ text }}
			</div>
			<div :class="['inline-flex items-center', rightIconIsButton ? 'justify-end w-20 h-14 mr-4' : 'justify-center w-14 h-14']">
				<slot name="iconRight"></slot>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	props: {
		backgroundColor: {
			type: String,
			default: 'bg-white'
		},
		displayBorderBottom: {
			type: Boolean,
			default: false
		},
		headerColor: {
			type: String,
			default: 'text-white'
		},
		text: String,
		rightIconIsButton: {
			type: Boolean,
			default: false
		}
	}
}
</script>
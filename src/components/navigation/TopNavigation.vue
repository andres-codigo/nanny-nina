<template>
	<header>
		<div :class="['flex', isPopUpContent ? 'rounded-t-30px' : '', backgroundColor, dropShadow ? 'drop-shadow-md' : '']">
			<div class="flex-none inline-flex justify-center items-center -ml-1.5 w-14 h-14">
				<slot name="iconLeft"></slot>
			</div>
			<div :class="['grow h-14 inline-flex justify-center items-center text-xl font-bold antialiased', headerColor, hideHeader ? 'hidden sm:hidden' : '']">{{ text }}</div>
			<div :class="['flex-none inline-flex items-center', rightIconIsButton ? 'justify-end w-20 h-14 mr-4' : 'justify-center w-14 h-14']">
				<slot name="iconRight"></slot>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	props: {
		isPopUpContent: {
			type: Boolean,
			default: false
		},
		backgroundColor: {
			type: String,
			default: 'bg-purple-500'
		},
		dropShadow: {
			type: Boolean,
			default: false
		},
		headerColor: {
			type: String,
			default: 'text-white'
		},
		text: String,
		hideHeader: {
			type: Boolean,
			default: false
		},
		rightIconIsButton: {
			type: Boolean,
			default: false
		}
	}
}
</script>
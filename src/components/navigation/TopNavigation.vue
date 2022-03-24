<template>
	<header>
		<div :class="['flex', backgroundColor, backgroundColor === 'bg-white' ? 'drop-shadow-md' : '']">
			<div class="flex-none inline-flex justify-center items-center -ml-1.5 w-14 h-14">

				<slot name="iconLeft"></slot>
			</div>
			<div :class="['grow h-14 inline-flex justify-center items-center text-xl font-bold antialiased', headerColor, hideHeader ? 'hidden sm:hidden' : '']">{{ text }}</div>
			<div class="flex-none inline-flex justify-center items-center w-14 h-14">
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
			default: 'bg-lilac-500'
		},
		headerColor: {
			type: String,
			default: 'text-white'
		},
		text: String,
		hideHeader: {
			type: Boolean,
			default: false
		}
	}
}
</script>
<template>
	<header>
		<!-- START: Sticky Header DOM/Classes section -->
		<section class="section-sticky-top-navigation">
			<div :class="['flex', isPopUpContent ? 'rounded-t-30px' : '', backgroundColor, displayBorderBottom ? 'border-b border-gray-100' : '']">
				<div class="inline-flex justify-center items-center -ml-1.5 w-14 h-14">
					<slot name="iconLeft"></slot>
				</div>
				<div :class="['grow h-14 inline-flex justify-center items-center text-xl font-bold antialiased', headerColor, hideHeader ? 'hidden sm:hidden' : '']">
					<slot name="profileImage"></slot>{{ text }}
				</div>
				<div :class="['inline-flex items-center', rightIconIsButton ? 'justify-end w-20 h-14 mr-4' : 'justify-center w-14 h-14']">
					<slot name="iconRight"></slot>
				</div>
			</div>
		</section>
		<!-- END -->
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
		displayBorderBottom: {
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
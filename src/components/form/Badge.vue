<template>
	<button
		type="button"
		:class="
			['relative inline-flex flex-shrink-0 h-6 w-12 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200',
				backgroundColor
			]"
		role="switch"
		aria-checked="false">
		<span aria-hidden="true" class="translate-x-6 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
	</button><span class="pl-2 w-12 text-xl font-medium">{{ text }}</span>
</template>

<script>
export default {
	props: {
		text: String,
		backgroundColor: String,
		translateXPosition: String
	}
}
</script>
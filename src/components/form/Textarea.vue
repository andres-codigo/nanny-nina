<template>
	<textarea
		rows="8"
		:name="name"
		:id="id"
		class="
			block w-full
			rounded-30px
			border border-gray-50
			text-gray-600
			focus:outline-none focus:ring-0 focus:border-purple-500">
	</textarea>
	<div class="text-sm text-gray-500 text-right font-light">0/280</div>
</template>

<script>
export default {
	props: {
		text: String,
		name: String,
		id: String
	}
}
</script>
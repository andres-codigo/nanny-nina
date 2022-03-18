<template>
	<div class="border-b border-gray-200">
		<nav class="-mb-px flex" aria-label="Tabs">
			<a href="#" :class="['flex-1 py-4 px-1 text-center font-medium antialiased', tabOneClasses]">{{ tabOneText }}</a>
			<a href="#" :class="['flex-1 py-4 px-1 text-center font-medium antialiased', tabTwoClasses]">{{ tabTwoText }}</a>
		</nav>
	</div>
</template>

<script>
export default {
	props: {
		tabOneText: String,
		tabOneClasses: String,
		tabTwoText: String,
		tabTwoClasses: String,
	}
}
</script>
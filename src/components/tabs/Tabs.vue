<template>
	<div class="border-b border-gray-200">
		<nav class="-mb-px flex relative text-lg text-center font-semibold antialiased" aria-label="Tabs">
			<a href="#" target="_self" :class="['flex-1 py-4 px-1', tabOneClasses]">
				{{ tabOneText }}
				<span :class="['inline-flex absolute left-[4.2rem] top-[3.7rem] w-20 border-b-2 border-purple-500', tabOneIsActive ? '' : 'hidden']"></span>
			</a>
			<a href="#" target="_self" :class="['flex-1 py-4 px-1', tabTwoClasses]">
				{{ tabTwoText }}
				<span :class="['inline-flex absolute left-[17.5rem] top-[3.7rem] w-20 border-b-2 border-purple-500', tabTwoIsActive ? '' : 'hidden']"></span>
			</a>
		</nav>
	</div>
</template>

<script>
export default {
	props: {
		tabOneText: String,
		tabOneClasses: String,
		tabOneIsActive:  {
			type: Boolean,
			default: false
		},
		tabTwoText: String,
		tabTwoClasses: String,
		tabTwoIsActive:  {
			type: Boolean,
			default: false
		},
	}
}
</script>
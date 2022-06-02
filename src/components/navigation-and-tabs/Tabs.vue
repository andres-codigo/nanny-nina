<template>
	<div class="border-b border-gray-200">
		<nav class="flex -mb-px text-lg antialiased font-semibold text-center" aria-label="Tabs">
			<a href="#" target="_self" :class="['flex-1 py-4 px-1 relative', tabOneClasses]">
				{{ tabOneText }}
				<span :class="['inline-flex absolute left-[25%] top-[3.6rem] w-[50%] border-b-4 border-purple-500 rounded-30px', tabOneIsActive ? '' : 'hidden']"></span>
			</a>
			<a href="#" target="_self" :class="['flex-1 py-4 px-1 relative', tabTwoClasses]">
				{{ tabTwoText }}
				<span :class="['inline-flex absolute left-[25%] top-[3.6rem] w-[50%] border-b-4 border-purple-500 rounded-30px', tabTwoIsActive ? '' : 'hidden']"></span>
			</a>
			<a href="#" target="_self" :class="['flex-1 py-4 px-1 relative', tabThreeClasses]" v-if="displayThirdTab">
				{{ tabThreeText }}
				<span :class="['inline-flex absolute left-[25%] top-[3.6rem] w-[50%] border-b-4 border-purple-500 rounded-30px', tabThreeIsActive ? '' : 'hidden']"></span>
			</a>
		</nav>
	</div>
</template>

<script>
export default {
	props: {
		tabOneText: String,
		tabOneClasses: String,
		tabOneIsActive: {
			type: Boolean,
			default: false
		},
		tabTwoText: String,
		tabTwoClasses: String,
		tabTwoIsActive: {
			type: Boolean,
			default: false
		},
		displayThirdTab: {
			type: Boolean,
			default: false
		},
		tabThreeText: String,
		tabThreeClasses: String,
		tabThreeIsActive:  {
			type: Boolean,
			default: false
		}
	}
}
</script>
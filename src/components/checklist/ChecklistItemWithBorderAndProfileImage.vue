<template>
	<li>
		<a class="block mb-2 border border-gray-100 rounded-20px hover:rounded-20px hover:shadow-lg hover:shadow-gray-50 focus:bg-green-100 focus:border-gray-100" href="#" target="_self">
			<div class="flex flex-row mb-3">
				<div class="basis-11/12">
					<div class="flex items-center py-6">
						<div class="mx-3">
							<Img :src="leftSvg" class="h-16  w-16 rounded-full" />
						</div>
						<div>
							<div class="z-0">
								<h6 class="text-header-six font-semibold">{{ header }}</h6>
								<p>{{ subHeader }}</p>
							</div>
						</div>
					</div>
				</div>
				<div class="basis-1/12 inline-flex items-center">
					<div class="w-full pr-4"><Img :src="rightSvg" /></div>
				</div>
			</div>
		</a>
	</li>
</template>

<script>
import Img from '../dom-elements/Img.vue'

export default {
	components: {
		Img
	},
	props: {
		leftSvg: {
			type: String,
			default: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
		},
		rightSvg: {
			type: String,
			default: './assets/svg/other/chevron-right-black.svg'
		},
		header: {
			type: String,
			default: 'Calendar'
		},
		subHeader: {
			type: String,
			default: 'Your work schedule in one place'
		}
	}
}
</script>
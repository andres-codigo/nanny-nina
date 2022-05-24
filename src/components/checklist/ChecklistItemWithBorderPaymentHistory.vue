<template>
	<li>
		<div class="block relative z-10">
			<span class="inline-flex justify-center rounded-3xl absolute right-12 top-4 text-xs font-semibold bg-lilac-100 w-14  px-2 py-1">Paid</span>
		</div>
		<a class="block mb-2 border border-gray-100 rounded-20px hover:rounded-20px" href="#" target="_self">
			<div class="flex flex-row">
				<div class="basis-11/12">
					<div class="flex items-center py-6">
						<div class="mx-3">
							<Img :src="leftSvg" class="h-16  w-16 rounded-full mb-4" />
						</div>
						<div class="my-2">
							<div class="z-0">
								<p class="text-2xl text-purple-900 ">{{ header }}</p>
								<p class="text-sm font-medium">Total: <span class="text-lg font-bold"><slot name="totalAmount">&euro;185</slot></span></p>
								<p class="text-xs font-thin text-gray-500">{{ date }}</p>
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
			default: 'Sanders'
		},
		date: {
			type: String,
			default: '23/12/2021'
		}
	}
}
</script>
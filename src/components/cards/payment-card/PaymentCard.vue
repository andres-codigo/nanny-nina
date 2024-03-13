<template>
	<a
		href="#"
		target="_self"
		class="block rounded-30px bg-green-500 hover:shadow-lg hover:shadow-gray-50 focus:bg-green-600 text-gray-500 h-44 mb-16"
	>
		<div class="flex flex-row h-full">
			<div class="basis-11/12">
				<div class="flex items-center px-4 py-2">
					<div class="flex flex-col my-4 ml-2">
						<div class="flex flex-col">
							<slot name="details"
								><p
									class="text-sm text-purple-500 font-medium antialiased leading-none -mt-2"
								>
									Connect an account to receive money
								</p></slot
							>
							<h4
								class="text-header-four text-purple-500 font-bold mt-2"
							>
								{{ title }}
							</h4>
						</div>
					</div>
				</div>
			</div>
			<div class="basis-1/12 inline-flex items-center mr-4">
				<ImageComponent :src="img" class="w-6 h-6" />
			</div>
		</div>
	</a>
</template>

<script>
import ImageComponent from '../../dom-elements/ImageComponent.vue'

export default {
	components: {
		ImageComponent,
	},
	props: {
		title: {
			type: String,
			default: 'Add new account',
		},
		img: {
			type: String,
			default: './assets/svg/other/add-circle-outline-purple.svg',
		},
	},
}
</script>

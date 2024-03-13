<template>
	<li>
		<div
			:class="[
				'block mb-2 border border-gray-100 rounded-20px hover:rounded-20px hover:shadow-lg hover:shadow-gray-50',
				unblockUser ? 'bg-green-50' : 'bg-white',
			]"
		>
			<div class="flex flex-row mb-3">
				<div class="basis-11/12">
					<div class="flex items-center py-6">
						<div class="mx-3">
							<ImageComponent
								:src="leftSvg"
								class="h-16 w-16 rounded-full"
							/>
						</div>
						<div>
							<div class="z-0">
								<h6 class="text-header-six font-semibold pb-1">
									{{ header }}
								</h6>
								<p class="text-sm text-gray-500">
									{{ subHeader }}
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="basis-1/12 inline-flex items-center mr-4">
					<span
						:class="[
							'inline-flex justify-center rounded-3xl text-sm font-medium w-18 px-4 py-0.5',
							unblockUser ? 'bg-green-500' : 'bg-red text-white',
						]"
						>{{ unblockUser ? 'Unblock' : 'Blocked' }}</span
					>
				</div>
			</div>
		</div>
	</li>
</template>

<script>
import ImageComponent from '../dom-elements/ImageComponent.vue'

export default {
	components: {
		ImageComponent,
	},
	props: {
		unblockUser: {
			type: Boolean,
			default: false,
		},
		leftSvg: {
			type: String,
			default:
				'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
		header: {
			type: String,
			default: 'The Sanders',
		},
		subHeader: {
			type: String,
			default: '23/12/2022',
		},
	},
}
</script>

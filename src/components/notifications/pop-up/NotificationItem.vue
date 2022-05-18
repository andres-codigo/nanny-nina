<template>
	<li>
		<span :class="['block w-full border border-gray-100 rounded-20px min-h-pop-up-notification mb-2 py-4', backgroundColor]">
			<div class="flex px-4 py-2">
				<div class="pt-2 flex-shrink-0 relative">
					<slot name="iconLeft"></slot>
				</div>
				<div class="my-4 ml-2 mr-2">
					<div>
						<h5 class="text-header-five text-purple-900 font-semibold antialiased -mt-2">{{ title }}</h5>
						<slot name="description"></slot>
					</div>
				</div>
			</div>
		</span>
	</li>
</template>

<script>
export default {
	props: {
		backgroundColor: {
			type: String,
			default: 'bg-green-500'
		},
		title: {
			type: String,
			default: 'Need Nanny Near Sloterdijk tomorrow'
		},
		description: {
			type: String,
			default: ''
		}
	}
}
</script>
<template>
	<div class="flex items-center justify-between mb-6">
		<span class="flex flex-col">
			<span
				:id="stringToLowercaseAndHyphens(title) + '-label'"
				class="font-medium antialiased"
				>{{ title }}</span
			>
		</span>
		<button
			type="button"
			:class="[
				'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
				toggleOff
					? 'bg-gray-500 focus:ring-gray-500'
					: 'bg-purple-500 focus:ring-indigo-500',
			]"
			role="switch"
			aria-checked="false"
			:aria-labelledby="stringToLowercaseAndHyphens(title) + '-label'"
			:aria-describedby="
				stringToLowercaseAndHyphens(title) + '-description'
			"
		>
			<span
				aria-hidden="true"
				:class="[
					'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
					toggleOff ? 'translate-x-0' : 'translate-x-5',
				]"
			></span>
		</button>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: 'New Invites',
		},
		toggleOff: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		stringToLowercaseAndHyphens(title) {
			return title.replace(/\s+/g, '-').toLowerCase()
		},
	},
}
</script>

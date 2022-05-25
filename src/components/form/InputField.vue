<!-- TODO: text color for label and input; hover & focus behavior for input -->
<template>
	<label for="email" class="block text-sm font-light text-purple-800 pl-4">{{ text }}</label>
	<div class="relative mt-0">
		<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" v-if="hasLeadingIcon">
			<CalendarIcon class="w-5 h-5 text-gray-700" v-if="inputIconType === 'calendar'" />
		</div>
		<input
			id="email"
			name="email"
			:type="type"
			autocomplete="email"
			required=""
			:placeholder="placeholder"
			:value="value"
			:class="['appearance-none block w-full border py-2 border-gray-400 rounded-full text-gray-600 focus:outline-none focus:ring-0 focus:ring-purple-500 focus:border-purple-500',
					hasLeadingIcon && inputIconType !== '' ? 'pl-10 pr-3' : 'px-3', inputClasses
			]"
		>
	</div>
</template>

<script>
import { CalendarIcon, ClockIcon } from '@heroicons/vue/outline'

export default {
	components: {
		CalendarIcon,
		ClockIcon
	},
	props: {
		text: String,
		type: String,
		value: String,
		placeholder: String,
		hasLeadingIcon: {
			type: Boolean,
			default: false
		},
		inputIconType: {
			type: String,
			default: ''
		},
		inputClasses: {
			type: String,
			default: ''
		}
	}
}
</script>
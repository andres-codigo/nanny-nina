<template>
	<label for="phone-number" class="block text-sm font-light text-purple-800 pl-4">Phone number</label>
	<div :class="['mt-0 flex rounded-md', showButton ? '' : '']">
		<label for="international-area-code" class="sr-only">International Area Code</label>
		<select
			id="international-area-code"
			name="international-area-code"
			:class="['inline-flex items-center px-3 rounded-l-full border border-r-0 border-gray-400 focus:outline-none focus:ring-0', showButton ? 'w-24' : 'w-32']">
				<option selected>+31 NL</option>
				<option>+61 AUS</option>
		</select>

		<div class="relative w-full" v-if="showButton">
			<input
				type="text"
				name="phone-number"
				id="phone-number"
				placeholder="Enter number"
				class="
					appearance-none block w-[97%]
					px-3 py-3
					border border-gray-400
					rounded-r-full
					text-sm	text-gray-600
					focus:outline-none focus:ring-0 focus:border-purple-500">
			<ButtonPrimary text="Send SMS" class="w-button-input-sms text-xl min-h-[45px] py-3 absolute top-0 left-[55%]" />
		</div>

		<input
			v-else
			type="text"
			name="phone-number"
			id="phone-number"
			placeholder="Enter number"
			class="
				appearance-none block w-full
				px-3 py-3
				border border-gray-400
				rounded-r-full
				text-sm	text-gray-600
				focus:outline-none focus:ring-0 focus:border-purple-500">
	</div>
</template>

<script>
import ButtonPrimary from '../buttons/ButtonPrimary.vue'

export default {
	components: {
		ButtonPrimary
	},
	props: {
		showButton: {
			type: Boolean,
			default: false
		}
	}
}
</script>

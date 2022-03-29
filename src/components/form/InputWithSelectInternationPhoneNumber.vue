<template>
	<label for="phone-number" class="block text-xs font-light text-gray-700 pl-4">Phone number</label>
	<div class="mt-0 flex rounded-md">
		<label for="international-area-code" class="sr-only">International Area Code</label>
		<select
			id="international-area-code"
			name="international-area-code"
			class="
				w-32
				inline-flex items-center
				px-3
				rounded-l-full
				border border-r-0 border-gray-400
				focus:outline-none focus:ring-0">
				<option selected>+31 NL</option>
				<option>+61 AUS</option>
		</select>
		<input
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
				focus:outline-none focus:ring-0 focus:ring-purple-500 focus:border-purple-500">
	</div>
</template>
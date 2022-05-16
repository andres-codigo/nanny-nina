<template>
	<div class="flex flex-col">
		<a href="#" class="flex bg-green-500 hover:bg-green-300 focus:bg-green-400 py-4 px-4">
			<div class="inline-flex grow items-center justify-center font-bold">{{ title }}</div>
		</a>
		<div class="grid grid-cols-2 gap-4 gap-x-2 py-6">
			<div><ButtonGhost text="Ignore" /></div>
			<div><PrimaryButton text="Match" class="w-button-sm py-4" /></div>
		</div>
	</div>
</template>

<script>
import ButtonGhost from '../../buttons/ButtonGhost.vue'
import PrimaryButton from '../../buttons/ButtonPrimary.vue'

export default {
	components: {
		ButtonGhost,
		PrimaryButton
	},
	props: {
		title: {
			type: String,
			default: 'Have A Chat >'
		},
	}
}
</script>
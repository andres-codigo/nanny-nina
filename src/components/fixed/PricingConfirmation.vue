<template>
	<div class="flex flex-col">
		<div class="flex bg-green-500 font-bold py-4 px-4">
			<div class="basis-1/2">My Budget</div>
			<div class="basis-1/2 items-center">
				<span class="float-right">&euro;300-350</span>
			</div>
		</div>
		<div class="grid grid-cols-2 gap-4 gap-x-2 py-6">
			<div><ButtonGhost text="Cancel" /></div>
			<div><PrimaryButton text="Complete" class="w-button-sm py-4" /></div>
		</div>
	</div>
</template>

<script>
import ButtonGhost from '../buttons/ButtonGhost.vue'
import PrimaryButton from '../buttons/ButtonPrimary.vue'

export default {
	components: {
		ButtonGhost,
		PrimaryButton
	}
}
</script>
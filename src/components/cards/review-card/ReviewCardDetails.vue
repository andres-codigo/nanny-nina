<template>
	<div class="flex mb-2">
		<div class="basis-2/3">
			<div class="grid grid-rows-2">
				<div class="font-semibold mb-0">{{ user }}</div>
				<div class="text-xs text-gray-500 leading-none">{{ numberOfKids }}</div>
			</div>
		</div>
		<div class="basis-1/3 mr-1">
			<div class="float-right">
				<div class="grid grid-cols-5 mt-1">
					<div><Img src="./assets/svg/stars/star-solid-gold.svg" /></div>
					<div><Img src="./assets/svg/stars/star-solid-gold.svg" /></div>
					<div><Img src="./assets/svg/stars/star-solid-gold.svg" /></div>
					<div><Img src="./assets/svg/stars/star-solid-gold.svg" /></div>
					<div><Img src="./assets/svg/stars/star-solid-gold.svg" /></div>
				</div>
			</div>
		</div>
	</div>
	<p :class="class">One of the best homes I ever visited, She is such a great professional. Very nice kids, she is careful and kind, and never gets tired of playing with them!</p>
	<div class="float-right text-xs text-gray-500 pr-1">{{ date }}</div>
</template>

<script>
import Img from '../../dom-elements/Img.vue'

export default {
	components: {
		Img
	},
	props: {
		class:  {
			type: String,
			default: ''
		},
		user: {
			type: String,
			default: 'Sophie D'
		},
		date:  {
			type: String,
			default: '24/03/2021'
		},
		numberOfKids:  {
			type: String,
			default: '2kids (3,5yrs)'
		}
	}
}
</script>
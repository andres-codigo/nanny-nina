<template>
	<div class="flex flex-col justify-center h-screen bg-green-500">
		<div class="flex justify-center">
			<Img class="inline mr-1 h-8 w-8" src="./assets/svg/logo/alternate-logo.svg" alt="" />
			<Img class="inline h-8 w-8" src="./assets/svg/logo/alternate-logo.svg" alt="" />
		</div>
		<div class="flex justify-center">
			<Img class="object-center w-28 h-12" src="./assets/svg/logo/logo.svg" alt="" />
		</div>
	</div>
</template>

<script>
import Img from '../../components/dom-elements/Img.vue'

export default {
	components: {
		Img
	},
	created() {
		setTimeout(() => {
			this.$router.push('/dashboard');
		}, 2000)
	}
}
</script>
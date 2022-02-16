<script setup>
import Launch from './pages/Launch.vue'
import LoginIn from './pages/Login.vue'
</script>

<template>
	<header class="leading-normal">
		<div class="wrapper"></div>
	</header>

	<main>
		<div :class="hideLaunchPage ? 'hidden' : 'h-screen bg-green-200'">
			<Launch />
		</div>
		<div :class="hideLoginPage ? 'hidden' : 'flex justify-center'">
			<LoginIn />
		</div>
	</main>
</template>

<script>
export default {
	data() {
		return {
			hideLaunchPage: false,
			hideLoginPage: true
		}
	},

	created() {
		setTimeout(() => {
			this.hideLaunchPage = false;
			this.hideLoginPage = true;
		}, 2000)
	}
}
</script>
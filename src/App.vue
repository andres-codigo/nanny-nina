<script setup>
import HeaderLogo from './components/HeaderLogo.vue'
import Launch from './pages/Launch.vue'
import LoginIn from './pages/Login.vue'
</script>

<template>
	<header>
		<HeaderLogo :class="hideLoginPage ? 'hidden' : ''" />
	</header>

	<main>
		<Launch :class="hideLaunchPage ? 'hidden' : ''" />
		<LoginIn :class="hideLoginPage ? 'hidden' : ''" />
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
			this.hideLaunchPage = true;
			this.hideLoginPage = false;
		}, 2000)
	}
}
</script>
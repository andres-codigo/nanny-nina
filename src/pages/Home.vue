<script setup>
import Header from '../components/Header.vue'
import Launch from './Launch.vue'
import LoginIn from './Login.vue'
</script>

<template>
	<Header :class="hideLoginPage ? 'hidden' : ''" />
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
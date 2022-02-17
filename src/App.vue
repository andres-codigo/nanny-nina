<script setup>
import Launch from './pages/Launch.vue'
</script>

<template>
	<Launch :class="hideLaunchPage ? 'hidden' : ''" />
	<router-view></router-view>
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
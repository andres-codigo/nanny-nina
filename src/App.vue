<template>
	<router-view></router-view>
</template>

<script>
export default {
	created() {
		setTimeout(() => {
			this.$router.push('/home');
		}, 2000)
	}
}
</script>
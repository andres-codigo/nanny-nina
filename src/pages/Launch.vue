<template>
	<div class="flex flex-col justify-center h-screen bg-emerald-200">
		<div class="flex justify-center">
			<img class="inline mr-1 h-8 w-8" src="../assets/svg/logo/alternate-logo.svg" />
			<img class="inline h-8 w-8" src="../assets/svg/logo/alternate-logo.svg" />
		</div>
		<div class="flex justify-center">
			<img class="object-center w-28 h-12" src="../assets/svg/logo/logo.svg" />
		</div>
	</div>
</template>

<script>
export default {
	created() {
		setTimeout(() => {
			this.$router.push('/dashboard');
		}, 2000)
	}
}
</script>
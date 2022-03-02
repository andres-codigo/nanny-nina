<template>
	<div class="onBoarding fade">
		<img :src="svg">
	</div>
</template>

<script>
export default {
  props: {
    svg: String
  }
}
</script>
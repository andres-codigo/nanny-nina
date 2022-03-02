<template>
	<span
		:class="
			['dot cursor-pointer h-4 w-4 my-0 inline rounded-full',
			backgroundColor,
			backgroundColorHover]"></span>
</template>

<script>
export default {
  props: {
    backgroundColor: String,
	backgroundColorHover: String,
  }
}
</script>
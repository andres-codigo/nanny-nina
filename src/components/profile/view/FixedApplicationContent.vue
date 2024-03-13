<template>
	<FixedBottomContentAndButton anchor-text="Apply">
		<template #topText
			><span class="text-2xl font-bold">&euro;13-15</span>/hr</template
		>
		<template #bottomText>2km away</template>
	</FixedBottomContentAndButton>
</template>

<script>
import FixedBottomContentAndButton from '../../content/fixed/FixedBottomContentAndButton.vue'

export default {
	components: {
		FixedBottomContentAndButton,
	},
}
</script>

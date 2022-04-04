<template>
	<div class="w-full h-screen">
		<HomeTemplate />
		<footer>
			<BottomMenu />
		</footer>
	</div>
</template>

<script>
import HomeTemplate from './HomeTemplate.vue'
import BottomMenu from '../../../components/menu/BottomMenu.vue'

export default {
	components: {
		HomeTemplate,
		BottomMenu
	}
}
</script>
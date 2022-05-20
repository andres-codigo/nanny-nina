<template>
	<div class="w-full h-screen">
		<HomeTemplate />
		<ProfileMenu />
		<footer>
			<BottomMenu />
		</footer>
	</div>
</template>

<script>
import HomeTemplate from '../../00-duplicate-pages/home/HomeTemplate.vue'
import ProfileMenu from '../../../components/menu/ProfileMenu.vue'
import BottomMenu from '../../../components/menu/BottomMenu.vue'

export default {
	components: {
		HomeTemplate,
		ProfileMenu,
		BottomMenu
	}
}
</script>

<template>
	<div class="w-full h-screen">
		<HomeTemplate />
		<ProfileMenu />
		<footer>
			<CaregiverBottomMenu />
		</footer>
	</div>
</template>

<script>
import HomeTemplate from '../../00-duplicate-pages/home/HomeTemplate.vue'
import ProfileMenu from '../../../components/menu/ProfileMenu.vue'
import CaregiverBottomMenu from '../../../components/menu/CaregiverBottomMenu.vue'

export default {
	components: {
		HomeTemplate,
		ProfileMenu,
		CaregiverBottomMenu
	}
}
</script>

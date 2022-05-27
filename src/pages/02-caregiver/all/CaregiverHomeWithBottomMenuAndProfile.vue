<template>
	<div class="w-full">
		<HomeTemplate />
		<ProfileMenu :isHostMenu="false" />
		<footer>
			<CaregiverBottomMenu
				:isHomeSelected="false"
				:isProfileSelected="true"
			/>
		</footer>
	</div>
</template>

<script>
import HomeTemplate from '../../00-duplicate-pages/home/HomeTemplate.vue'
import ProfileMenu from '../../../components/menu/profile/ProfileMenu.vue'
import CaregiverBottomMenu from '../../../components/menu/CaregiverBottomMenu.vue'

export default {
	components: {
		HomeTemplate,
		ProfileMenu,
		CaregiverBottomMenu
	}
}
</script>

<template>
	<div class="w-full">
		<HomeTemplate />
		<ProfileMenu :is-host-menu="false" />
		<footer>
			<CaregiverBottomMenu
				:is-home-selected="false"
				:is-profile-selected="true"
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
		CaregiverBottomMenu,
	},
}
</script>

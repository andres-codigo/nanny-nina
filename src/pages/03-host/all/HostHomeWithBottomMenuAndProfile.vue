<template>
	<div class="w-full">
		<HomeTemplate />
		<ProfileMenu :isHostMenu="true" />
		<footer>
			<HostBottomMenu
				:isHomeSelected="false"
				:isMoreSelected="true"
			/>
		</footer>
	</div>
</template>

<script>
import HomeTemplate from '../../00-duplicate-pages/home/HomeTemplate.vue'
import ProfileMenu from '../../../components/menu/profile/ProfileMenu.vue'
import HostBottomMenu from '../../../components/menu/HostBottomMenu.vue'

export default {
	components: {
		HomeTemplate,
		ProfileMenu,
		HostBottomMenu
	}
}
</script>

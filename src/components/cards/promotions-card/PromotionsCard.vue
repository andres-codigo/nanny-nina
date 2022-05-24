<template>
	<div class="inline-flex w-full border border-gray-500 hover:border hover:border-gray-500 rounded-3xl mb-4">
		<a href="/" target="_self" class="w-full h-52 focus:opacity-60">
			<div :class="['flex flex-row rounded-t-3xl', backgroundColor]">
				<div class="inline-flex grow justify-center items-center h-24 text-5xl font-bold">
				<slot name="promotionalHeader">+€3/hr</slot>
				</div>
			</div>
			<div class="h-28  mx-4">
				<div class="flex flex-col mt-2 mb-4">
					<BadgeBookingType :badgeText="badgeText" :badgeSvg="badgeSvg" :badgeClass="badgeClass" />
					<h6 class="text-header-six font-semibold antialiased mt-4">{{ user }}</h6>
				</div>
			</div>
		</a>
	</div>
</template>

<script>
import BadgeBookingType from '../../badge/BadgeBookingType.vue'

export default {
	components: {
		BadgeBookingType
	},
	props: {
		backgroundColor: {
			type: String,
			default: 'bg-green-500'
		},
		badgeClass: String,
		badgeSvg: String,
		badgeText: String,
		user: String,
	}
}
</script>
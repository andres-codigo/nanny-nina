<template>
	<a
		href="#"
		target="_self"
		class="inline-flex w-full border border-gray-100 rounded-20px hover:shadow-lg hover:shadow-gray-50 mb-4"
	>
		<div class="w-full h-52">
			<div :class="['flex flex-row rounded-t-20px', backgroundColor]">
				<div
					class="inline-flex grow justify-center items-center h-24 text-5xl font-bold"
				>
					<slot name="promotionalHeader">+€3/hr</slot>
				</div>
			</div>
			<div class="h-28 mx-4">
				<div class="flex flex-col mt-2 mb-4">
					<BadgeBookingType
						:badge-text="badgeText"
						:badge-svg="badgeSvg"
						:badge-class="badgeClass"
					/>
					<h6 class="text-header-six font-semibold antialiased mt-4">
						{{ user }}
					</h6>
				</div>
			</div>
		</div>
	</a>
</template>

<script>
import BadgeBookingType from '../../badge/BadgeBookingType.vue'

export default {
	components: {
		BadgeBookingType,
	},
	props: {
		backgroundColor: {
			type: String,
			default: 'bg-green-500',
		},
		badgeClass: {
			type: String,
			default: '',
		},
		badgeSvg: {
			type: String,
			default: '',
		},
		badgeText: {
			type: String,
			default: '',
		},
		user: {
			type: String,
			default: '',
		},
	},
}
</script>

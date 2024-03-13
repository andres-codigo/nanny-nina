<template>
	<div class="my-6">
		<ul role="list">
			<li class="py-3 flex">
				<a href="#" target="_self" class="inline-flex w-full"
					><ImageComponent
						src="./assets/svg/menu/profile/profile.svg"
					/><span class="ml-3">Profile</span></a
				>
			</li>
			<li class="py-3 flex">
				<a href="#" target="_self" class="inline-flex w-full"
					><ImageComponent
						src="./assets/svg/menu/profile/payment.svg"
					/><span class="ml-3">Payment</span></a
				>
			</li>
			<li class="py-3 flex">
				<a href="#" target="_self" class="inline-flex w-full"
					><ImageComponent
						src="./assets/svg/menu/profile/checklist.svg"
					/><span class="ml-3">Checklist</span></a
				>
			</li>
			<li class="py-3 flex">
				<a href="#" target="_self" class="inline-flex w-full"
					><ImageComponent
						src="./assets/svg/menu/profile/saved.svg"
					/><span class="ml-3">{{
						isHostMenu ? 'Favourites' : 'Saved'
					}}</span></a
				>
			</li>
			<li class="py-3 flex">
				<a href="#" target="_self" class="inline-flex w-full"
					><ImageComponent
						src="./assets/svg/menu/profile/insurance.svg"
					/><span class="ml-3">Insurance</span></a
				>
			</li>
		</ul>
	</div>
</template>

<script>
import ImageComponent from '../../dom-elements/ImageComponent.vue'

export default {
	components: {
		ImageComponent,
	},
	props: {
		isHostMenu: {
			type: Boolean,
			default: false,
		},
	},
}
</script>

<template>
	<div class="my-6">
		<ul role="list">
			<li class="py-3 flex">
				<a href="#" target="_self" class="inline-flex w-full"><Img src="./assets/svg/menu/profile/profile.svg" /><span class="ml-3">Profile</span></a>
			</li>
			<li class="py-3 flex">
				<a href="#" target="_self" class="inline-flex w-full"><Img src="./assets/svg/menu/profile/payment.svg" /><span class="ml-3">Payment</span></a>
			</li>
			<li class="py-3 flex">
				<a href="#" target="_self" class="inline-flex w-full"><Img src="./assets/svg/menu/profile/my-documents.svg" /><span class="ml-3">My Documents</span></a>
			</li>
			<li class="py-3 flex">
				<a href="#" target="_self" class="inline-flex w-full"><Img src="./assets/svg/menu/profile/saved.svg" /><span class="ml-3">Saved</span></a>
			</li>
			<li class="py-3 flex">
				<a href="#" target="_self" class="inline-flex w-full"><Img src="./assets/svg/menu/profile/insurance.svg" /><span class="ml-3">Insurance</span></a>
			</li>
		</ul>
	</div>
</template>

<script>
import Img from '../../dom-elements/Img.vue'

export default {
	components: {
		Img
	}
}
</script>
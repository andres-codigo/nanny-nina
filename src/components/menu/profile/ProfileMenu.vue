<template>
	<div class="fixed inset-0 transition-opacity z-10">
		<div tabindex="0" class="absolute inset-0 bg-purple-900 opacity-50"></div>
	</div>
	<aside :class="isOpen ? 'translate-x-0' : '-translate-x-full'" class="transform top-0 left-0 w-2/3 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-10">
		<div class="mt-12 mx-4">
			<div class="mb-8">
				<Img class="h-20 w-20 rounded-full mb-4" :src="isHostMenu ? 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60' : 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'" />
				<h5 class="text-header-five font-semibold antialiased">{{ isHostMenu ? 'Janne Stindl' : 'Pleun Storme' }}</h5>
			</div>

			<Share :isHostMenu="isHostMenu" />
			<Menu :isHostMenu="isHostMenu" />

			<div class="flex items-center justify-between my-20 mr-4" v-if="!isHostMenu">
				<div class="flex flex-col">
					<span class="text-purple-900 font-thin" id="availability-label">Go offline</span>
					<p class="text-xs text-gray-500 font-light">I'm unavailable, don't share profile</p>
				</div>
				<!-- Enabled: "bg-purple-600", Not Enabled: "bg-gray-500" -->
				<button type="button" class="bg-gray-500 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" role="switch" aria-checked="false" aria-labelledby="availability-label" aria-describedby="availability-description">
					<!-- Enabled: "translate-x-6", Not Enabled: "translate-x-0" -->
					<span aria-hidden="true" class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"></span>
				</button>
			</div>

			<div :class="['mb-28 mr-4', isHostMenu ? 'mt-40' : 'mt-6']">
				<ul role="list">
					<li>
						<div class="flex flex-row w-full">
							<div class="inline-flex grow items-center">
								<Img src="./assets/svg/menu/profile/star.svg" />
								<div class="ml-3">Rate Us</div>
							</div>
							<div class="inline-flex items-center justify-end">
								<div class="rounded-2xl text-xs text-white bg-purple-500 px-2 py-0">V 2.0.0</div>
							</div>
						</div>
					</li>
					<li class="flex py-3">
						<a href="#" target="_self" class="inline-flex w-full"><Img src="./assets/svg/menu/profile/minus.svg" /><span class="ml-3 text-gray-500">Sign Out</span></a>
					</li>
				</ul>
			</div>
		</div>
	</aside>
</template>

<script>
import Share from './Share.vue'
import Menu from './Menu.vue'
import Img from '../../dom-elements/Img.vue'

export default {
	components: {
		Share,
		Menu,
		Img
	},
	props: {
		isOpen: {
			type: Boolean,
			default: true
		},
		isHostMenu: Boolean
	},
	watch: {
		isOpen: {
			immediate: true,
			handler(isOpen) {
				if (import.meta.env) {
					if (isOpen) {
						document.body.style.setProperty("overflow", "hidden")
					} else {
						document.body.style.removeProperty("overflow")
					}
				}
			}
		}
	}
}
</script>

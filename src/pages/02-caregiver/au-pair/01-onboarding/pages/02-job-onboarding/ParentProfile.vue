<template>
	<div class="w-full">
		<TopNavigation backgroundColor="bg-white" headerColor="text-purple-900" text="The Sanders">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-purple-900" aria-hidden="true" /></router-link></template>
			<template #profileImage>
				<div class="flex-none w-8 mr-2">
					<img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
				</div>
			</template>
			<template #iconRight><DotsVerticalIcon class="w-6 h-6 text-purple-900" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<div class="h-full flex flex-col mx-4 pb-40">
				<div class="relative justify-center">
					<span class="absolute right-2 top-2 w-6"><HeartIcon class="w-6 h-6 text-red-500" aria-hidden="true" /></span>
					<img src="https://images.unsplash.com/photo-1543721482-bc95ff1f1dea">
					<div class="flex justify-center">
						<div class="inline-flex absolute bottom-[0.5rem] rounded-3xl justify-center bg-green-500 space-x-3 py-2 px-3">
							<NavigationDot dotWidthAndHeight="h-2 w-2" backgroundColor="bg-purple-500 ring-4 ring-lilac-300" />
							<NavigationDot dotWidthAndHeight="h-2 w-2" backgroundColor="bg-purple-100" backgroundColorHover="hover:bg-purple-500 hover:ring-8 hover:ring-lilac-300" />
							<NavigationDot dotWidthAndHeight="h-2 w-2" backgroundColor="bg-purple-100" backgroundColorHover="hover:bg-purple-500 hover:ring-8 hover:ring-lilac-300" />
							<NavigationDot dotWidthAndHeight="h-2 w-2" backgroundColor="bg-purple-100" backgroundColorHover="hover:bg-purple-500 hover:ring-8 hover:ring-lilac-300" />
						</div>
					</div>
					<div class="inline-flex text-sm absolute bottom-[0.5rem] right-4 rounded-3xl justify-center bg-green-500 w-14">1/8</div>
				</div>

				<h5 class="text-header-five font-semibold antialiased mt-4 mb-2">Meet The Sanders</h5>
				<p class="inline-flex items-center text-sm font-light leading-none pb-2">Speaks English, Dutch <span class="h-1 w-1 bg-gray-500 rounded-full mx-1"></span>  <country-flag country='nl' size='small'/> <span class="pl-1">Amsterdam</span></p>
				<p class="inline-flex items-center text-sm font-light leading-none">Lawyer &amp; Accountant <span class="h-1 w-1 bg-gray-500 rounded-full mx-1"></span> Married</p>

				<Preferences class="mt-7" />
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../../components/navigation-and-tabs/TopNavigation.vue'
import NavigationDot from '../../../../../../components/carousel/NavigationDot.vue'
import Preferences from '../../../../../../components/profile/view/Preferences.vue'

import { ChevronLeftIcon, DotsVerticalIcon, HeartIcon } from '@heroicons/vue/solid'

/*
https://bestofvue.com/repo/P3trur0-vue-country-flag-vuejs-icons

VueJS3
npm install vue-country-flag-next

<country-flag country='nl' size='small'/>

This is a 'placeholder' flag package example, as I didn't want to spent too much time
finding the one used on the design as you may already have an npm package.

Do note the tailwind css classes used in the span to wrap and add an ellipsis on the language spoken
<span class="w-40 text-ellipsis overflow-hidden  whitespace-nowrap">Speak Dutch, English</span>
*/
import CountryFlag from 'vue-country-flag-next'

export default {
	components: {
		TopNavigation,
		NavigationDot,
		Preferences,
		HeartIcon,
		ChevronLeftIcon,
		DotsVerticalIcon,
		CountryFlag
	}
}
</script>
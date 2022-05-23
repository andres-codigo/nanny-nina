<template>
	<div class="w-full h-full">
		<TopNavigation text="Payment">
			<template #iconLeft><router-link to="'/dashboard?tab=1"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
			<template #iconRight><QuestionMarkCircleIcon class="w-6 h-6 text-green-500" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<Tabs
				tabOneClasses="text-purple-900"
				tabOneText="Account"
				:tabOneIsActive="true"
				tabTwoClasses="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
				tabTwoText="Earnings"
				:tabTwoIsActive="false"
				:displayThirdTab="true"
				tabThreeClasses="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
				tabThreeText="History"
				:tabThreeIsActive="false"
			/>

			<div class="flex flex-col mx-4">
				<div class="flex flex-col pt-6">
					<h4 class="text-header-four font-semibold antialiased mb-2">Account Set-up</h4>
					<p class="font-light antialiased">Replace or edit your payment account, For your safety, please get paid via the app.</p>
				</div>

				<div class="flex flex-col pt-6">
					<a href="#" target="_self" class="block rounded-30px bg-green-500 hover:bg-green-400 focus:bg-green-600 text-gray-500 h-44 mb-16">
						<div class="flex flex-row h-full">
							<div class="basis-11/12">
								<div class="flex items-center pl-4 py-2">
									<div class="flex flex-col my-4 ml-2">
										<div class="flex flex-col">
											<p class="inline-flex items-center text-sm text-purple-500 font-medium leading-none antialiased -mt-2">Connected account<Img src="./assets/svg/other/link-blue.svg" class="w-6 h-6" /></p>
											<h4 class="text-header-four text-purple-500 font-bold mt-2">ING **** **** **** 1603</h4>
										</div>
									</div>
								</div>
							</div>
							<div class="basis-1/12 inline-flex items-center mr-4">
								<Img src="./assets/svg/other/edit-blue-pencil.svg" class="w-6 h-6" />
							</div>
						</div>
					</a>

					<h4 class="text-header-four mb-4">Get Paid Via The App:</h4>
					<ul role="list">
						<li class="py-1 flex items-center">
							<Img src="./assets/svg/ticks-and-crosses/tick-blue-background.svg" class="w-5 h-5" />
							<div class="ml-2 leading-none font-thin">You're insured with Nanny Nina</div>
						</li>
						<li class="py-1 flex items-center">
							<Img src="./assets/svg/ticks-and-crosses/tick-blue-background.svg" class="w-5 h-5" />
							<div class="ml-2 leading-none font-thin">Increase your earnings with promotions</div>
						</li>
						<li class="py-1 flex items-center">
							<Img src="./assets/svg/ticks-and-crosses/tick-blue-background.svg" class="w-5 h-5" />
							<div class="ml-2 leading-none font-thin">Earn more badges to get more jobs</div>
						</li>
					</ul>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import Tabs from '../../../../../components/navigation-and-tabs/Tabs.vue'
import Img from '../../../../../components/dom-elements/Img.vue'

import { ChevronLeftIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Tabs,
		Img,
		ChevronLeftIcon,
		QuestionMarkCircleIcon
	}
}
</script>
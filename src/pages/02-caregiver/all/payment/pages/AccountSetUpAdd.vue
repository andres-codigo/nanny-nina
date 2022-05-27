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
					<PaymentCard />

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
import PaymentCard from '../../../../../components/cards/payment-card/PaymentCard.vue'
import Img from '../../../../../components/dom-elements/Img.vue'

import { ChevronLeftIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Tabs,
		PaymentCard,
		Img,
		ChevronLeftIcon,
		QuestionMarkCircleIcon
	}
}
</script>
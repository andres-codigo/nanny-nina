<template>
	<div class="w-full h-full">
		<TopNavigation text="Referrals">
			<template #iconLeft><router-link to="'/dashboard?tab=1"><ChevronLeftIcon class="w-8 h-8 text-white" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col mx-4">
				<div class="flex flex-col py-6">
					<h4 class="text-header-four font-semibold antialiased mb-2">Get free &euro;100</h4>
					<p class="font-light antialiased">Earn €100 each if they sign up and complete 10 occasional or permanent bookings. Share your code </p>
				</div>

				<div class="mb-10">
					<label for="referral-code" class="block text-xs font-semibold">Your code</label>
					<div class="mt-1 relative rounded-full">
						<input
							type="text"
							name="referral-code"
							id="referral-code"
							class="
								appearance-none block w-[97%]
								px-3 py-2
								border border-gray-400
								rounded-full
								text-gray-600
								focus:outline-none focus:ring-0 focus:border-purple-500">
						<div class="absolute inset-y-0 right-28 pr-3 flex items-center pointer-events-none">
							<span><Img src="./assets/svg/other/content-copy.svg" class="w-5 h-5" /></span>
							<ButtonPrimary text="Share" class="w-button-input-sms text-xl min-h-[42px] ml-2 py-2 absolute top-0 left-[55%]" />
						</div>
					</div>
				</div>

				<div class="flex flex-col pt-6">
					<h5 class="text-header-five mb-4">Referral details</h5>
					<dl class="divide-y divide-gray-50">
						<DescriptionListItem class="py-4" term="Total Rewards Earned">
							<template #termDescription>&euro;25</template>
						</DescriptionListItem>
						<DescriptionListItem class="py-4" term="Successful signups">
							<template #termDescription>2</template>
						</DescriptionListItem>
						<DescriptionListItem class="py-4" term="Signups with completed bookings">
							<template #termDescription>0</template>
						</DescriptionListItem>
						<DescriptionListItem class="py-4" term="Earnings per referral">
							<template #termDescription>&euro;50</template>
						</DescriptionListItem>
						<DescriptionListItem class="py-4" term="Referred Users">
							<template #termDescription>1</template>
						</DescriptionListItem>
						<DescriptionListItem class="py-4" term="Upcoming payout date">
							<template #termDescription>31/12/2021</template>
						</DescriptionListItem>
					</dl>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import Img from '../../../../../components/dom-elements/Img.vue'
import DescriptionListItem from '../../../../../components/dom-elements/DescriptionListItem.vue'
import ButtonPrimary from '../../../../../components/buttons/ButtonPrimary.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Img,
		DescriptionListItem,
		ButtonPrimary,
		ChevronLeftIcon
	}
}
</script>
<template>
	<div class="w-full h-full">
		<TopNavigation text="Referrals">
			<template #iconLeft
				><router-link to="'/dashboard?tab=1"
					><ChevronLeftIcon
						class="w-8 h-8 text-white"
						aria-hidden="true" /></router-link
			></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col mx-4">
				<div class="flex flex-col pt-6 pb-10">
					<h4 class="text-header-four font-semibold antialiased mb-2">
						Get free &euro;100
					</h4>
					<p class="font-light antialiased">
						Earn €100 each if they sign up and complete 10
						occasional or permanent bookings. Share your code
					</p>
				</div>

				<div class="mb-10">
					<label
						for="referral-code"
						class="block text-xs font-semibold sr-only"
						>Your code</label
					>
					<div
						class="flex flex-col justify-center items-center relative rounded-full mt-1 mb-6"
					>
						<input
							id="referral-code"
							type="text"
							name="referral-code"
							class="appearance-none block w-input-base px-3 py-2 border border-gray-400 rounded-full text-gray-600 focus:outline-none focus:ring-0 focus:border-purple-500"
						/>
						<div
							class="absolute inset-y-0 right-28 pr-3 flex items-center pointer-events-none"
						>
							<span
								><ImageComponent
									src="./assets/svg/other/content-copy.svg"
									class="w-5 h-5"
							/></span>
						</div>
					</div>
					<div class="flex flex-col justify-center items-center">
						<ButtonPrimary
							text="Share"
							classes="w-button-sm text-xl min-h-[42px] ml-2 py-2"
						/>
					</div>
				</div>

				<div class="pt-6">
					<h5 class="text-header-five mb-4">Referral details</h5>
					<div class="divide-y divide-gray-50">
						<PaymentDetailItem
							classes="py-4"
							item-details="Total Rewards Earned"
							><template #termDescription
								>&euro;25</template
							></PaymentDetailItem
						>
						<PaymentDetailItem
							classes="py-4"
							item-details="Successful signups"
							><template #termDescription
								>2</template
							></PaymentDetailItem
						>
						<PaymentDetailItem
							classes="py-4"
							item-details="Signups with completed bookings"
							><template #termDescription
								>0</template
							></PaymentDetailItem
						>
						<PaymentDetailItem
							classes="py-4"
							item-details="Earnings per referral"
							><template #termDescription
								>&euro;50</template
							></PaymentDetailItem
						>
						<PaymentDetailItem
							classes="py-4"
							item-details="Referred Users"
							><template #termDescription
								>1</template
							></PaymentDetailItem
						>
						<PaymentDetailItem
							classes="py-4"
							item-details="Upcoming payout date"
							><template #termDescription
								>31/12/2021</template
							></PaymentDetailItem
						>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import ImageComponent from '../../../../../components/dom-elements/ImageComponent.vue'
import PaymentDetailItem from '../../../../../components/dom-elements/PaymentDetailItem.vue'
import ButtonPrimary from '../../../../../components/buttons/ButtonPrimary.vue'

import { ChevronLeftIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		ImageComponent,
		PaymentDetailItem,
		ButtonPrimary,
		ChevronLeftIcon,
	},
}
</script>

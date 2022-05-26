<template>
	<div class="w-full h-full">
		<TopNavigation backgroundColor="bg-white-500" :displayBorderBottom="true">
			<template #iconRight><router-link to="/dashboard?tab=2"><XIcon class="w-8 h-8 text-purple-900" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col justify-center py-12 mx-4">
				<div class="mb-10">
					<h5 class="text-header-five font-semibold antialiased mb-2">Payment Details</h5>

					<Profile
						leftSvg="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
						member="Brittany (27)" />

					<div class="flex flex-row text-2xl mb-4 py-4 border-b border-gray-100">
						<div class="flex-1">Date</div>
						<div class="flex">Total</div>
					</div>

					<div>
						<ul role="list">
							<li><DayDetailsHeaderItemCollapsed /></li>
							<li>
								<div class="relative mb-8">
									<DayDetailsHeaderItemExpanded />
									<div class="bg-gray-50 rounded-t-20px hover:rounded-20px w-full pt-20 pb-4 px-4">
										<div class="flex flex-col w-full">
											<PaymentDetailItem :itemContainsPrice="true" class="py-2" itemDetails="Fee"><template #termDescription>&euro;25</template></PaymentDetailItem>
											<PaymentDetailItem class="py-0.5" itemDetails="Day"><template #termDescription>&euro;25</template></PaymentDetailItem>
											<PaymentDetailItem class="py-0.5" itemDetails="Night"><template #termDescription>&euro;57</template></PaymentDetailItem>
											<PaymentDetailItem class="pt-0.5 pb-4" itemDetails="Kids"><template #termDescription>&euro;16</template></PaymentDetailItem>
											<PaymentDetailItem :itemContainsPrice="true" class="border-dotted border-t-2 border-gray-100 py-1.5" itemDetails="Duration"><template #termDescription>6hrs 30mins</template></PaymentDetailItem>
											<PaymentDetailItem :itemContainsPrice="true" class="border-dotted border-t-2 border-gray-100 py-1.5" itemDetails="Time"><template #termDescription>09:00-16:00</template></PaymentDetailItem>
											<PaymentDetailItem :itemContainsPrice="true" class="border-dotted border-t-2 border-gray-100 py-1.5" itemDetails="Tip"><template #termDescription>&euro;1</template></PaymentDetailItem>
											<PaymentDetailItem :itemContainsPrice="true" class="border-dotted border-t-2 border-gray-100 py-1.5" itemDetails="Service fee"><template #termDescription>29%</template></PaymentDetailItem>
										</div>
									</div>
								</div>
							</li>
							<li><DayDetailsHeaderItemCollapsed date="Fri, 2nd December, 2021" price="55" /></li>
						</ul>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import Profile from '../../../../../components/payment/Profile.vue'
import DayDetailsHeaderItemCollapsed from '../../../../../components/payment/DayDetailsHeaderItemCollapsed.vue'
import DayDetailsHeaderItemExpanded from '../../../../../components/payment/DayDetailsHeaderItemExpanded.vue'
import PaymentDetailItem from '../../../../../components/dom-elements/PaymentDetailItem.vue'

import { XIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Profile,
		DayDetailsHeaderItemCollapsed,
		DayDetailsHeaderItemExpanded,
		PaymentDetailItem,
		XIcon
	}
}
</script>
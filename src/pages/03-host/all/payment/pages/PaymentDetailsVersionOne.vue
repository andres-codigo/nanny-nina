<template>
	<div class="w-full h-full">
		<TopNavigation backgroundColor="bg-white" :displayBorderBottom="true">
			<template #iconRight><router-link to="/dashboard?tab=2"><XIcon class="w-8 h-8 text-purple-900" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col justify-center py-12 mx-4">
				<div class="mb-10">
					<h5 class="text-header-five font-semibold antialiased mb-2">Payment Details</h5>

					<Profile
						leftSvg="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
						member="Brittany (27)" />

					<div class="flex flex-row text-2xl mb-8 py-4 border-b border-gray-100">
						<div class="flex-1">Date</div>
						<div class="flex">Total</div>
					</div>

					<div>
						<h4 class="text-header-four font-semibold antialiased mb-6">December</h4>
						<ul role="list">
							<li>
								<div class="relative mb-8">
									<DayDetailsHeaderItemExpanded price="35" />
									<div class="bg-gray-50 rounded-t-20px hover:rounded-20px w-full pt-20 pb-4 px-4">
										<div class="flex flex-col w-full">
											<PaymentDetailItem :itemContainsPrice="true" class="py-6" itemDetails="Pocket money & academy"><template #termDescription>&euro;340</template></PaymentDetailItem>
											<PaymentDetailItem :itemContainsPrice="true" class="border-dotted border-t-2 border-gray-100 py-6" itemDetails="Phone fee & Travel allowance"><template #termDescription>&euro;60</template></PaymentDetailItem>
											<PaymentDetailItem :itemContainsPrice="true" class="border-dotted border-t-2 border-gray-100 py-6" itemDetails="Language course"><template #termDescription>&euro;35</template></PaymentDetailItem>
											<div class="flex flex-col w-full items-end border-dotted border-t-2 border-gray-100 pt-6 pb-2">
												<ButtonOutlineDark class="inline-flex items-center w-button-download text-sm leading-none font-semibold py-2">
													<template #iconWithText>
														<Img class="w-4 h-4" src="./assets/svg/other/download-black.svg" alt="" />
														<span class="pl-2">Download</span>
													</template>
												</ButtonOutlineDark>
											</div>
										</div>
									</div>
								</div>
							</li>
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
import DayDetailsHeaderItemExpanded from '../../../../../components/payment/DayDetailsHeaderItemExpanded.vue'
import PaymentDetailItem from '../../../../../components/dom-elements/PaymentDetailItem.vue'
import ButtonOutlineDark from '../../../../../components/buttons/ButtonOutlineDark.vue'
import Img from '../../../../../components/dom-elements/Img.vue'

import { XIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Profile,
		DayDetailsHeaderItemExpanded,
		PaymentDetailItem,
		ButtonOutlineDark,
		Img,
		XIcon
	}
}
</script>
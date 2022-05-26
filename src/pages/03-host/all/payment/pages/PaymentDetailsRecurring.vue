<template>
	<div class="w-full h-full">
		<TopNavigation backgroundColor="bg-white-500" :displayBorderBottom="true">
			<template #iconRight><router-link to="/dashboard?tab=2"><XIcon class="w-8 h-8 text-purple-900" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col justify-center py-12 mx-4">
				<div class="mb-10">
					<h5 class="text-header-five font-semibold antialiased mb-2">Payment Details</h5>

					<Profile :showDescription="false" member="Membership" />

					<div class="flex flex-row text-2xl mb-4 py-4 border-b border-gray-100">
						<div class="flex-1">Date</div>
						<div class="flex">Total</div>
					</div>

					<h4 class="text-header-four font-semibold antialiased mt-8 mb-6">December</h4>

					<ul role="list">
						<li>
							<div class="relative mb-8">
								<DayDetailsHeaderItemExpanded price="35" />
								<div class="bg-gray-50 rounded-t-20px hover:rounded-20px w-full pt-20 pb-4 px-4">
									<div class="flex flex-col w-full">
										<PaymentDetailItem :showPrice="false" :isBold="true" class="py-6" term="Screened and selectable nannies" />
										<PaymentDetailItem :showPrice="false" :isBold="true" class="border-dotted border-t-2 border-gray-100 py-6" term="Place unlimited bookings" />
										<PaymentDetailItem :showPrice="false" :isBold="true" class="border-dotted border-t-2 border-gray-100 py-6" term="Find last minute nannies" />
										<PaymentDetailItem :showPrice="false" :isBold="true" class="border-dotted border-t-2 border-gray-100 py-6" term="Insurance" />
										<PaymentDetailItem :showPrice="false" :isBold="true" class="border-dotted border-t-2 border-gray-100 py-6" term="Easy payment, no hassle" />
										<PaymentDetailItem :showPrice="false" :isBold="true" class="border-dotted border-t-2 border-gray-100 py-6" term="Instant calls/messages to responses " />
										<PaymentDetailItem :showPrice="false" :isBold="true" class="border-dotted border-t-2 border-gray-100 py-6" term="Monthly terminable" />
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
						<li><DayDetailsHeaderItemCollapsed date="Fri, 2nd December, 2021" price="45" /></li>
					</ul>
				</div>
				<div class="mb-10">
					<h4 class="text-header-four font-semibold antialiased mb-2">Cancellation</h4>
					<p class="text-sm font-light antialiased">You currently have an active nanny match! Is the nanny no longer working with you? Please <a href="#" target="_self" class="anchor-blue anchor-with-underline">contact support</a> so we can plan the final evaluation and recommend a new family to your nanny </p>
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
import ButtonOutlineDark from '../../../../../components/buttons/ButtonOutlineDark.vue'
import Img from '../../../../../components/dom-elements/Img.vue'

import { XIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		Profile,
		DayDetailsHeaderItemCollapsed,
		DayDetailsHeaderItemExpanded,
		PaymentDetailItem,
		ButtonOutlineDark,
		Img,
		XIcon
	}
}
</script>
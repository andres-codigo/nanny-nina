<template>
	<div class="w-full h-full">
		<TopNavigation backgroundColor="bg-white-500" :displayBorderBottom="true">
			<template #iconRight><router-link to="/dashboard?tab=2"><XIcon class="w-8 h-8 text-purple-900" aria-hidden="true" /></router-link></template>
		</TopNavigation>
		<main>
			<div class="flex flex-col justify-center py-12 mx-4">
				<div class="mb-10">
					<h5 class="text-header-five font-semibold antialiased mb-2">Payment Details</h5>

					<div class="flex flex-row py-6">
						<div class="mx-3">
							<Img :src="leftSvg" class="h-20 w-20 rounded-full mb-4" />
						</div>
						<div class="pt-1">
							<p class="text-2xl text-purple-900 mb-4">Membership</p>
							<ButtonOutlineDark class="inline-flex items-center w-button-download text-sm leading-none font-semibold py-2">
								<template #iconWithText>
									<Img class="w-4 h-4" src="./assets/svg/other/download-black.svg" alt="" />
									<span class="pl-2">Download</span>
								</template>
							</ButtonOutlineDark>
						</div>
					</div>

					<h4 class="text-header-four font-semibold antialiased mb-2">December</h4>
					<div class="flex flex-row text-2xl mb-4 py-4 border-b border-gray-100">
						<div class="flex-1">Date</div>
						<div class="flex">Total</div>
					</div>

					<ul role="list">
						<li>
							<div class="relative mb-8">
								<div class="flex flex-row w-full absolute bg-lilac-100 border border-gray-500 rounded-20px hover:rounded-20px px-4 z-10">
									<div class="basis-11/12">
										<div class="flex items-center py-6">
											<div class="basis-11/12">
												<p class="text-purple-900">Thur, 1st December, 2021</p>
											</div>
											<div class="basis-1/12 pr-4">
												<p class="text-purple-900 float-right">&euro;35</p>
											</div>
										</div>
									</div>
									<div class="basis-1/12 inline-flex items-center">
										<div class="w-full pr-4"><Img src="./assets/svg/other/chevron-up-gray.svg" /></div>
									</div>
								</div>
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
						<li>
							<div class="flex flex-row mb-2 border border-gray-100 rounded-20px hover:rounded-20px px-4">
								<div class="basis-11/12">
									<div class="flex items-center py-6">
										<div class="basis-11/12">
											<p class="text-purple-900">Wed, 31st November, 2021</p>
										</div>
										<div class="basis-1/12 pr-4">
											<p class="text-purple-900 float-right">&euro;85</p>
										</div>
									</div>
								</div>
								<div class="basis-1/12 inline-flex items-center">
									<div class="w-full pr-4"><Img src="./assets/svg/other/chevron-down-gray.svg" /></div>
								</div>
							</div>
						</li>
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
import ButtonOutlineDark from '../../../../../components/buttons/ButtonOutlineDark.vue'
import PaymentDetailItem from '../../../../../components/dom-elements/PaymentDetailItem.vue'

import { XIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		ButtonOutlineDark,
		PaymentDetailItem,
		XIcon
	},
	props: {
		leftSvg: {
			type: String,
			default: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
		},
	}
}
</script>
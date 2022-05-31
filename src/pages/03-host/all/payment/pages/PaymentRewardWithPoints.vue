<template>
	<div class="w-full h-full">
		<TopNavigation text="Payment" />
		<main>
			<Tabs
				tabOneClasses="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
				tabOneText="Payment History"
				:tabOneIsActive="false"
				tabTwoClasses="text-purple-900"
				tabTwoText="Reward"
				:tabTwoIsActive="true"
			/>

			<div class="flex flex-col mx-4">
				<div class="pt-6 mb-10">
					<h4 class="text-header-four font-semibold antialiased mb-2">Almost there Janne!</h4>
					<p class="font-light antialiased">You don't have any points yet, place a booking to begin earning.</p>
				</div>

				<div class="mb-12">
					<div class="w-full">
						<div class="text-gray-500 font-semibold mb-1">50<span class="text-purple-500">/200 points</span></div>

						<ol role="list" class="flex">
							<!-- Points remaining to be gained step -->
							<PointsBarItem :pointsGained="true" />

							<!-- Points remaining to be gained step -->
							<PointsBarItem :pointsToBeGained="true" pointsGainedText="100 Points Gained" />

							<!-- Points remaining to be gained step -->
							<PointsBarItem pointsGainedText="150 Points Gained" />

							<!-- Points remaining to be gained step -->
							<PointsBarItem pointsGainedText="200 Points Gained" />

							<!-- Points remaining to be gained step/no gray bar -->
							<PointsBarItem :isLastStep="true" pointsGainedText="250 Points Gained" />
						</ol>
					</div>
				</div>

				<div class="flex flex-col mb-24">
					<h4 class="text-header-four font-semibold antialiased mb-2">Vouchers</h4>
					<div class="grid grid-cols-2 gap-4">
						<div>
							<div class="flex w-full border border-gray-500 rounded-20px">
								<div class="w-full">
									<div :class="['flex flex-row rounded-t-20px h-24', backgroundColor]">
										<div class="inline-flex grow justify-center items-center text-5xl font-bold">
											<slot name="promotionalHeader">-10%</slot>
										</div>
									</div>
									<div class="bg-white rounded-b-20px">
										<div class="flex flex-col items-center justify-center pt-2 pb-4">
											<h6 class="text-header-six font-bold antialiased mt-4">Claim</h6>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div>
							<div class="flex w-full border border-gray-500 rounded-20px">
								<div class="w-full">
									<div :class="['flex flex-row rounded-t-20px h-24', backgroundColor]">
										<div class="inline-flex grow justify-center items-center text-5xl font-bold">
											<slot name="promotionalHeader">-20%</slot>
										</div>
									</div>
									<div class="bg-white rounded-b-20px">
										<div class="flex flex-col items-center justify-center pt-2 pb-4">
											<h6 class="text-header-six font-bold antialiased mt-4">Claim</h6>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="mb-10">
					<h4 class="inline-flex text-header-four font-semibold antialiased mb-8 pr-2">How to earn<Img src="./assets/svg/other/chevron-up-black.svg" /></h4>

					<div class="flex flex-col gap-6">
						<div>
							<span class="block h-6 w-6 rounded-full mb-2 bg-lilac-100">&nbsp;</span>
							<h6 class="text-header-six font-semibold antialiased mb-2">Paying via app</h6>
							<p class="font-light antialiased">You earn points per booking completed on the app. You can either use this discount points or gift them to another parent.</p>
						</div>
						<div>
							<span class="block h-6 w-6 rounded-full mb-2 bg-lilac-100">&nbsp;</span>
							<h6 class="text-header-six font-semibold antialiased mb-2">Invite a friend</h6>
							<p class="font-light antialiased"><a href="#" target="_self" class="anchor-blue anchor-with-underline">Invite a friend</a> to register and receive 30pts on their first booking.</p>
						</div>
						<div>
							<span class="block h-6 w-6 rounded-full mb-2 bg-lilac-100">&nbsp;</span>
							<h6 class="text-header-six font-semibold antialiased mb-2">Submit a review</h6>
							<p class="font-light antialiased">Submit a review after a booking and get 10pts.</p>
						</div>
						<div>
							<span class="block h-6 w-6 rounded-full mb-2 bg-lilac-100">&nbsp;</span>
							<h6 class="text-header-six font-semibold antialiased mb-2">Other!</h6>
							<p class="font-light antialiased">You can receive points for disputes and corrections.</p>
						</div>
					</div>
				</div>

				<div class="pt-6">
					<h4 class="text-header-four font-semibold antialiased mb-4">Points history</h4>
					<div class="divide-y divide-gray-50">
						<PaymentDetailItem class="py-4" itemDetails="Booking via app"><template #termDescription>5</template></PaymentDetailItem>
						<PaymentDetailItem class="py-4" itemDetails="Invite"><template #termDescription>2</template></PaymentDetailItem>
						<PaymentDetailItem class="py-4" itemDetails="Reviews"><template #termDescription>0</template></PaymentDetailItem>
						<PaymentDetailItem class="py-4" itemDetails="Other"><template #termDescription>0</template></PaymentDetailItem>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigationPayment from '../../../../../components/navigation-and-tabs/TopNavigationPayment.vue'
import Tabs from '../../../../../components/navigation-and-tabs/Tabs.vue'
import PointsBarItem from '../../../../../components/points-bar/PointsBarItem.vue'
import Img from '../../../../../components/dom-elements/Img.vue'
import PaymentDetailItem from '../../../../../components/dom-elements/PaymentDetailItem.vue'

export default {
	components: {
		TopNavigationPayment,
		Tabs,
		PointsBarItem,
		Img,
		PaymentDetailItem
	},
	props: {
		backgroundColor: {
			type: String,
			default: 'bg-purple-50'
		}
	}
}
</script>
<template>
	<div class="w-full h-full">
		<TopNavigation text="Payment" />
		<main>
			<Tabs
				tab-one-classes="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
				tab-one-text="Payment History"
				:tab-one-is-active="false"
				tab-two-classes="text-purple-900"
				tab-two-text="Reward"
				:tab-two-is-active="true"
			/>

			<div class="flex flex-col mx-4">
				<div class="pt-6 mb-10">
					<h4 class="text-header-four font-semibold antialiased mb-2">
						Almost there Janne!
					</h4>
					<p class="font-light antialiased">
						You don't have any points yet, place a booking to begin
						earning.
					</p>
				</div>

				<div class="mb-12">
					<div class="w-full">
						<div class="text-gray-500 font-semibold mb-1">
							0 points
						</div>

						<ol role="list" class="flex">
							<!-- Points remaining to be gained step -->
							<PointsBarItem />

							<!-- Points remaining to be gained step -->
							<PointsBarItem
								points-gained-text="100 Points Gained"
							/>

							<!-- Points remaining to be gained step -->
							<PointsBarItem
								points-gained-text="150 Points Gained"
							/>

							<!-- Points remaining to be gained step -->
							<PointsBarItem
								points-gained-text="200 Points Gained"
							/>

							<!-- Points remaining to be gained step/no gray bar -->
							<PointsBarItem
								:is-last-step="true"
								points-gained-text="250 Points Gained"
							/>
						</ol>
					</div>
				</div>

				<div class="mb-10">
					<h4 class="text-header-four font-semibold antialiased mb-2">
						Vouchers
					</h4>
					<p class="font-light antialiased">
						You don't have any vouchers yet, place a booking to get
						discounts
					</p>
				</div>

				<div class="inline-flex mb-10">
					<h4 class="text-header-four font-semibold antialiased pr-2">
						How to earn
					</h4>
					<ImageComponent
						src="./assets/svg/other/chevron-down-black.svg"
					/>
				</div>

				<div class="pt-6">
					<h4 class="text-header-four font-semibold antialiased mb-4">
						Points history
					</h4>
					<div class="divide-y divide-gray-50">
						<PaymentDetailItem
							classes="py-4"
							item-details="Booking via app"
							><template #termDescription
								>0</template
							></PaymentDetailItem
						>
						<PaymentDetailItem classes="py-4" item-details="Invite"
							><template #termDescription
								>0</template
							></PaymentDetailItem
						>
						<PaymentDetailItem classes="py-4" item-details="Reviews"
							><template #termDescription
								>0</template
							></PaymentDetailItem
						>
						<PaymentDetailItem classes="py-4" item-details="Other"
							><template #termDescription
								>0</template
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
import Tabs from '../../../../../components/navigation-and-tabs/Tabs.vue'
import PointsBarItem from '../../../../../components/points-bar/PointsBarItem.vue'
import ImageComponent from '../../../../../components/dom-elements/ImageComponent.vue'
import PaymentDetailItem from '../../../../../components/dom-elements/PaymentDetailItem.vue'

export default {
	components: {
		TopNavigation,
		Tabs,
		PointsBarItem,
		ImageComponent,
		PaymentDetailItem,
	},
}
</script>

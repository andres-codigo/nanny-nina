<template>
	<div class="w-full h-full">
		<TopNavigationPayment
			:display-border-bottom="true"
			text="Payment Details"
			header-color="text-purple-900"
		>
			<template #iconRight
				><router-link to="/dashboard?tab=2"
					><XIcon
						class="w-8 h-8 text-purple-900"
						aria-hidden="true" /></router-link
			></template>
		</TopNavigationPayment>
		<main>
			<div class="flex flex-col justify-center py-12 mx-4">
				<div class="mb-10">
					<Profile
						left-svg="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
						member="Brittany (27)"
					/>

					<div
						class="flex flex-row text-2xl mb-8 py-4 border-b border-gray-100"
					>
						<div class="flex-1">Dates</div>
						<div class="flex">Total</div>
					</div>

					<div class="mb-16">
						<h4
							class="text-header-four font-semibold antialiased mb-6"
						>
							December
						</h4>
						<ul role="list">
							<li>
								<DayDetailsHeaderItemCollapsed
									date="Fri, 3rd December, 2021"
									price="100"
								/>
							</li>
							<li>
								<DayDetailsHeaderItemCollapsed
									date="Mon, 5th December, 2021"
									price="100"
								/>
							</li>
							<li>
								<DayDetailsHeaderItemCollapsed
									date="Tue, 7th December, 2021"
									price="100"
								/>
							</li>
							<li>
								<DayDetailsHeaderItemCollapsed
									date="Fri, 11th December, 2021"
									price="100"
								/>
							</li>
							<li>
								<DayDetailsHeaderItemCollapsed
									date="Sun, 21 December, 2021"
									price="100"
								/>
							</li>
						</ul>
					</div>

					<div class="mb-16">
						<h4
							class="text-header-four font-semibold antialiased mb-6"
						>
							November
						</h4>
						<p>No payments</p>
					</div>

					<div class="mb-16">
						<h4
							class="text-header-four font-semibold antialiased mb-6"
						>
							October
						</h4>
						<ul role="list">
							<li>
								<DayDetailsHeaderItemCollapsed
									date="Sun, 21 December, 2021"
									price="100"
								/>
							</li>
							<li>
								<DayDetailsHeaderItemCollapsed
									date="Mon, 22nd December, 2021"
									price="100"
								/>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigationPayment from '../../../../../components/navigation-and-tabs/TopNavigationPayment.vue'
import Profile from '../../../../../components/payment/Profile.vue'
import DayDetailsHeaderItemCollapsed from '../../../../../components/payment/DayDetailsHeaderItemCollapsed.vue'

import { XIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigationPayment,
		Profile,
		DayDetailsHeaderItemCollapsed,
		XIcon,
	},
}
</script>

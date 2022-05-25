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
							<Img :src="leftSvg" class="h-16  w-16 rounded-full mb-4" />
						</div>
						<div class="pt-1">
							<p class="text-2xl text-purple-900 ">Sanders</p>
							<p class="text-xs font-thin text-gray-500 mb-4">20 completed bookings</p>
							<ButtonOutlineDark class="inline-flex items-center w-full text-sm leading-none font-semibold py-2">
								<template #iconWithText>
									<Img class="w-4 h-4" src="./assets/svg/other/download-black.svg" alt="" />
									<span class="pl-2">Download</span>
								</template>
							</ButtonOutlineDark>
						</div>
					</div>

					<div class="flex flex-row text-2xl mb-4 py-4 px-2 border-b border-gray-100">
						<div class="flex-1">Date</div>
						<div class="flex">Total</div>
					</div>

					<ul role="list">
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
						<li>
							<div class="relative mb-8">
								<div class="flex flex-row w-full absolute bg-white border border-gray-100 rounded-20px hover:rounded-20px px-4 z-10">
									<div class="basis-11/12">
										<div class="flex items-center py-6">
											<div class="basis-11/12">
												<p class="text-purple-900">Fri, 3rd December, 2021</p>
											</div>
											<div class="basis-1/12 pr-4">
												<p class="text-purple-900 float-right">&euro;100</p>
											</div>
										</div>
									</div>
									<div class="basis-1/12 inline-flex items-center">
										<div class="w-full pr-4"><Img src="./assets/svg/other/chevron-up-gray.svg" /></div>
									</div>
								</div>
								<div class="flex flex-row bg-gray-50 rounded-t-20px hover:rounded-20px w-full pt-20 pb-4 px-4">
									<dl class="w-full">
										<DescriptionListItem :isBold="true" class="py-2" term="Fee">
											<template #termDescription>&euro;25</template>
										</DescriptionListItem>
										<DescriptionListItem class="py-0.5" term="Day">
											<template #termDescription>&euro;25</template>
										</DescriptionListItem>
										<DescriptionListItem class="py-0.5" term="Night">
											<template #termDescription>&euro;57</template>
										</DescriptionListItem>
										<DescriptionListItem class="pt-0.5 pb-4" term="Kids">
											<template #termDescription>&euro;16</template>
										</DescriptionListItem>
										<DescriptionListItem :isBold="true" class="py-3 border-dotted border-t-2 border-gray-100" term="Duration">
											<template #termDescription>6hrs 30mins</template>
										</DescriptionListItem>
										<DescriptionListItem :isBold="true" class="py-3 border-dotted border-t-2 border-gray-100" term="Time">
											<template #termDescription>09:00-16:00</template>
										</DescriptionListItem>
										<DescriptionListItem :isBold="true" class="py-3 border-dotted border-t-2 border-gray-100" term="Tip">
											<template #termDescription>&euro;1</template>
										</DescriptionListItem>
										<DescriptionListItem :isBold="true" class="py-3 border-dotted border-t-2 border-gray-100" term="Service fee">
											<template #termDescription>29%</template>
										</DescriptionListItem>
									</dl>
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
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../../components/navigation-and-tabs/TopNavigation.vue'
import ButtonOutlineDark from '../../../../../components/buttons/ButtonOutlineDark.vue'
import DescriptionListItem from '../../../../../components/dom-elements/DescriptionListItem.vue'

import { XIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		ButtonOutlineDark,
		DescriptionListItem,
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
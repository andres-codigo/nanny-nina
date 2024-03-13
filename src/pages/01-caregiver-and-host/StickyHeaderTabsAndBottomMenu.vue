<template>
	<div class="w-full h-full">
		<!-- START: Alternate (Sticky) Top Navigation -->
		<TopNavigationStickyHeader text="Payment">
			<template #iconLeft
				><router-link to="'/dashboard?tab=1"
					><ChevronLeftIcon
						class="w-8 h-8 text-white"
						aria-hidden="true" /></router-link
			></template>
			<template #iconRight
				><QuestionMarkCircleIcon
					class="w-6 h-6 text-green-500"
					aria-hidden="true"
			/></template>
		</TopNavigationStickyHeader>
		<!-- END -->
		<main>
			<!-- START: Sticky Tabs DOM/class section -->
			<section class="section-sticky-tabs">
				<Tabs
					tab-one-classes="text-purple-900"
					tab-one-text="Account"
					:tab-one-is-active="true"
					tab-two-classes="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
					tab-two-text="Earnings"
					:tab-two-is-active="false"
					:display-third-tab="true"
					tab-three-classes="border-transparent text-gray-500 border-b-2 hover:text-gray-700 hover:border-gray-300"
					tab-three-text="History"
					:tab-three-is-active="false"
				/>
			</section>
			<!-- END -->

			<!-- START: note addition of container-sticky-header-and-tabs-bottom-menu for sticky header and bottom menu-->
			<div
				class="flex flex-col mx-4 container-sticky-header-and-tabs-bottom-menu"
			>
				<!-- END -->
				<div
					class="flex flex-col justify-center items-center pt-12 mb-10"
				>
					<ImageComponent
						src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
						class="h-44 w-44 rounded-full"
					/>
					<div
						class="flex flex-row text-sm font-light text-center mt-2"
					>
						<div class="inline-flex grow-0 mr-1">
							<ImageComponent
								src="./assets/svg/other/edit-gray-pencil.svg"
								class="w-5 h-5"
							/>
						</div>
						<div class="inline-flex">
							<a
								href="#"
								target="_self"
								class="anchor-blue anchor-with-underline"
								>Edit</a
							>
						</div>
					</div>
				</div>
				<div class="flex flex-col mb-10">
					<ul role="list">
						<UnorderedListItem
							title="First Name"
							value="Brittany"
						/>
						<UnorderedListItem title="Last Name" value="Storme" />
						<UnorderedListItem title="Gender" value="Female" />
						<UnorderedListItem
							title="Date of Birth"
							value="Oct 19, 1998"
						/>
						<UnorderedListItem
							title="Address"
							value="Prins Hendrikkade A60"
						/>
						<UnorderedListItem title="City" value="Amsterdam" />
						<UnorderedListItem
							title="Country"
							value="Netherlands"
						/>
						<li>
							<a
								class="block hover:bg-lilac-50 focus:bg-green-100 border-b border-b-gray-50"
								href="#"
								target="_self"
							>
								<div class="flex flex-row">
									<div class="basis-11/12">
										<div class="flex items-center py-8">
											<div class="flex flex-col ml-2">
												<div class="flex flex-col">
													<p class="font-medium">
														About you
													</p>
													<p
														class="text-sm text-gray-500 mt-4"
													>
														My name is Brittany, I
														have been doing this for
														4yrs now, my hobbies are
														dancing, cycling.....
													</p>
												</div>
											</div>
										</div>
									</div>
									<div class="basis-1/12 pt-10">
										<ImageComponent
											src="./assets/svg/other/chevron-right-gray.svg"
											class="float-right mr-2"
										/>
									</div>
								</div>
							</a>
						</li>
					</ul>
				</div>

				<MultiplePhotoUploadGrid
					classes="text-base font-semibold antialiased"
				>
					<template #title>Photos</template>
				</MultiplePhotoUploadGrid>

				<hr class="border-1 border-gray-50 mt-16 mb-8" />

				<h5 class="text-header-five font-semibold antialiased mb-2">
					Video
				</h5>

				<div class="mt-10">
					<SingleVideoUploadItem />
				</div>

				<div
					class="flex flex-col justify-center items-center mt-20 mb-10"
				>
					<ButtonPrimary
						text="Save Changes"
						classes="w-button-lg text-xl py-4"
					/>
				</div>
			</div>
		</main>
		<footer>
			<BottomMenu />
		</footer>
	</div>
</template>

<script>
import TopNavigationStickyHeader from '../../components/navigation-and-tabs/TopNavigationStickyHeader.vue'
import Tabs from '../../components/navigation-and-tabs/Tabs.vue'
import ImageComponent from '../../components/dom-elements/ImageComponent.vue'
import UnorderedListItem from '../../components/dom-elements/UnorderedListItem.vue'
import MultiplePhotoUploadGrid from '../../components/media/multiple-upload/MultiplePhotoUploadGrid.vue'
import SingleVideoUploadItem from '../../components/media/single-upload/SingleVideoUploadItem.vue'
import ButtonPrimary from '../../components/buttons/ButtonPrimary.vue'
import BottomMenu from '../../components/menu/BottomMenu.vue'

import { ChevronLeftIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigationStickyHeader,
		Tabs,
		ImageComponent,
		UnorderedListItem,
		MultiplePhotoUploadGrid,
		SingleVideoUploadItem,
		ButtonPrimary,
		BottomMenu,
		ChevronLeftIcon,
		QuestionMarkCircleIcon,
	},
}
</script>

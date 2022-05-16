<template>
	<div>
		<nav class="flex items-center justify-between flex-wrap bg-white py-6 px-4">
			<Header class="mr-4" />
			<div class="block sm:hidden">
				<button @click="toggleMenu" class="flex items-center border rounded text-purple-900 border-purple-900 hover:text-purple-500 hover:border-gray-100 px-3 py-2">
					<MenuIcon class="text-purple-900 h-4 w-4" />
				</button>
			</div>

			<div :class="menuSelected ? 'block': 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
				<div class="text-sm font-bold  sm:flex-grow">
					<a @click="activeTab = 1" :class="[ activeTab === 1 ? 'active underline' : 'no-underline' ]" class="cursor-pointer block mt-4 sm:inline-block sm:mt-0 text-purple-900 hover:underline mr-4">Caregiver & Host</a>
					<a @click="activeTab = 2" :class="[ activeTab === 2 ? 'active underline' : 'no-underline' ]" class="cursor-pointer block mt-4 sm:inline-block sm:mt-0 text-purple-900 hover:underline mr-4">Caregiver</a>
					<a @click="activeTab = 3" :class="[ activeTab === 3 ? 'active underline' : 'no-underline' ]" class="cursor-pointer block mt-4 sm:inline-block sm:mt-0 text-purple-900 hover:underline">Host</a>
				</div>
			</div>
		</nav>
		<main>
			<div class="content">
				<div v-if="activeTab === 1">
					<!-- Start: Caregiver & Host Links -->
					<div class="relative">
						<div class="z-10 sticky bg-gray-500 px-4 py-4 text-sm font-medium antialiased">
							<p class="text-md text-white font-bold leading-none">Caregiver &amp; Host</p>
						</div>
						<ul role="list" class="relative z-0 divide-y divide-gray-200">
							<ListItem
								:hideNotes="true"
								notes=""
								date=""
								routerLinkPath="/registration"
								title="Registration"
								textColor="text-purple-600"
								textBadge="Completed"
								textColorBadge="text-white"
								backgroundColorBadge="bg-green-800"
							/>
							<ListItem
								:hideNotes="true"
								notes=""
								date=""
								routerLinkPath="/forgot-password"
								title="Forgot Password"
								textColor="text-purple-600"
								textBadge="Completed"
								textColorBadge="text-white"
								backgroundColorBadge="bg-green-800"
							/>
						</ul>
					</div>
					<div class="relative">
						<div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 pl-4 pr-4 py-4 text-sm font-medium text-gray-600">
							<h3><span class="font-bold">Caregiver</span> </h3>
						</div>
						<ul role="list" class="relative z-0 divide-y divide-gray-200">
							<ListItem
								:subItem="false"
								:hideNotes="true"
								notes=""
								date=""
								routerLinkPath="/onboarding-caregiver"
								title="Onboarding"
								textColor="text-purple-600"
								textBadge="Completed"
								textColorBadge="text-white"
								backgroundColorBadge="bg-green-800"
							/>
						</ul>
					</div>
					<div class="relative">
						<div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 pl-4 pr-4 py-4 text-sm font-medium text-gray-600">
							<h3><span class="font-bold">Host</span> </h3>
						</div>
						<ul role="list" class="relative z-0 divide-y divide-gray-200">
							<ListItem
								:subItem="false"
								:hideNotes="true"
								notes=""
								date=""
								routerLinkPath="/onboarding-host"
								title="Onboarding"
								textColor="text-purple-600"
								textBadge="Completed"
								textColorBadge="text-white"
								backgroundColorBadge="bg-green-800"
							/>
						</ul>
					</div>
					<!-- End: Caregiver & Host Links -->
				</div>

				<div v-if="activeTab === 2">
					<!-- Start: Caregiver Links -->
					<div class="relative">
						<div class="z-10 sticky bg-gray-500 px-4 py-4 text-sm font-medium antialiased">
							<p class="text-md text-white font-bold leading-none">Caregiver</p>
						</div>
						<ul role="list" class="relative z-0 divide-y divide-gray-200">
							<ListItem
								:hideNotes="true"
								notes=""
								date=""
								routerLinkPath="/childminder-and-nanny-home-with-bottom-menu"
								title="Home (with bottom menu)"
								textColor="text-purple-600"
								textBadge="Completed"
								textColorBadge="text-white"
								backgroundColorBadge="bg-green-800"
							/>
							<ListItem
								:subItem="false"
								:hideNotes="true"
								notes=""
								date=""
								routerLinkPath="/au-pair-reference"
								title="Reference"
								textColor="text-purple-600"
								textBadge="Completed"
								textColorBadge="text-white"
								backgroundColorBadge="bg-green-800"
							/>
						</ul>
					</div>
					<div class="relative">
						<div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 pl-4 pr-4 py-4 text-sm font-medium text-gray-600">
							<h3><span class="font-bold">Nanny</span> </h3>
						</div>
						<ul role="list" class="relative z-0 divide-y divide-gray-200">
							<ListItem
								:subItem="false"
								:hideNotes="true"
								notes=""
								date=""
								routerLinkPath="/nanny-home-without-bottom-menu"
								title="Home (without bottom menu)"
								textColor="text-purple-600"
								textBadge="Completed"
								textColorBadge="text-white"
								backgroundColorBadge="bg-green-800"
							/>
							<ListItem
								:subItem="false"
								:hideNotes="false"
								notes="Waiting on Design comment updates"
								date="06/05/22"
								routerLinkPath="/nanny-job-listings"
								title="Job Listings"
								textColor="text-purple-600"
								textBadge="On Hold - UI/Design"
								textColorBadge="text-amber-800"
								backgroundColorBadge="bg-amber-100"
							/>
							<ListItem
								:subItem="false"
								:hideNotes="false"
								notes="Waiting on Design comment updates"
								date="16/05/22"
								routerLinkPath="/nanny-service-onboarding"
								title="Onboarding"
								textColor="text-purple-600"
								textBadge="On Hold - UI/Design"
								textColorBadge="text-amber-800"
								backgroundColorBadge="bg-amber-100"
							/>
							<ListItem
								:subItem="false"
								:hideNotes="false"
								notes="Waiting on Design comment updates"
								date="06/05/22"
								routerLinkPath="/nanny-parent-profile"
								title="Parent Profile"
								textColor="text-purple-600"
								textBadge="On Hold - UI/Design"
								textColorBadge="text-amber-800"
								backgroundColorBadge="bg-amber-100"
							/>
							<ListItem
								:subItem="false"
								:hideNotes="true"
								notes=""
								date=""
								routerLinkPath="/nanny-booking"
								title="Booking"
								textColor="text-purple-600"
								textBadge="In Progress"
								textColorBadge="text-amber-800"
								backgroundColorBadge="bg-amber-100"
							/>
							<ListItem
								:subItem="false"
								:hideNotes="true"
								notes=""
								date=""
								routerLinkPath="/nanny-cancel-booking"
								title="Cancel Booking"
								textColor="text-purple-600"
								textBadge="In Progress"
								textColorBadge="text-amber-800"
								backgroundColorBadge="bg-amber-100"
							/>
						</ul>
					</div>
					<div class="relative">
						<div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 pl-4 pr-4 py-4 text-sm font-medium text-gray-600">
							<h3><span class="font-bold">Childminder</span> </h3>
						</div>
						<ul role="list" class="relative z-0 divide-y divide-gray-200">
							<ListItem
								:subItem="false"
								:hideNotes="true"
								notes=""
								date=""
								routerLinkPath="/childminder-service-onboarding"
								title="Onboarding"
								textColor="text-purple-600"
								textBadge="Completed"
								textColorBadge="text-white"
								backgroundColorBadge="bg-green-800"
							/>
							<ListItem
								:subItem="false"
								:hideNotes="true"
								notes=""
								date=""
								routerLinkPath="/childminder-booking"
								title="Booking"
								textColor="text-purple-600"
								textBadge="In Progress"
								textColorBadge="text-amber-800"
								backgroundColorBadge="bg-amber-100"
							/>
						</ul>
					</div>
					<div class="relative">
						<div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 pl-4 pr-4 py-4 text-sm font-medium text-gray-600">
							<h3><span class="font-bold">Au Pair</span> </h3>
						</div>
						<ul role="list" class="relative z-0 divide-y divide-gray-200">
							<ListItem
								:subItem="false"
								:hideNotes="true"
								notes=""
								date=""
								routerLinkPath="/au-pair-country-listings"
								title="Country Listings"
								textColor="text-purple-600"
								textBadge="Completed"
								textColorBadge="text-white"
								backgroundColorBadge="bg-green-800"
							/>
							<ListItem
								:subItem="false"
								:hideNotes="false"
								notes="Waiting on Design comment updates"
								date="27/04/22"
								routerLinkPath="/au-pair-service-onboarding"
								title="Onboarding"
								textColor="text-purple-600"
								textBadge="On Hold - UI/Design"
								textColorBadge="text-amber-800"
								backgroundColorBadge="bg-amber-100"
							/>
							<ListItem
								:subItem="false"
								:hideNotes="false"
								notes="Waiting on Design comment updates"
								date="27/04/22"
								routerLinkPath="/au-pair-personality-test"
								title="Personality Test"
								textColor="text-purple-600"
								textBadge="On Hold - UI/Design"
								textColorBadge="text-amber-800"
								backgroundColorBadge="bg-amber-100"
							/>
						</ul>
					</div>
					<!-- End: Caregiver Links -->
				</div>

				<div v-if="activeTab === 3">
					<!-- Start: Host Links -->
					<div class="relative">
						<div class="z-10 sticky bg-gray-500 px-4 py-4 text-sm font-medium antialiased">
							<p class="text-md text-white font-bold leading-none">Host</p>
						</div>
						<ul role="list" class="relative z-0 divide-y divide-gray-200">
							<ListItem
								:hideNotes="true"
								notes=""
								date=""
								routerLinkPath="/host-nanny-home"
								title="Home (with bottom menu)"
								textColor="text-purple-600"
								textBadge="Completed"
								textColorBadge="text-white"
								backgroundColorBadge="bg-green-800"
							/>
							<ListItem
								:subItem="false"
								:hideNotes="true"
								notes=""
								date=""
								routerLinkPath="/au-pair-reference"
								title="Reference"
								textColor="text-purple-600"
								textBadge="Completed"
								textColorBadge="text-white"
								backgroundColorBadge="bg-green-800"
							/>
						</ul>
						<div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 pl-4 pr-4 py-4 text-sm font-medium text-gray-600">
							<h3><span class="font-bold">Nanny</span> </h3>
						</div>
						<ul role="list" class="relative z-0 divide-y divide-gray-200">
							<ListItem
								:subItem="false"
								:hideNotes="false"
								notes="Waiting on Design comment updates"
								date="06/05/22"
								routerLinkPath="/host-nanny"
								title="Onboarding"
								textColor="text-purple-600"
								textBadge="On Hold - UI/Design"
								textColorBadge="text-amber-800"
								backgroundColorBadge="bg-amber-100"
							/>
							<ListItem
								:subItem="false"
								:hideNotes="true"
								notes=""
								date=""
								routerLinkPath="/host-nanny-event"
								title="Event"
								textColor="text-purple-600"
								textBadge="Completed"
								textColorBadge="text-white"
								backgroundColorBadge="bg-green-800"
							/>
							<ListItem
								:subItem="false"
								:hideNotes="true"
								notes=""
								date=""
								routerLinkPath="/host-nanny-availability-w-fixed-button"
								title="Availability with fixed button"
								textColor="text-purple-600"
								textBadge="Completed"
								textColorBadge="text-white"
								backgroundColorBadge="bg-green-800"
							/>
							<ListItem
								:subItem="false"
								:hideNotes="true"
								notes=""
								date=""
								routerLinkPath="/host-nanny-availability-w-fixed-complete-button"
								title="Request Overview with fixed complete button"
								textColor="text-purple-600"
								textBadge="Completed"
								textColorBadge="text-white"
								backgroundColorBadge="bg-green-800"
							/>
							<ListItem
								:subItem="false"
								:hideNotes="true"
								notes=""
								date=""
								routerLinkPath="/host-nanny-booking"
								title="Booking"
								textColor="text-purple-600"
								textBadge="In Progress"
								textColorBadge="text-amber-800"
								backgroundColorBadge="bg-amber-100"
							/>
							<ListItem
								:subItem="false"
								:hideNotes="true"
								notes=""
								date=""
								routerLinkPath="/host-nanny-booking-profile"
								title="Booking Profile with fixed ignore/match button"
								textColor="text-purple-600"
								textBadge="In Progress"
								textColorBadge="text-amber-800"
								backgroundColorBadge="bg-amber-100"
							/>
						</ul>
						<div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 pl-4 pr-4 py-4 text-sm font-medium text-gray-600">
							<h3><span class="font-bold">Childminder</span> </h3>
						</div>
						<ul role="list" class="relative z-0 divide-y divide-gray-200">
							<ListItem
								:subItem="false"
								:hideNotes="true"
								notes=""
								date=""
								routerLinkPath="/host-childminder"
								title="Onboarding"
								textColor="text-purple-600"
								textBadge="Completed"
								textColorBadge="text-white"
								backgroundColorBadge="bg-green-800"
							/>
						</ul>
						<div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 pl-4 pr-4 py-4 text-sm font-medium text-gray-600">
							<h3><span class="font-bold">Au Pair</span> </h3>
						</div>
						<ul role="list" class="relative z-0 divide-y divide-gray-200">
							<ListItem
								:subItem="false"
								:hideNotes="false"
								notes="Waiting on Design comment updates"
								date="27/04/22"
								routerLinkPath="/host-au-pair"
								title="Onboarding"
								textColor="text-purple-600"
								textBadge="On Hold - UI/Design"
								textColorBadge="text-amber-800"
								backgroundColorBadge="bg-amber-100"
							/>
						</ul>
					</div>
					<!-- End: Host Links -->
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import Header from '../../components/content/logos/Header.vue'
import ListItem from '../../components/_dashboard/ListItem.vue'

import { MenuIcon } from '@heroicons/vue/solid'

export default {
	data() {
		return {
			menuSelected: false,
			activeTab: 1
		}
  	},
	components: {
		Header,
		ListItem,
		MenuIcon
	},
	 methods: {
		toggleMenu() {
			this.menuSelected = !this.menuSelected
		}
  	}
}
</script>
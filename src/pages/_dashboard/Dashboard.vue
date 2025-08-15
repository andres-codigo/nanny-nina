<template>
	<div>
		<nav
			class="flex items-center justify-between flex-wrap bg-white py-6 px-4"
		>
			<HeaderLogo classes="mr-4" />
			<div class="block sm:hidden">
				<button
					class="flex items-center border rounded text-purple-900 border-purple-900 hover:text-purple-500 hover:border-gray-100 px-3 py-2"
					@click="toggleMenu"
				>
					<MenuIcon class="text-purple-900 h-4 w-4" />
				</button>
			</div>

			<div
				:class="menuSelected ? 'block' : 'hidden'"
				class="w-full flex-grow sm:flex sm:items-center sm:w-auto"
			>
				<div class="text-sm font-bold sm:flex-grow">
					<router-link
						to="/dashboard?tab=1"
						:class="[
							activeTab === 1
								? 'active underline'
								: 'no-underline',
						]"
						class="cursor-pointer block mt-4 sm:inline-block sm:mt-0 text-purple-900 hover:underline mr-4"
						@click="activeTab = 1"
						>Caregiver & Host</router-link
					>
					<router-link
						to="/dashboard?tab=2"
						:class="[
							activeTab === 2
								? 'active underline'
								: 'no-underline',
						]"
						class="cursor-pointer block mt-4 sm:inline-block sm:mt-0 text-purple-900 hover:underline mr-4"
						@click="activeTab = 2"
						>Caregiver</router-link
					>
					<router-link
						to="/dashboard?tab=3"
						:class="[
							activeTab === 3
								? 'active underline'
								: 'no-underline',
						]"
						class="cursor-pointer block mt-4 sm:inline-block sm:mt-0 text-purple-900 hover:underline mr-4"
						@click="activeTab = 3"
						>Host</router-link
					>
					<router-link
						to="/dashboard?tab=4"
						:class="[
							activeTab === 4
								? 'active underline'
								: 'no-underline',
						]"
						class="cursor-pointer block mt-4 sm:inline-block sm:mt-0 text-purple-900 hover:underline"
						@click="activeTab = 4"
						>Email Templates</router-link
					>
				</div>
			</div>
		</nav>
		<main>
			<div class="content">
				<div v-if="activeTab === 1">
					<!-- Start: Caregiver & Host Links -->
					<div class="relative">
						<div
							class="z-10 sticky bg-gray-500 px-4 py-4 text-sm font-medium antialiased"
						>
							<p
								class="text-md text-white font-bold leading-none"
							>
								Caregiver &amp; Host
							</p>
						</div>
						<div
							class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 pl-4 pr-4 py-4 text-sm font-medium text-gray-600"
						>
							<h3><span class="font-bold">All</span></h3>
						</div>
						<CaregiverAndHost />
					</div>
					<div class="relative">
						<div
							class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 pl-4 pr-4 py-4 text-sm font-medium text-gray-600"
						>
							<h3><span class="font-bold">Caregiver</span></h3>
						</div>
						<Caregiver />
					</div>
					<div class="relative">
						<div
							class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 pl-4 pr-4 py-4 text-sm font-medium text-gray-600"
						>
							<h3><span class="font-bold">Host</span></h3>
						</div>
						<Host />
					</div>
					<!-- End: Caregiver & Host Links -->
				</div>

				<div v-if="activeTab === 2">
					<!-- Start: Caregiver Links -->
					<div class="relative">
						<div
							class="z-10 sticky bg-gray-500 px-4 py-4 text-sm font-medium antialiased"
						>
							<p
								class="text-md text-white font-bold leading-none"
							>
								Caregiver
							</p>
						</div>
						<div
							class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 pl-4 pr-4 py-4 text-sm font-medium text-gray-600"
						>
							<h3><span class="font-bold">All</span></h3>
						</div>
						<CaregiverAll />
					</div>
					<div class="relative">
						<div
							class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 pl-4 pr-4 py-4 text-sm font-medium text-gray-600"
						>
							<h3><span class="font-bold">Nanny</span></h3>
						</div>
						<CaregiverNanny />
					</div>
					<div class="relative">
						<div
							class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 pl-4 pr-4 py-4 text-sm font-medium text-gray-600"
						>
							<h3><span class="font-bold">Childminder</span></h3>
						</div>
						<CaregiverChildminder />
					</div>
					<div class="relative">
						<div
							class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 pl-4 pr-4 py-4 text-sm font-medium text-gray-600"
						>
							<h3><span class="font-bold">Au Pair</span></h3>
						</div>
						<CaregiverAuPair />
					</div>
					<!-- End: Caregiver Links -->
				</div>

				<div v-if="activeTab === 3">
					<!-- Start: Host Links -->
					<div class="relative">
						<div
							class="z-10 sticky bg-gray-500 px-4 py-4 text-sm font-medium antialiased"
						>
							<p
								class="text-md text-white font-bold leading-none"
							>
								Host
							</p>
						</div>
						<div
							class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 pl-4 pr-4 py-4 text-sm font-medium text-gray-600"
						>
							<h3><span class="font-bold">All</span></h3>
						</div>
						<HostAll />
					</div>
					<div class="relative">
						<div
							class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 pl-4 pr-4 py-4 text-sm font-medium text-gray-600"
						>
							<h3><span class="font-bold">Nanny</span></h3>
						</div>
						<HostNanny />
					</div>
					<div class="relative">
						<div
							class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 pl-4 pr-4 py-4 text-sm font-medium text-gray-600"
						>
							<h3><span class="font-bold">Childminder</span></h3>
						</div>
						<HostChildminder />
					</div>
					<div class="relative">
						<div
							class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 pl-4 pr-4 py-4 text-sm font-medium text-gray-600"
						>
							<h3><span class="font-bold">Au Pair</span></h3>
						</div>
						<HostAuPair />
					</div>
					<!-- End: Host Links -->
				</div>

				<div v-if="activeTab === 4">
					<!-- Start: Email Template Links -->
					<div class="relative">
						<div
							class="z-10 sticky bg-gray-500 px-4 py-4 text-sm font-medium antialiased"
						>
							<p
								class="text-md text-white font-bold leading-none"
							>
								Email Templates
							</p>
						</div>
						<EmailAll />
					</div>
					<!-- End: Email Template Links -->
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import HeaderLogo from '../../components/content/logos/HeaderLogo.vue'

import CaregiverAndHost from './pages/caregiver-and-host/CaregiverAndHost.vue'
import Caregiver from './pages/caregiver-and-host/Caregiver.vue'
import Host from './pages/caregiver-and-host/Host.vue'
import CaregiverAll from './pages/caregiver/All.vue'
import CaregiverNanny from './pages/caregiver/Nanny.vue'
import CaregiverChildminder from './pages/caregiver/Childminder.vue'
import CaregiverAuPair from './pages/caregiver/AuPair.vue'

import HostAll from './pages/host/All.vue'
import HostNanny from './pages/host/Nanny.vue'
import HostChildminder from './pages/host/Childminder.vue'
import HostAuPair from './pages/host/AuPair.vue'

import EmailAll from './pages/email-templates/All.vue'

import { MenuIcon } from '@heroicons/vue/solid'

export default {
	components: {
		HeaderLogo,
		CaregiverAndHost,
		Caregiver,
		Host,
		CaregiverAll,
		CaregiverNanny,
		CaregiverChildminder,
		CaregiverAuPair,
		HostAll,
		HostNanny,
		HostChildminder,
		HostAuPair,
		EmailAll,
		MenuIcon,
	},
	data() {
		return { menuSelected: false, activeTab: 1 }
	},
	mounted() {
		if (this.$route.query.tab === '1') {
			this.activeTab = 1
		} else if (this.$route.query.tab === '2') {
			this.activeTab = 2
		} else if (this.$route.query.tab === '3') {
			this.activeTab = 3
		} else if (this.$route.query.tab === '4') {
			this.activeTab = 4
		} else {
			this.activeTab = 1
		}
	},
	methods: {
		toggleMenu() {
			this.menuSelected = !this.menuSelected
		},
	},
}
</script>

<template>
	<div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
		<div class="max-w-3xl mx-auto w-screen h-screen">
			<h6 class="pl-4 py-4 header-six font-medium text-purple-900">Dashboard</h6>
			<nav class="h-full overflow-y-auto" aria-label="Directory">
				<div class="relative">
					<div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-500 px-4 py-2 text-sm font-medium antialiased">
						<p class="text-md text-white font-bold leading-none">Caregiver &amp; Host: </p>
						<p class="text-md text-white">Registration / Onboarding / Forgot Password</p>
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
					<div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 pl-16 pr-4 py-4 text-sm font-medium text-gray-600">
						<h3><span class="font-bold">Caregiver</span> </h3>
					</div>
					<ul role="list" class="relative z-0 divide-y divide-gray-200">
						<ListItem
							:subItem="true"
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
					<div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 pl-16 pr-4 py-4 text-sm font-medium text-gray-600">
						<h3><span class="font-bold">Host</span> </h3>
					</div>
					<ul role="list" class="relative z-0 divide-y divide-gray-200">
						<ListItem
							:subItem="true"
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
				<div class="relative">
					<div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-500 px-4 py-2 text-sm font-medium text-white antialiased">
						<p class="text-md text-white font-bold leading-none">Caregiver: </p>
						<p class="text-md text-white">Childminder &amp; Nanny</p>
					</div>
					<ul role="list" class="relative z-0 divide-y divide-gray-200">
						<ListItem
							:hideNotes="true"
							notes=""
							date=""
							routerLinkPath="/childminder-and-nanny-home"
							title="Home (with bottom menu)"
							textColor="text-purple-600"
							textBadge="Completed"
							textColorBadge="text-white"
							backgroundColorBadge="bg-green-800"
						/>
					</ul>
				</div>
				<div class="relative">
					<div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 pl-16 pr-4 py-4 text-sm font-medium text-gray-600">
						<h3><span class="font-bold">Nanny</span> </h3>
					</div>
					<ul role="list" class="relative z-0 divide-y divide-gray-200">
						<ListItem
							:subItem="true"
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
							:subItem="true"
							:hideNotes="true"
							notes=""
							date=""
							routerLinkPath="/nanny-job-listings"
							title="Job Listings"
							textColor="text-purple-600"
							textBadge="Completed"
							textColorBadge="text-white"
							backgroundColorBadge="bg-green-800"
						/>
						<ListItem
							:subItem="true"
							:hideNotes="true"
							notes=""
							date=""
							routerLinkPath="/nanny-service-onboarding"
							title="Onboarding"
							textColor="text-purple-600"
							textBadge="Completed"
							textColorBadge="text-white"
							backgroundColorBadge="bg-green-800"
						/>
						<ListItem
							:subItem="true"
							:hideNotes="true"
							notes=""
							date=""
							routerLinkPath="/nanny-parent-profile"
							title="Parent Profile"
							textColor="text-purple-600"
							textBadge="Completed"
							textColorBadge="text-white"
							backgroundColorBadge="bg-green-800"
						/>
					</ul>
				</div>
				<div class="relative">
					<div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-500 px-4 py-4 text-sm font-medium text-white antialiased">
						<h3><span class="font-bold">Host: </span>Childminder &amp; Nanny</h3>
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
					</ul>
					<div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 pl-16 pr-4 py-4 text-sm font-medium text-gray-600">
						<h3><span class="font-bold">Nanny</span> </h3>
					</div>
					<ul role="list" class="relative z-0 divide-y divide-gray-200">
						<ListItem
							:hideNotes="true"
							notes=""
							date=""
							routerLinkPath="/host-nanny"
							title="Onboarding"
							textColor="text-purple-600"
							textBadge="In Progress"
							textColorBadge="text-amber-800"
							backgroundColorBadge="bg-amber-100"
						/>
					</ul>
				</div>
			</nav>
		</div>
	</div>
</template>

<script>
import ListItem from '../../components/_dashboard/ListItem.vue'

export default {
	components: {
		ListItem
	}
}
</script>
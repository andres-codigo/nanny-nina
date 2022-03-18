<script setup>
import ListItem from '../../components/_dashboard/ListItem.vue'
</script>

<template>
	<div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
		<div class="max-w-3xl mx-auto w-screen h-screen">
			<h6 class="pl-4 py-4 header-six font-medium text-black">Dashboard</h6>
			<nav class="h-full overflow-y-auto" aria-label="Directory">
				<div class="relative">
					<div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-4 py-4 text-sm font-medium text-gray-600">
						<h3><span class="font-bold">Workers &amp; Host: </span>Registration / Onboarding / Forgot Password</h3>
					</div>
					<ul role="list" class="relative z-0 divide-y divide-gray-200">
						<ListItem
							:hideNotes="true"
							notes=""
							date=""
							routerLinkPath="/registration"
							title="Registration"
							textColor="text-blue-600"
							textBadge="Design/UI Review"
							textColorBadge="text-pink-800"
							backgroundColorBadge="bg-pink-100"
						/>
						<ListItem
							:hideNotes="true"
							notes=""
							date=""
							routerLinkPath="/onboarding"
							title="Onboarding"
							textColor="text-blue-600"
							textBadge="Design/UI Review"
							textColorBadge="text-pink-800"
							backgroundColorBadge="bg-pink-100"
						/>
						<ListItem
							:hideNotes="true"
							notes=""
							date=""
							routerLinkPath="/forgot-password"
							title="Forgot Password"
							textColor="text-blue-600"
							textBadge="Design/UI Review"
							textColorBadge="text-pink-800"
							backgroundColorBadge="bg-pink-100"
						/>
					</ul>
				</div>
				<div class="relative">
					<div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-4 py-4 text-sm font-medium text-gray-600">
						<h3><span class="font-bold">Workers: </span>Childminder &amp; Nanny</h3>
					</div>
					<ul role="list" class="relative z-0 divide-y divide-gray-200">
						<ListItem
							:hideNotes="true"
							notes=""
							date=""
							routerLinkPath="/childminder-and-nanny"
							title="Home"
							textColor="text-blue-600"
							textBadge="Design/UI Review"
							textColorBadge="text-pink-800"
							backgroundColorBadge="bg-pink-100"
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
							routerLinkPath="/nanny-service-launch-checklist-onboarding"
							title="Onboarding Workflow"
							textColor="text-blue-600"
							textBadge="In Progress"
							textColorBadge="text-amber-800"
							backgroundColorBadge="bg-amber-100"
						/>
					</ul>
				</div>
				<div class="relative">
					<div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-4 py-4 text-sm font-medium text-gray-600">
						<h3><span class="font-bold">Host: </span>Childminder &amp; Nanny</h3>
					</div>
					<ul role="list" class="relative z-0 divide-y divide-gray-200">
						<ListItem
							:hideNotes="true"
							notes=""
							date=""
							routerLinkPath="/host-nanny-home"
							title="Home"
							textColor="text-blue-600"
							textBadge="Design/UI Review"
							textColorBadge="text-pink-800"
							backgroundColorBadge="bg-pink-100"
						/>
					</ul>
					<ul role="list" class="relative z-0 divide-y divide-gray-200">
						<ListItem
							:hideNotes="true"
							notes=""
							date=""
							routerLinkPath="/host-nanny"
							title="Address Form / Media Upload Photos"
							textColor="text-blue-600"
							textBadge="Design/UI Review"
							textColorBadge="text-pink-800"
							backgroundColorBadge="bg-pink-100"
						/>
					</ul>
				</div>
			</nav>
		</div>
	</div>
</template>
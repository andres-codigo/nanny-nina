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
						<h3><span class="font-bold">Workers & Host:</span></h3>
						<p>Registration / Onboarding / Forgot Password</p>
					</div>
					<ul role="list" class="relative z-0 divide-y divide-gray-200">
						<ListItem
							:hide="false"
							notes="UI DOM/classes updated to match updated designs, please review/let me know if all good"
							date="10/03/2022"
							routerLinkPath="/registration"
							title="Registration"
							textColor="text-blue-600"
							textBadge="UI Code Review"
							textColorBadge="text-pink-800"
							backgroundColorBadge="bg-pink-100"
						/>
						<ListItem routerLinkPath="/onboarding" title="Onboarding" textColor="text-blue-600" textBadge="Completed" textColorBadge="text-green-800" backgroundColorBadge="bg-green-100" />
						<ListItem
							:hide="false"
							notes="Need to update UI DOM/classes as designs changed slightly"
							date="08/03/2022"
							routerLinkPath="/forgot-password"
							title="Forgot Password"
							textColor="text-blue-600"
							textBadge="Design Review / UI Code Review"
							textColorBadge="text-pink-800"
							backgroundColorBadge="bg-pink-100"
						/>
					</ul>
				</div>
				<div class="relative">
					<div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-4 py-4 text-sm font-medium text-gray-600">
						<h3><span class="font-bold">Workers:</span></h3>
						<p>Childminder &amp; Nanny</p>
					</div>
					<ul role="list" class="relative z-0 divide-y divide-gray-200">
						<ListItem
							:hide="false"
							notes="Missing SVG assets for DOM/class testing &amp; design review"
							date="08/03/2022"
							routerLinkPath="/childminder-and-nanny"
							title="Home"
							textColor="text-blue-600"
							textBadge="Design Review / UI Code Review"
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
							routerLinkPath="/nanny-service-launch-checklist-onboarding"
							title="Service Launch, Checklist &amp; Onboarding Workflow"
							textColor="text-blue-600"
							textBadge="In Progress"
							textColorBadge="text-amber-800"
							backgroundColorBadge="bg-amber-100"
						/>
					</ul>
				</div>
				<div class="relative">
					<div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-4 py-4 text-sm font-medium text-gray-600">
						<h3><span class="font-bold">Host:</span></h3>
						<p>Childminder &amp; Nanny</p>
					</div>
					<ul role="list" class="relative z-0 divide-y divide-gray-200">
						<ListItem
							:hide="false"
							notes="Updated designs review"
							date="10/03/2022"
							routerLinkPath="/host-nanny-home"
							title="Home"
							textColor="text-blue-600"
							textBadge="Design Review / UI Code Review"
							textColorBadge="text-pink-800"
							backgroundColorBadge="bg-pink-100"
						/>
					</ul>
					<ul role="list" class="relative z-0 divide-y divide-gray-200">
						<ListItem
							:hide="false"
							notes="Updated designs review"
							date="10/03/2022"
							routerLinkPath="/host-nanny"
							title="Address Form / Media Upload Photos"
							textColor="text-blue-600"
							textBadge="Design Review / UI Code Review"
							textColorBadge="text-pink-800"
							backgroundColorBadge="bg-pink-100"
						/>
					</ul>
				</div>
			</nav>
		</div>
	</div>
</template>
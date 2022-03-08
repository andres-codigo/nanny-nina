<script setup>
import ListItem from '../../components/_dashboard/ListItem.vue'
</script>

<template>
	<div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
		<div class="max-w-3xl mx-auto w-screen h-screen">
			<h1 class="text-xl font-medium text-black">Dashboard</h1>
			<nav class="h-full overflow-y-auto" aria-label="Directory">
				<div class="relative">
					<div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-4 py-4 text-sm font-medium text-gray-500">
						<h3>Registration/Onboarding</h3>
					</div>
					<ul role="list" class="relative z-0 divide-y divide-gray-200">
						<ListItem routerLinkPath="/sign-up" title="Sign-up" textColor="text-indigo-600" textBadge="Completed" textColorBadge="text-green-800" backgroundColorBadge="bg-green-100" />
						<ListItem routerLinkPath="/verification-message" title="Verification Message" textColor="text-indigo-600" textBadge="Completed" textColorBadge="text-green-800" backgroundColorBadge="bg-green-100" />
						<ListItem routerLinkPath="/login" title="Login" textColor="text-indigo-600" textBadge="Completed" textColorBadge="text-green-800" backgroundColorBadge="bg-green-100" />
						<ListItem routerLinkPath="/onboarding" title="Onboarding" textColor="text-indigo-600" textBadge="Completed" textColorBadge="text-green-800" backgroundColorBadge="bg-green-100" />
					</ul>
				</div>
				<div class="relative">
					<div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-4 py-4 text-sm font-medium text-gray-500">
						<h3>Forgot Password</h3>
					</div>
					<ul role="list" class="relative z-0 divide-y divide-gray-200">
						<ListItem :hide="false" notes="Need to update UI DOM/classes as designs changed slightly" date="08/03/2022" routerLinkPath="/forgot-password" title="Password Reset" textColor="text-indigo-600" textBadge="Design Review / UI Code Review" textColorBadge="text-pink-800" backgroundColorBadge="bg-pink-100 " />
					</ul>
				</div>
				<div class="relative">
					<div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-4 py-4 text-sm font-medium text-gray-500">
						<h3>Onboarding</h3>
					</div>
					<ul role="list" class="relative z-0 divide-y divide-gray-200">
						<ListItem :hide="false" notes="Missing SVG assets for DOM/class testing" date="08/03/2022" routerLinkPath="/childminder-service" title="Home Page (for Nanny, Childminder, Au Pair)" textColor="text-indigo-600" textBadge="UI Code Review" textColorBadge="text-pink-800" backgroundColorBadge="bg-pink-100 " />
					</ul>
				</div>
				<div class="relative">
					<div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-4 py-4 text-sm font-medium text-gray-500">
						<h3>Host - Nanny</h3>
					</div>
					<ul role="list" class="relative z-0 divide-y divide-gray-200">
						<ListItem :hide="false" notes="Need confirmation on final design for Bio Form " date="09/03/2022" routerLinkPath="/host-nanny" title="Bio Form" textColor="text-indigo-600" textBadge="In Progress" textColorBadge="text-amber-800" backgroundColorBadge="bg-amber-100 " />
					</ul>
				</div>
			</nav>
		</div>
	</div>
</template>
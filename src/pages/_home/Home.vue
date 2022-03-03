<script setup>
import ListItem from '../../components/_home/ListItem.vue'
</script>

<template>
	<div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
		<div class="max-w-3xl mx-auto w-screen h-screen">
			<nav class="h-full overflow-y-auto" aria-label="Directory">
				<div class="relative">
					<div class="z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-4 py-4 text-sm font-medium text-gray-500">
						<h3>Registation/Onboarding</h3>
					</div>
					<ul role="list" class="relative z-0 divide-y divide-gray-200">
						<ListItem routerLinkPath="/sign-up" title="Sign-up" textColor="text-indigo-600" textBadge="Completed" textColorBadge="text-green-800" backgroundColorBadge="bg-green-100 " />
						<ListItem routerLinkPath="/verification-message" title="Verification Message" textColor="text-indigo-600" textBadge="Completed" textColorBadge="text-green-800" backgroundColorBadge="bg-green-100 " />
						<ListItem routerLinkPath="/login" title="Login" textColor="text-indigo-600" textBadge="Completed" textColorBadge="text-green-800" backgroundColorBadge="bg-green-100 " />
						<ListItem routerLinkPath="/onboarding" title="Onboarding" textColor="text-indigo-600" textBadge="Completed" textColorBadge="text-green-800" backgroundColorBadge="bg-green-100 " />
						<ListItem routerLinkPath="/home" title="Forgot password" textColor="text-indigo-300" textBadge="To Do" textColorBadge="text-amber-800" backgroundColorBadge="bg-amber-100 " />
					</ul>
				</div>
			</nav>
		</div>
	</div>
</template>
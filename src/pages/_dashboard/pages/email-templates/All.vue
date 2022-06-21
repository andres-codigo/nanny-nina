<template>
	<ul role="list" class="relative z-0 divide-y divide-gray-200">
		<ListItem
			:subItem="false"
			:hideNotes="true"
			notes=""
			date=""
			routerLinkPath="/email"
			title="Onboarding Slides"
			textColor="text-purple-600"
			textBadge="Completed"
			textColorBadge="text-white"
			backgroundColorBadge="bg-green-800"
		/>
		<!-- <a href="/src/pages/04-email-templates/email-verification/Uncompressed.vue" class="block hover:bg-purple-50">
			<div class="py-4 mx-4">
				<div class="flex items-center justify-between">
					<p class="text-sm font-medium truncate text-purple-600">Email Verification</p>
					<div class="ml-2 flex-shrink-0 flex">
						<p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-white bg-green-800">Completed</p>
					</div>
				</div>
			</div>
			<div class="pb-4 sm:justify-between hidden sm:hidden mx-4">
				<div class="sm:flex">
					<p class="flex items-center text-sm text-gray-500">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>
					</p>
				</div>
				<div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
					<p><time datetime=""></time></p>
				</div>
			</div>
		</a>

		<a href="/src/pages/04-email-templates/password-reset/Uncompressed.html" class="block hover:bg-purple-50">
			<div class="py-4 mx-4">
				<div class="flex items-center justify-between">
					<p class="text-sm font-medium truncate text-purple-600">Password Reset</p>
					<div class="ml-2 flex-shrink-0 flex">
						<p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-white bg-green-800">Completed</p>
					</div>
				</div>
			</div>
			<div class="pb-4 sm:flex sm:justify-between hidden sm:hidden mx-4">
				<div class="sm:flex">
					<p class="flex items-center text-sm text-gray-500">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>
					</p>
				</div>
				<div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
					<p><time datetime=""></time></p>
				</div>
			</div>
		</a>

		<a href="/src/pages/04-email-templates/payment-received/Uncompressed.html" class="block hover:bg-purple-50">
			<div class="py-4 mx-4">
				<div class="flex items-center justify-between">
					<p class="text-sm font-medium truncate text-purple-600">Payment Received</p>
					<div class="ml-2 flex-shrink-0 flex">
						<p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-white bg-green-800">Completed</p>
					</div>
				</div>
			</div>
			<div class="pb-4 sm:flex sm:justify-between hidden sm:hidden mx-4">
				<div class="sm:flex">
					<p class="flex items-center text-sm text-gray-500">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>
					</p>
				</div>
				<div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
					<p><time datetime=""></time></p>
				</div>
			</div>
		</a>

		<a href="/src/pages/04-email-templates/payment-successful/Uncompressed.html" class="block hover:bg-purple-50">
			<div class="py-4 mx-4">
				<div class="flex items-center justify-between">
					<p class="text-sm font-medium truncate text-purple-600">Payment Successful</p>
					<div class="ml-2 flex-shrink-0 flex">
						<p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-white bg-green-800">Completed</p>
					</div>
				</div>
			</div>
			<div class="pb-4 sm:flex sm:justify-between hidden sm:hidden mx-4">
				<div class="sm:flex">
					<p class="flex items-center text-sm text-gray-500">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>
					</p>
				</div>
				<div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
					<p><time datetime=""></time></p>
				</div>
			</div>
		</a>

		<a href="/src/pages/04-email-templates/suggested-profile/Uncompressed.html" class="block hover:bg-purple-50">
			<div class="py-4 mx-4">
				<div class="flex items-center justify-between">
					<p class="text-sm font-medium truncate text-purple-600">Suggested Profile</p>
					<div class="ml-2 flex-shrink-0 flex">
						<p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-white bg-green-800">Completed</p>
					</div>
				</div>
			</div>
			<div class="pb-4 sm:flex sm:justify-between hidden sm:hidden mx-4">
				<div class="sm:flex">
					<p class="flex items-center text-sm text-gray-500">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>
					</p>
				</div>
				<div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
					<p><time datetime=""></time></p>
				</div>
			</div>
		</a> -->
	</ul>
</template>

<script>
import ListItem from '../../../../components/_dashboard/ListItem.vue'

export default {
	components: {
		ListItem
	}
}
</script>
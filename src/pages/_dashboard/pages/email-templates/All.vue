<template>
	<ul role="list" class="relative z-0 divide-y divide-gray-200">
		<ListItem
			:sub-item="false"
			:hide-notes="true"
			notes=""
			date=""
			router-link-path="/email-verification"
			title="Email Verification"
			text-color="text-purple-600"
			text-badge="Completed"
			text-color-badge="text-white"
			background-color-badge="bg-green-800"
		/>
		<ListItem
			:sub-item="false"
			:hide-notes="true"
			notes=""
			date=""
			router-link-path="/email-password-reset"
			title="Password Reset"
			text-color="text-purple-600"
			text-badge="Completed"
			text-color-badge="text-white"
			background-color-badge="bg-green-800"
		/>
		<ListItem
			:sub-item="false"
			:hide-notes="true"
			notes=""
			date=""
			router-link-path="/email-payment-received"
			title="Payment Received"
			text-color="text-purple-600"
			text-badge="Completed"
			text-color-badge="text-white"
			background-color-badge="bg-green-800"
		/>
		<ListItem
			:sub-item="false"
			:hide-notes="true"
			notes=""
			date=""
			router-link-path="/email-payment-successful"
			title="Payment Successful"
			text-color="text-purple-600"
			text-badge="Completed"
			text-color-badge="text-white"
			background-color-badge="bg-green-800"
		/>
		<ListItem
			:sub-item="false"
			:hide-notes="true"
			notes=""
			date=""
			router-link-path="/email-suggested-profile"
			title="Suggested Profile"
			text-color="text-purple-600"
			text-badge="Completed"
			text-color-badge="text-white"
			background-color-badge="bg-green-800"
		/>
	</ul>
</template>

<script>
import ListItem from '../../../../components/_dashboard/ListItem.vue'

export default {
	components: {
		ListItem,
	},
}
</script>

<template>
	<li>
		<a
			v-if="checkListItemIsHyperlink"
			href="#"
			target="_self"
			:class="checklistItemBackgroundClasses"
			class="block text-gray-500 mb-2 border border-gray-100 bg-white rounded-30px hover:rounded-30px"
		>
			<ChecklistItemWithBorderContent
				:hide-status-icon="hideStatusIcon"
				:hide-content="hideContent"
				:hide-pending="hidePending"
				:hide-mandatory-red-star="hideMandatoryRedStar"
				:hide-hyperlink-icon="hideHyperlinkIcon"
				:is-caregiver-host-option-description="
					isCaregiverHostOptionDescription
				"
				:title="title"
				:description="description"
			>
				<template #iconLeft>
					<slot name="iconLeft" />
				</template>
			</ChecklistItemWithBorderContent>
		</a>

		<span
			v-else
			class="block w-full mb-4 border border-gray-100 bg-white rounded-30px"
		>
			<ChecklistItemWithBorderContent
				:hide-status-icon="hideStatusIcon"
				:hide-content="hideContent"
				:hide-pending="hidePending"
				:hide-mandatory-red-star="hideMandatoryRedStar"
				:show-badge="showBadge"
				:hide-hyperlink-icon="hideHyperlinkIcon"
				:is-caregiver-host-option-description="
					isCaregiverHostOptionDescription
				"
				:title="title"
				:description="description"
			>
				<template #iconLeft>
					<slot name="iconLeft" />
				</template>
			</ChecklistItemWithBorderContent>
		</span>
	</li>
</template>

<script>
import ChecklistItemWithBorderContent from './ChecklistItemWithBorderContent.vue'

export default {
	components: {
		ChecklistItemWithBorderContent,
	},
	props: {
		pageBackgroundColor: {
			type: String,
			default: '',
		},
		checkListItemIsHyperlink: {
			type: Boolean,
			default: true,
		},
		hideStatusIcon: {
			type: Boolean,
			default: false,
		},
		hideMandatoryRedStar: {
			type: Boolean,
			default: true,
		},
		hideContent: {
			type: Boolean,
			default: true,
		},
		hidePending: {
			type: Boolean,
			default: false,
		},
		title: {
			type: String,
			default: '',
		},
		description: {
			type: String,
			default: '',
		},
		showBadge: {
			type: Boolean,
			default: false,
		},
		isCaregiverHostOptionDescription: {
			type: Boolean,
			default: false,
		},
		hideHyperlinkIcon: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			checklistItemBackgroundClasses: '',
		}
	},
	mounted() {
		this.checklistItemClasses(this.pageBackgroundColor)
	},
	methods: {
		checklistItemClasses(pageBackgroundColor) {
			if (pageBackgroundColor === 'purple') {
				this.checklistItemBackgroundClasses =
					'hover:text-purple-800 hover:bg-green-400 hover:border-green-400 focus:bg-green-600 focus:border-green-600'
			} else {
				this.checklistItemBackgroundClasses =
					'hover:bg-lilac-50 hover:border-gray-100 focus:bg-green-100 focus:border-gray-100'
			}
		},
	},
}
</script>

<template>
	<li>
		<a href="#" target="_self" :class="checklistItemBackgroundClasses" class="block text-gray-500 mb-2 border border-gray-100 bg-white rounded-30px hover:rounded-30px" v-if="checkListItemIsHyperlink">
			<ChecklistItemContent
				:hideStatusIcon="hideStatusIcon"
				:hideContent="hideContent"
				:hidePending="hidePending"
				:hideMandatoryRedStar="hideMandatoryRedStar"
				:hideHyperlinkIcon="hideHyperlinkIcon"
				:isCaregiverHostOptionDescription="isCaregiverHostOptionDescription"
				:title="title"
				:description="description"
			>
				<template #iconLeft>
					<slot name="iconLeft" />
				</template>
			</ChecklistItemContent>
		</a>

		<span class="block w-full mb-4 border border-gray-100 bg-white rounded-30px" v-else>
			<ChecklistItemContent
				:hideStatusIcon="hideStatusIcon"
				:hideContent="hideContent"
				:hidePending="hidePending"
				:hideMandatoryRedStar="hideMandatoryRedStar"
				:showBadge="showBadge"
				:hideHyperlinkIcon="hideHyperlinkIcon"
				:isCaregiverHostOptionDescription="isCaregiverHostOptionDescription"
				:title="title"
				:description="description"
			>
				<template #iconLeft>
					<slot name="iconLeft" />
				</template>
			</ChecklistItemContent>
		</span>
	</li>
</template>

<script>
import ChecklistItemContent from './ChecklistItemContent.vue'

export default {
	data() {
    	return {
			checklistItemBackgroundClasses: ''
    	}
  	},
	components: {
		ChecklistItemContent
	},
	props: [
		'pageBackgroundColor',
		'checkListItemIsHyperlink',
		'hideStatusIcon',
		'hideMandatoryRedStar',
		'hideContent',
		'hidePending',
		'title',
		'description',
		'showBadge',
		'hideHyperlinkIcon',
		'isCaregiverHostOptionDescription'
	],
	methods: {
		checklistItemClasses(pageBackgroundColor) {
			if (pageBackgroundColor === 'purple') {
				this.checklistItemBackgroundClasses = 'hover:text-purple-800 hover:bg-green-400 hover:border-green-400 focus:bg-green-600 focus:border-green-600';
			} else {
				this.checklistItemBackgroundClasses = 'hover:bg-lilac-50 hover:border-lilac-50 focus:bg-lilac-100 focus:border-lilac-100';
			}
		}
	},
	mounted() {
    	this.checklistItemClasses(this.pageBackgroundColor);
  	}
}
</script>
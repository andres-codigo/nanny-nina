<!-- TODO: bg color for default, hover & focus... overall look of page too -->
<template>
	<li>
		<a href="#" target="_self" :class="checklistItemBackgroundClasses" class="block w-full mb-4 border border-gray-100 bg-white rounded-30px hover:rounded-30px" v-if="checkListItemIsHyperlink">
			<ChecklistItemContent
				:hideStatusIcon="hideStatusIcon"
				:hideContent="hideContent"
				:hidePending="hidePending"
				:hideMandatoryRedStar="hideMandatoryRedStar"
				:hideHyperlinkIcon="hideHyperlinkIcon"
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
		'pageBackgroundColour',
		'checkListItemIsHyperlink',
		'hideStatusIcon',
		'hideMandatoryRedStar',
		'hideContent',
		'hidePending',
		'title',
		'description',
		'showBadge',
		'hideHyperlinkIcon'
	],
	methods: {
		checklistItemClasses(pageBackgroundColour) {
			if (pageBackgroundColour === 'purple') {
				this.checklistItemBackgroundClasses = 'hover:bg-green-400 hover:border-green-400 focus:bg-green-600 focus:border-green-600';
			} else {
				this.checklistItemBackgroundClasses = 'hover:bg-lilac-50 hover:border-lilac-50 focus:bg-lilac-100 focus:border-lilac-100';
			}
		}
	},
	mounted() {
    	this.checklistItemClasses(this.pageBackgroundColour);
  	}
}
</script>
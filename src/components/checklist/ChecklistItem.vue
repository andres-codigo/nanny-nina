<!-- TODO: bg color for default, hover & focus... overall look of page too -->
<template>
	<li>
		<a href="#" target="_self" class="block w-full mb-4 border border-gray-100 bg-white hover:bg-gray-200 rounded-30px hover:rounded-30px" v-if="checkListItemIsHyperlink">
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
	components: {
		ChecklistItemContent
	},
	props: ['checkListItemIsHyperlink', 'hideStatusIcon', 'hideMandatoryRedStar', 'hideContent', 'hidePending', 'title', 'description', 'showBadge', 'hideHyperlinkIcon']
}
</script>
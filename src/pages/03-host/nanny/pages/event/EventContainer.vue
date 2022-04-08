<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<EventInformationForm class="max-w-450-for-dev-not-prod" />
		<EventDescription class="max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import EventInformationForm from './pages/EventInformationForm.vue'
import EventDescription from './pages/EventDescription.vue'

export default {
	components: {
		EventInformationForm,
		EventDescription
	}
}
</script>
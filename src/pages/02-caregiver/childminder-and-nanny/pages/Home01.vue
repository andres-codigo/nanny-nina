<template>
	<div class="w-full h-screen">
		<main>
			<div class="min-h-full flex flex-col mx-4">
				<UserProgress />
				<div class="grid grid-rows-3 gap-4">
					<div><HomeCard tempBackgroundColor="bg-pink-100" tempFocusRingColor="focus:ring-pink-200" user="Nanny" content="Work on regular fixed schedule, returning days per week" /></div>
					<div><HomeCard tempBackgroundColor="bg-purple-100" tempFocusRingColor="focus:ring-purple-200" user="Au Pair" content="Experience a new culture with a host family abroad as a caregiver" /></div>
					<div><HomeCard tempBackgroundColor="bg-green-100" tempFocusRingColor="focus:ring-green-200" user="Childminder" content="Work as a pro-nanny" /></div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import UserProgress from '../../../../components/home/UserProgress.vue'
import HomeCard from '../../../../components/cards/HomeCard.vue'

import { XIcon } from '@heroicons/vue/solid'

export default {
	components: {
		UserProgress,
		HomeCard,
		XIcon
	}
}
</script>
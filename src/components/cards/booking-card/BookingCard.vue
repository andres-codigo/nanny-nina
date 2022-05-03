<template>
	<a href="#" target="_self" class="inline-flex grow relative h-36 rounded-20px border border-gray-50">
		<div>
			<div class="flex flex-row mt-4 mx-4">
				<div class="flex-none items-center justify-center w-12">
					<img class="h-12 w-12 rounded-full" :src="src" alt="">
				</div>
				<div class="inline-flex w-full ml-4">
					<div class="flex w-full">
						<div class="inline-flex grow">
							<h6 class="text-header-six font-semibold antialiased">{{ title }}</h6>
						</div>
					</div>
				</div>
			</div>
			<div class="flex flex-row text-sm mb-2 ml-20">
				<div class="flex-none w-6"><CalendarIcon class="w-5 h-5" /></div>
				<div class="grow">Thurs, 24/03/2022</div>
			</div>
			<div class="flex flex-row text-sm mb-2 ml-20">
				<div class="flex-none w-6"><ClockIcon class="w-5 h-5" /></div>
				<div class="grow">13:00 - 18:00</div>
			</div>
		</div>
		<ChevronRightIcon class="absolute right-2 top-14 w-6 h-6 text-gray-500" aria-hidden="true" />
	</a>
</template>

<script>
import { CalendarIcon, ClockIcon, ChevronRightIcon } from '@heroicons/vue/outline'

export default {
	components: {
		CalendarIcon,
		ClockIcon,
		ChevronRightIcon
	},
	props: {
		src: String,
		title: String
	}
}
</script>
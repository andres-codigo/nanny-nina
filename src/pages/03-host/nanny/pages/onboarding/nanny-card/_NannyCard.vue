<template>
	<div class="flex flex-row mt-8 mb-2">
		<div class="flex-none items-center justify-center w-36 ml-4">
			<img class="h-36 w-36 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
		</div>
		<div class="inline-flex items-center ml-6">
			<div class="grid grid-rows-6 grid-flow-col gap-2">
				<Details>
					<template #title>
						<div class="flex flex-row mt-1">
							<div class="inline-flex">
								<div class="w-24 mr-2">
									<div class="grid grid-cols-5 gap-2">
										<div><StarIcon class="w-5 h-5 text-yellow-400" /></div>
										<div><StarIcon class="w-5 h-5 text-yellow-400" /></div>
										<div><StarIcon class="w-5 h-5 text-yellow-400" /></div>
										<div><StarIcon class="w-5 h-5 text-gray-100" /></div>
										<div><StarIcon class="w-5 h-5 text-gray-100" /></div>
									</div>
								</div>
								<div class="inline-flex justify-center"><span class="text-sm">(4/5)</span></div>
							</div>
						</div>
					</template>
				</Details>

				<Details>
					<template #leadingIcon><CheckIcon class="w-5 h-5"/></template>
					<template #title><span>Available now</span></template>
					<template #trailingIcon></template>
				</Details>

				<Details>
					<template #leadingIcon><CalendarIcon class="w-5 h-5"/></template>
					<template #title>
						<div class="flex">
							<div class="flex-none"><a href="#" target="_self" class="text-blue-500 font-thin anchor-with-underline">General availability</a></div>
							<div class="inline-flex items-center justify-center pl-1"><ChevronRightIcon class="w-3 h-3 text-blue-500" /></div>
						</div>
					</template>
					<template #trailingIcon></template>
				</Details>

				<Details>
					<template #leadingIcon><ClockIcon class="w-5 h-5 text-gray-100"/></template>
					<template #title>
						<div class="flex">
							<div class="flex-none"><span class="text-gray-100 font-thin underline">Schedule Call</span></div>
							<div class="inline-flex items-center justify-center pl-1"><ChevronRightIcon class="w-3 h-3 text-gray-100" /></div>
						</div>
					</template>
					<template #trailingIcon></template>
				</Details>

				<Details>
					<template #leadingIcon><ReplyIcon class="w-5 h-5 text-gray-100"/></template>
					<template #title>
						<div class="flex">
							<div class="flex-none"><span class="read-only:text-gray-100 underline">Motivation</span></div>
							<div class="inline-flex items-center justify-center pl-1"><ChevronRightIcon class="w-3 h-3 text-gray-100" /></div>
						</div>
					</template>
					<template #trailingIcon></template>
				</Details>
			</div>
		</div>
	</div>
</template>

<script>
import Details from './details/Details.vue'

import { UserCircleIcon, StarIcon, CheckIcon, CalendarIcon, ChevronRightIcon, ClockIcon, ReplyIcon } from '@heroicons/vue/outline'

export default {
	components: {
		Details,
		UserCircleIcon,
		StarIcon,
		CheckIcon,
		CalendarIcon,
		ChevronRightIcon,
		ClockIcon,
		ReplyIcon
	}
}
</script>
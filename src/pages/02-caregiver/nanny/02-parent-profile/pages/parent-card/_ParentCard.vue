<template>
	<div class="flex flex-row mt-8 mb-2">
		<div class="flex-none items-center justify-center w-32 ml-4">
			<img
				class="h-32 w-32 rounded-full"
				src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
				alt=""
			/>
		</div>
		<div class="inline-flex items-center ml-6">
			<div class="grid grid-rows-4 grid-flow-col gap-2">
				<h4
					class="text-header-four font-semibold leading-none antialiased"
				>
					The Sanders
				</h4>

				<CardDetails>
					<template #leadingIcon>
						<div
							class="inline-flex items-center justify-center grow-0"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5 text-yellow-400"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								/>
							</svg>
						</div>
					</template>
					<template #title
						><span class="text-sm">(4.5/5)</span></template
					>
				</CardDetails>

				<CardDetails>
					<template #leadingIcon
						><CalendarIcon class="w-5 h-5"
					/></template>
					<template #title
						><span>{{
							parentDetails[0].bookingType
						}}</span></template
					>
					<template #trailingIcon></template>
				</CardDetails>

				<CardDetails>
					<template #leadingIcon
						><ClockIcon class="w-5 h-5"
					/></template>
					<template #title
						><span>{{ parentDetails[0].duration }}</span></template
					>
					<template #trailingIcon></template>
				</CardDetails>
			</div>
		</div>
	</div>
</template>

<script>
import CardDetails from './details/CardDetails.vue'

import { CalendarIcon, ClockIcon } from '@heroicons/vue/outline'

export default {
	components: {
		CardDetails,
		CalendarIcon,
		ClockIcon,
	},
	props: {
		parentDetails: {
			type: String,
			default: '',
		},
	},
}
</script>

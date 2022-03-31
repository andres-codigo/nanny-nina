<template>
		<div>
			<header>
				<div class="flex bg-white drop-shadow-md items-center justify-center h-24">
					<div class="inline-flex justify-center items-center w-14 h-14">
						<XIcon class="w-7 h-7" />
					</div>
					<div class="flex-none w-16 mx-2">
						<img class="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
					</div>
					<div class="grow mx-4"><h4 class="text-header-four font-semibold antialiased">Brittany</h4></div>
					<div class="inline-flex grow font-semibold"><span class="inline-flex pr-1"><ChatAlt2Icon class="w-5  h-5" /></span>12</div>
					<div class="inline-flex grow font-semibold mr-4"><span class="inline-flex pr-1"><StarIcon class="w-5  h-5" /></span>12</div>
				</div>
			</header>
			<main>
				<div class="flex flex-col px-4 py-12">
					<h3 class="text-left text-header-three text-gray-900 font-semibold antialiased mb-2">Reviews</h3>

					<div class="border-t border-gray-50 py-5">
						<ReviewCardDetails user="Sophie" date="24/03/2021" />
					</div>

					<div class="border-t border-gray-50 py-5">
						<ReviewCardDetails user="Rebecca" date="24/03/2021" />
					</div>

					<div class="border-t border-gray-50 py-5">
						<ReviewCardDetails user="Reggie Bush" date="24/03/2021" />
					</div>
				</div>
			</main>
		</div>
</template>

<script>
import ReviewCardDetails from '../../../../../components/cards/review-card/ReviewCardDetails.vue'

import { XIcon, ChatAlt2Icon, StarIcon } from '@heroicons/vue/outline'

export default {
	components: {
		ReviewCardDetails,
		XIcon,
		ChatAlt2Icon,
		StarIcon
	}
}
</script>
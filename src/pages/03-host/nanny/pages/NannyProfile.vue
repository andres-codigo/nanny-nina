<template>
	<div>
		<TopNavigation backgroundColor="bg-white" headerColor="text-purple-900" text="Profile">
			<template #iconLeft><router-link to="/dashboard"><ChevronLeftIcon class="w-8 h-8 text-purple-900" aria-hidden="true" /></router-link></template>
			<template #iconRight><DotsVerticalIcon class="w-6 h-6 text-purple-900" aria-hidden="true" /></template>
		</TopNavigation>
		<main>
			<div class="h-full flex flex-col mx-4">
				<NannyCard :parentDetails="parentDetails" />

				<hr class="border-1 border-gray-50 my-6" />

				<HeaderParagraphSection title="Meet Brittany" class="mt-7">
					<template #content>
						<p class="my-7">Mijn naam is Brittany. Ik ben 27 jaar en heb Animatie Audiovisuele vormgeving gestudeerd op het Grafisch Lyceum in Utrecht. Ik vind het super leuk om creatief met kinderen bezig te zijn door te knutselen, spelletjes te spelen of door actief bezig zijn door een stukje te gaan wandelen.</p>
					</template>
				</HeaderParagraphSection>

				<hr class="border-1 border-gray-50 my-6" />

				<HeaderParagraphSection title="Experience (2years)" class="mt-7">
					<template #content>
						<ul class="list-none my-7">
							<li class="pb-1">New borns</li>
							<li class="py-1">Toddlers</li>
							<li class="pt-1">Early School</li>
						</ul>
					</template>
				</HeaderParagraphSection>

				<hr class="border-1 border-gray-50 my-6" />

				<HeaderParagraphSection title="Education" class="mt-7">
					<template #content>
						<p class="my-7">B.sc Rocket Science</p>
					</template>
				</HeaderParagraphSection>

				<hr class="border-1 border-gray-50 my-6" />

				<Preferences title="Services &amp; Strengths (9)" class="mt-7" />

				<hr class="border-1 border-gray-50 my-6" />

				<Photos title="Photos (3)" class="mt-7" />

				<hr class="border-1 border-gray-50 my-6" />

				<Reviews class="mt-7">
					<template #title>
						<div class="flex flex-row mb-7">
							<div class="inline-flex items-center justify-center grow-0 pr-1">
								<StarIcon class="w-8 h-8 text-purple-500" />
							</div>
							<div class="inline-flex items-center justify-center">
								<h5 class="text-header-five font-bold antialiased">What Other Parents Say</h5>
							</div>
						</div>
					</template>
				</Reviews>

				<hr class="border-1 border-gray-50 my-6" />

				<BadgesEarned class="mt-7">
					<template #title>
						<div class="flex flex-row mb-7">
							<div class="inline-flex items-center justify-center">
								<h5 class="text-header-five font-bold antialiased">Badges Earned (2)</h5>
							</div>
							<div class="inline-flex items-center justify-center grow-0 pl-2">
								<QuestionMarkCircleIcon class="w-8 h-8 text-purple-500" />
							</div>
						</div>
					</template>
					<template #badges>
						<div class="flex flex-col">
							<div class="flex overflow-x-scroll pb-10 no-scrollbar">
								<div class="flex flex-nowrap">
									<div class="inline-block mr-4">
										<div class="w-24 h-40 flex flex-col items-center">
											<svg width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
												<mask id="mask0_495_14102" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="85" height="85">
												<circle cx="42.5" cy="42.5" r="42" fill="#ECEBFF" stroke="black"/>
												</mask>
												<g mask="url(#mask0_495_14102)">
												<path d="M-18 64.7143C8.58485 40.5823 25.758 32.2707 59.3182 27C59.3182 27 20.6591 45 12.375 85.2857L-18 64.7143Z" fill="#A198FF"/>
												<path d="M40.9091 93L20.6591 81.8571C20.6591 81.8571 32.1624 64.559 40.9091 54.4286C48.8788 45.198 63 32.1429 63 32.1429C63 32.1429 52.5863 46.8312 48.2727 58.7143C43.9592 70.5974 40.9091 93 40.9091 93Z" fill="#A198FF"/>
												<path d="M49.5 49.3989L66.495 60L61.985 40.02L77 26.5768L57.2275 24.8432L49.5 6L41.7725 24.8432L22 26.5768L37.015 40.02L32.505 60L49.5 49.3989Z" fill="#5427E2"/>
												</g>
											</svg>
											<p class="text-center mt-4">Rising star</p>
										</div>
									</div>
									<div class="inline-block">
										<div class="w-24 h-40 flex flex-col items-center">
											<svg width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
												<mask id="mask0_495_14102" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="85" height="85">
												<circle cx="42.5" cy="42.5" r="42" fill="#ECEBFF" stroke="black"/>
												</mask>
												<g mask="url(#mask0_495_14102)">
												<path d="M-18 64.7143C8.58485 40.5823 25.758 32.2707 59.3182 27C59.3182 27 20.6591 45 12.375 85.2857L-18 64.7143Z" fill="#A198FF"/>
												<path d="M40.9091 93L20.6591 81.8571C20.6591 81.8571 32.1624 64.559 40.9091 54.4286C48.8788 45.198 63 32.1429 63 32.1429C63 32.1429 52.5863 46.8312 48.2727 58.7143C43.9592 70.5974 40.9091 93 40.9091 93Z" fill="#A198FF"/>
												<path d="M49.5 49.3989L66.495 60L61.985 40.02L77 26.5768L57.2275 24.8432L49.5 6L41.7725 24.8432L22 26.5768L37.015 40.02L32.505 60L49.5 49.3989Z" fill="#5427E2"/>
												</g>
											</svg>
											<p class="text-center mt-4">Kitchen Queen</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</template>
				</BadgesEarned>
			</div>
		</main>
	</div>
</template>

<script>
import TopNavigation from '../../../../components/navigation/TopNavigation.vue'
import NannyCard from '../../../../components/profile/nanny-card/NannyCard.vue'
import HeaderParagraphSection from '../../../../components/profile/nanny-card/HeaderParagraphSection.vue'
import Preferences from '../../../../components/profile/Preferences.vue'
import Photos from '../../../../components/profile/photos/Photos.vue'
import Reviews from '../../../../components/profile/Reviews.vue'
import BadgesEarned from '../../../../components/profile/badges/BadgesEarned.vue'

import { ChevronLeftIcon, DotsVerticalIcon, StarIcon, QuestionMarkCircleIcon } from '@heroicons/vue/solid'

export default {
	components: {
		TopNavigation,
		NannyCard,
		HeaderParagraphSection,
		Preferences,
		Photos,
		Reviews,
		BadgesEarned,
		ChevronLeftIcon,
		DotsVerticalIcon,
		StarIcon,
		QuestionMarkCircleIcon
	}
}
</script>

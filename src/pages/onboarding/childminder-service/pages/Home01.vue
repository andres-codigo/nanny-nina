<script setup>
import Image from '../../../../components/carousel/Image.vue'
</script>

<template>
	<div class="bg-white w-full h-screen">
		<main>
			<div class="min-h-full flex flex-col mx-4 mt-10">
				<div class="flex flex-row mb-4">
					<div class="basis-1/2 ml-4">
						<span class="inline-block text-xl">Hello, Brittany</span>
						<span class="inline-block text-lg text-gray antialiased">Explore Jobs</span>
					</div>
					<div class="basis-1/2 mr-4 relative">
						<div class="absolute -bottom-1 right-0 ">
							<span class="inline-block text-sm text-black font-light antialiased">30% Ready to work</span>
							<div class="bg-gray-500 rounded-full overflow-hidden">
								<div class="h-2 bg-indigo-600 rounded-full" style="width: 30%"></div>
							</div>
						</div>
					</div>
				</div>
				<a href="/" class="h-80 bg-white drop-shadow-md rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2">
					<div class="flex flex-row">
						<div class="flex grow h-40 bg-indigo-200 rounded-t-3xl overflow-hidden">
							<!--
								Image component for svg here
								<Image src="*.svg" />
								* remove background colour in div as visual placeholder
							-->
						</div>
					</div>
					<div class="flex flex-row">
						<div class="basis-1/2 mt-4 ml-4">
							<h1 class="antialiased text-xl">Nanny</h1>
						</div>
						<div class="basis-1/2 mt-4 mr-4 text-right">
							<span class="text-xs text-gray font-light">0/5 steps completed</span>
						</div>
					</div>
					<p class="text-base font-light leading-5 mt-4 mx-4">Work on regular fixed schedule, returning days per week</p>
				</a>
			</div>
		</main>
	</div>
</template>
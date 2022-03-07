<template>
	<div class="bg-white w-full h-screen">
		<main>
			<div class="min-h-full flex flex-col mx-4">
				<h2 class="my-6 text-left text-2xl">Welcome, Brittany</h2>
				<div class="flex flex-row">
					<div class="basis-1/2">
						<h1 class="text-gray font-normal antialiased">Explore Jobs</h1>
					</div>
					<div class="basis-1/2 pr-6 text-gray text-right">
						<span class="text-black font-light tracking-tighter">30% Ready to work</span>
					</div>
				</div>
				<router-link to="/" class="bg-white h-80 drop-shadow-md rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2">
					<div class="flex flex-row">
						<div class="flex grow h-40 bg-indigo-200 rounded-t-3xl">&nbsp;</div>
					</div>
					<div class="flex flex-row">
						<div class="basis-1/2 pt-6 pl-6">
							<h1 class="text-3xl font-medium antialiased">Nanny</h1>
						</div>
						<div class="basis-1/2 pt-6 pr-6 text-gray text-right">
							<span class="font-light tracking-tighter align-middle">0/5 steps completed</span>
						</div>
					</div>
					<p class="text-lg font-light mt-6 px-6 leading-5">Work on regular fixed schedule, returning days per week</p>
				</router-link>
			</div>
		</main>
	</div>
</template>
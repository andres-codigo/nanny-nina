<template>
	<div
		class="absolute w-6 h-6 flex items-center justify-center rounded-full bg-green-500 border border-purple-50 -ml-2 -top-1 cursor-pointer"
		unselectable="on"
		onselectstart="return false;"
	>
		<div class="relative -mt-2 w-1">
			<div class="absolute" style="margin-left: -23px">
				<div class="relative w-12 h-12 rounded-full bg-purple-500">
					<div
						class="h-full flex items-center justify-center -mt-16 text-white font-bold"
					>
						<slot name="price"></slot>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

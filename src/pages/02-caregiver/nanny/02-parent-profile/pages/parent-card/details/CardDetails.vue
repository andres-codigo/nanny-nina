<template>
	<div class="flex flex-row">
		<div class="inline-flex items-center justify-center grow-0 pr-1">
			<slot name="leadingIcon"></slot>
		</div>
		<div class="inline-flex items-center justify-center">
			<slot name="title"></slot>
		</div>
		<slot name="trailingIcon"></slot>
	</div>
</template>

<template>
	<div class="h-screen">
		<Header />
		<main>
			<div class="min-h-full flex flex-col justify-center mt-20 mx-4">
				<form action="#" method="POST">
					<div class="mt-6">
						<h4 class="text-left text-header-four text-gray-900">Password Updated!</h4>
						<p class="mt-6 text-sm font-light">Your password has been updated!</p>
					</div>

					<div class="h-28">&nbsp;</div>

					<div class="grid grid-rows-1">
						<div><ButtonPrimary text="Login" /></div>
					</div>
				</form>
			</div>
		</main>
	</div>
</template>

<script>
import Header from '../../../../components/header/Header.vue'
import ButtonPrimary from '../../../../components/buttons/ButtonPrimary.vue'

export default {
	components: {
		Header,
		ButtonPrimary
	}
}
</script>
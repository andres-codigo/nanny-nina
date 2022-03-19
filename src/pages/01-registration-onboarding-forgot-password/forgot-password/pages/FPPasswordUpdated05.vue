<template>
	<div class="bg-white">
		<Header />
		<main>
			<div class="min-h-full flex flex-col justify-center py-12 mx-4 mt-8">
				<h4 class="my-6 text-left text-header-four font-normal text-gray-900">Password Updated!</h4>
				<p class="mb-4 h-20 text-sm font-light">Your password has been updated!</p>
				<form action="#" method="POST">
					<div class="m-0 h-28">&nbsp;</div>

					<div class="mt-10">
						<div class="my-6">
							<ButtonPrimary text="Login" />
						</div>
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
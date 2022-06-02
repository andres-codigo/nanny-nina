<template>
	<div class="bg-lilac-100">
		<main>
			<div class="h-screen flex flex-col items-center justify-center mx-4">
				<form class="mb-40" action="#" method="POST">
					<div class="grid grid-rows-2 grid-flow-col gap-0">
						<div>
							<h2 class="font-semibold text-center text-header-two antialiased mx-5">Safe &amp; Affordable childcare for every family</h2>
						</div>
						<div class="flex flex-col justify-center items-center mt-24">
							<div class="grid grid-rows-2 gap-2">
								<div><ButtonSecondary text="Login" class="w-button-xl text-xl py-4" /></div>
								<div><ButtonOutlineDark text="Sign Up" /></div>
							</div>
						</div>
					</div>
				</form>
				<p class="mx-8 text-xs font-medium text-center">We encourage everyone on our platform to visit our <a href="#" target="_self" class="anchor-blue anchor-with-underline">Trust & Safety</a> and <a href="#" target="_self" class="anchor-blue anchor-with-underline">Privacy Policy</a> to learn more about our commitment to keeping you safe</p>
			</div>
		</main>
	</div>
</template>

<script>
import ButtonSecondary from '../../../../components/buttons/ButtonSecondary.vue'
import ButtonOutlineDark from '../../../../components/buttons/ButtonOutlineDark.vue'

export default {
	components: {
		ButtonSecondary,
		ButtonOutlineDark
	}
}
</script>
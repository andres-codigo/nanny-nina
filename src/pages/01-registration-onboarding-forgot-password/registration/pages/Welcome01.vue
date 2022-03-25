<!-- TODO: is text green value for h2 and link (span w underline) correct? -->
<template>
	<div class="bg-lilac-500">
		<main>
			<div class="h-screen flex flex-col items-center justify-center mx-4">
				<form class="mb-40" action="#" method="POST">
					<div class="grid grid-rows-2 grid-flow-col gap-0">
						<div>
							<h2 class="mx-5 text-center text-header-two text-green-500">Safe &amp; Affordable childcare for every family</h2>
						</div>
						<div class="flex flex-col justify-center items-center mt-24">
							<div class="grid grid-rows-2 gap-0">
								<div><ButtonSecondary text="Login" class="py-4 w-button-xl" /></div>
								<div><ButtonOutlineLight text="Sign Up" class="mt-2 py-4 w-button-xl" /></div>
							</div>
						</div>
					</div>
				</form>
				<p class="mx-8 text-xs font-medium text-white text-center">We encourage everyone on our platform to visit our <a href="#" class="anchor-with-underline">Trust & Safety</a> and <a href="#" class="anchor-with-underline">Privacy Policy</a> to learn more about our commitment to keeping you safe</p>
			</div>
		</main>
	</div>
</template>

<script>
import ButtonSecondary from '../../../../components/buttons/ButtonSecondary.vue'
import ButtonOutlineLight from '../../../../components/buttons/ButtonOutlineLight.vue'

export default {
	components: {
		ButtonSecondary,
		ButtonOutlineLight
	}
}
</script>
<script setup>
import Header from '../../../components/header/Header.vue'
import HeaderSizeTwo from '../../../components/common/HeaderSizeTwo.vue'
import ParagraphForHeader from '../../../components/common/ParagraphForHeader.vue'
import ButtonPrimary from '../../../components/buttons/ButtonPrimary.vue'
import ButtonGhost from '../../../components/buttons/ButtonGhost.vue'
import InputField from '../../../components/form/inputs/InputField.vue'
</script>

<template>
	<div class="bg-white">
		<Header />
		<main>
			<div class="min-h-full flex flex-col justify-center py-12 mx-10 mt-8">
				<HeaderSizeTwo text="Oops! Link Expired" />
				<ParagraphForHeader text="Your link has expired because you haven't used it in 24 hours.  You can create another link by clicking the button below." />
				<form action="#" method="POST">
					<div class="m-0 h-28">&nbsp;</div>

					<div class="mt-10">
						<div class="my-6">
							<ButtonPrimary text="Resend Link" />
						</div>

						<div class="flex items-center justify-center">
							<ButtonGhost text="Cancel" />
						</div>
					</div>
				</form>
			</div>
		</main>
	</div>
</template>
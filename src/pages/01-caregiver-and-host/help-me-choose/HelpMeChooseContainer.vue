<template>
	<div class="flex flex-wrap grow gap-y-6 gap-x-4">
		<QuizPage1 class="max-w-450-for-dev-not-prod" />
		<QuizPage2 class="max-w-450-for-dev-not-prod" />
		<QuizPage3 class="max-w-450-for-dev-not-prod" />
		<QuizPage4 class="max-w-450-for-dev-not-prod" />
		<QuizPage5 class="max-w-450-for-dev-not-prod" />
		<QuizPage6 class="max-w-450-for-dev-not-prod" />
	</div>
</template>

<script>
import QuizPage1 from './pages/QuizPage1.vue'
import QuizPage2 from './pages/QuizPage2.vue'
import QuizPage3 from './pages/QuizPage3.vue'
import QuizPage4 from './pages/QuizPage4.vue'
import QuizPage5 from './pages/QuizPage5.vue'
import QuizPage6 from './pages/QuizPage6.vue'

export default {
	components: {
		QuizPage1,
		QuizPage2,
		QuizPage3,
		QuizPage4,
		QuizPage5,
		QuizPage6,
	},
}
</script>

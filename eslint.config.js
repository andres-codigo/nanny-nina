import vue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import prettier from 'eslint-config-prettier/flat'

export default [
	{
		files: ['**/*.vue'],
		languageOptions: {
			parser: vueParser,
			ecmaVersion: 2022,
			sourceType: 'module',
			globals: { defineProps: 'readonly', defineEmits: 'readonly' },
		},
		plugins: { vue },
		rules: {
			'no-console':
				process.env.NODE_ENV === 'production' ? 'warn' : 'off',
			'no-debugger':
				process.env.NODE_ENV === 'production' ? 'warn' : 'off',
			'vue/multi-word-component-names': 'off',
		},
	},
	{
		files: ['**/*.js'],
		languageOptions: { ecmaVersion: 2022, sourceType: 'module' },
		rules: {
			'no-console':
				process.env.NODE_ENV === 'production' ? 'warn' : 'off',
			'no-debugger':
				process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		},
	},
	prettier,
]

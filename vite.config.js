import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 5001,
		open: true,
	},
	plugins: [vue(), eslintPlugin()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
		extensions: ['.js', '.vue'],
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes('node_modules')) {
						return id
							.toString()
							.split('node_modules/')[1]
							.split('/')[0]
							.toString()
					}
				},
			},
		},
	},
})

import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	// TODO: Add global SCSS config

	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			'$utils/*': './src/utils/*',
			'$api/*': './src/api/*',
			'$models/*': './src/models/*',
			'$config/*': './src/config/*',
			'$pocketbaseConfig': './src/config/pocketBase.ts',
		},
	},
};

export default config;

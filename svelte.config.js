import { preprocessMeltUI, sequence } from '@melt-ui/pp';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		alias: {
			$: path.resolve('./src/')
		},
		adapter: adapter()
	},
	preprocess: sequence([vitePreprocess(), preprocessMeltUI()])
};

export default config;

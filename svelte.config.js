import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
    extensions: ['.svelte', '.md', '.mdsvex'],

    preprocess: [mdsvex({ extensions: ['md', 'mdsvex'] })]
};

export default config;

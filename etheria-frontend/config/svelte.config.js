import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess'
import {
    mdsvex
} from "mdsvex";
import {
    vitePreprocess
} from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://svelte.dev/docs/kit/integrations
    // for more information about preprocessors
    preprocess: [
        sveltePreprocess({
            stylus: true,
            pug: true,
        }),
        vitePreprocess(),
        mdsvex()
    ],

    kit: {
        adapter: adapter()
    },

    extensions: [".svelte", ".svx"]
};

export default config;
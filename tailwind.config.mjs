/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'main-shade' : '#011C26',
				'light-shade' : '#F2AA6B',
				'medium-shade' : '#D97941',
				'dark-shade' : '#592A19',
			  },
		},
	},
	plugins: [],
}

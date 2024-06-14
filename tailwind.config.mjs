import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'text': 'var(--text)',
				'background': 'var(--background)',
				'primary': 'var(--primary)',
				'secondary': 'var(--secondary)',
				'accent': 'var(--accent)',
			},
		},
	},
	plugins: [daisyui],
	daisyui: {
		themes: [
			{
				light: {
					"primary": "#312dd6",
					"secondary": "#8987f3",
					"accent": "#514dfc",
					"neutral": "#170f3d",
					"base-100": "#f8f7fd",
				},
				dark: {
					"primary": "#2c29d1",
					"secondary": "#0e0c79",
					"accent": "#0603b0",
					"neutral": "#170f3d",
					"base-100": "#030208",
				},
			},
		],
	},
}

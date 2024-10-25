import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            fontFamily: {
                jakarta: ['Plus Jakarta Sans', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
            }
        },
        colors: {
            header: "#222222",
            primary: "#1c1817",
            footer: "#191919",
            light: "#FFF",
            dark: "#000",
            secondary: "#C5C5C5",
            "secondary-txt": "#8491A0",
            selected:"#9a33ff"
        },
        backgroundSize:{
            "general-size": "656px"
        }
	},

	plugins: [],

}

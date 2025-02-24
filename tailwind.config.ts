import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        soft: "var(--soft)",
        text: "var(--text)",
        depth: "var(--depth)",
        darkdepth: "var(--darkdepth)",
        gold: "var(--gold)",
        blue: "var(--blue)",
      },
      animation: {
				fade: 'fadeIn .7s ease-in-out',
        fade1: 'fadeIn .7s ease-in-out .1s backwards',
        fade2: 'fadeIn .7s ease-in-out .2s backwards',
        fade3: 'fadeIn .7s ease-in-out .3s backwards',
        fade4: 'fadeIn .7s ease-in-out .4s backwards',
        fade5: 'fadeIn .7s ease-in-out .5s backwards',
        fade6: 'fadeIn .7s ease-in-out .6s backwards',
        fade7: 'fadeIn .7s ease-in-out .7s backwards',
        fade8: 'fadeIn .7s ease-in-out .8s backwards',
			},

			keyframes: {
				fadeIn: {
					from: { opacity: '0', transform: "translate3d(0, 20%, 0)" },
					to: { opacity: '1', transform: "translate3d(0, 0%, 0)"},
				},
			},
    },
  },
  plugins: [],
};
export default config;

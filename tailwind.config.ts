import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bbb-yellow': '#FFFACD',
        'bbb-purple': '#8A2BE2',
        'bbb-black': '#1A1A1A',
      },
      fontFamily: {
        abril: ['var(--font-abril)', 'serif'],
        'edu-australia': ['var(--font-edu-australia)', 'cursive'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config; 

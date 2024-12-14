/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        third: "var(--third-color)",
      },
    },
  },
  plugins: [],
};

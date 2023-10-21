/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      backgroundColor: {
        "09494C": "#09494C",
        EFE6D3: "#EFE6D3",
        "033436": "#033436",
      },
      colors: {
        "09494C": "#09494C",
        EFE6D3: "#EFE6D3",
      },
    },
  },
  plugins: [],
}

import { heroui } from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
         "./node_modules/flowbite/**/*.js",       // ✅ core Flowbite
    "./node_modules/flowbite-react/**/*.js", // ✅ React components
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui(),                      // ✅ HeroUI plugin
     require("flowbite/plugin"),  
    require("tailwindcss-animate"), // ✅ animations plugin

  ],
}

export default config

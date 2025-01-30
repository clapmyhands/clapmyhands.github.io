/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    base: false,
    styled: true,
    prefix: '',
    themes: [
      {
        mytheme: {
          "primary": "#67e8f9",
          "secondary": "#f9a8d4",
          "accent": "#fdba74",
          "neutral": "#000b06",
          "neutral-content": "#ffffff",
          "base-100": "#f0f0f0",
          "base-200": "#e0e0e0",
          "base-300": "#d0d0d0",
          "base-content": "#353535",
          "info": "#a5f3fc",
          "success": "#bbf7d0",
          "warning": "#fde68a",
          "error": "#fecaca",
        }
      }
    ],
  },
}


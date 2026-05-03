/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#1E293B", // Slate 800 - Untuk teks utama
        secondary: "#64748B", // Slate 500 - Untuk teks sekunder
        background: "#F8FAFC", // Slate 50 - Background light mode
        darkbg: "#0F172A", // Slate 900 - Background dark mode 
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
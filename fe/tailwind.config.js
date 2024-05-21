/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primarydark: "#1A4D2E",
        secondarydark: "#4F6F52",
        primarylight: "#F5EFE6", 
        secondarylight: "#E8DFCA", 
      },
    },
  },
  plugins: [],
}


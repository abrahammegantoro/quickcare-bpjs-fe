
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['manrope'],
        poppins: ['Poppins_400Regular', 'Poppins_700Bold'],
        inter: ['inter'],
        abrilfatface: ['abrilfatface'],
      }
    },
  },
  plugins: [],
}
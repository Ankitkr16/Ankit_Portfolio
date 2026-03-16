/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#090d17",
        mist: "#9eb4d3",
        accent: "#7ce2ff",
        accent2: "#98f5cc"
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Manrope", "sans-serif"]
      },
      boxShadow: {
        glass: "0 10px 30px rgba(0, 0, 0, 0.25)"
      },
      backgroundImage: {
        noise:
          "radial-gradient(circle at 20% 20%, rgba(124,226,255,0.20), transparent 45%), radial-gradient(circle at 80% 5%, rgba(152,245,204,0.12), transparent 40%), radial-gradient(circle at 50% 85%, rgba(112,130,255,0.18), transparent 45%)"
      }
    }
  },
  plugins: []
};

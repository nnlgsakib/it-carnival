/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/src/assets/banner.png')",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".joinShadowcolor": {
          boxShadow: "0px 0px 15px 5px #19c3fc",
        },
      };

      addUtilities(newUtilities, ["hover"]);
    },
  ],
};

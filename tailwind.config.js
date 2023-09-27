/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          limeGreen: "hsl(163, 72%, 41%)",
          brightRed: "hsl(356, 69%, 56%)",
          facebook: "hsl(208, 92%, 53%)",
          twitter: "hsl(203, 89%, 53%)",
          instagram: {
            start: "hsl(37, 97%, 70%)",
            end: "hsl(329, 70%, 58%)",
          },
          youtube: "hsl(348, 97%, 53%)",
          darkTheme: {
            toggle: {
              start: "hsl(210, 78%, 56%)",
              end: "hsl(146, 68%, 55%)",
            },
          },
          lightTheme: {
            toggle: "hsl(230, 22%, 74%)",
          },
        },
        neutral: {
          darkTheme: {
            veryDarkBlueBg: "hsl(230, 17%, 14%)",
            veryDarkBlueBgTop: "hsl(232, 19%, 15%)",
            darkDesaturatedBlue: "hsl(228, 28%, 20%)",
            desaturatedBlue: "hsl(228, 34%, 66%)",
            white: "hsl(0, 0%, 100%)",
          },
          lightTheme: {
            white: "hsl(0, 0%, 100%)",
            veryPaleBlue: "hsl(225, 100%, 98%)",
            lightGrayishBlue: "hsl(227, 47%, 96%)",
            darkGrayishBlue: "hsl(228, 12%, 44%)",
            veryDarkBlue: "hsl(230, 17%, 14%)",
          },
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

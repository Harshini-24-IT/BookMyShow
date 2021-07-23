module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pavan: {
          50: "#ffe8e8",
          100: "#f3c1c3",
          200: "#e5999c",
          300: "#da7175",
          400: "#cf4a4e",
          500: "#b53035",
          600: "#8e2528",
          700: "#661a1d",
          800: "#3e0d10",
          900: "#1b0203",
        },
        bms: {
          50: "#edf1fc",
          100: "#d3d4e1",
          200: "#b6b8c9",
          300: "#989bb2",
          400: "#7c7f9b",
          500: "#636582",
          600: "#4c4f66",
          700: "#363849",
          800: "#2B3148",
          900: "#0a0a16",
        },

        button: {
          

  50: '#ffe3eb',
  100: '#ffb3c2',
  200: '#fb8399',
  300: '#f95370',
  400: '#f62448',
  500: '#dc0d2f',
  600: '#ac0624',
  700: '#7c031a',
  800: '#4c000e',
  900: '#1f0003',

        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

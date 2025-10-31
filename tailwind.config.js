
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
  "login-bg": "url('/images/login-background.jpg')",
  "home-bg": "url('/images/home-background.png')",
},

      colors: {
        "login-button": "#0063E4",  //dark blue
        "body-bg": "#040417",
        "viewer-hover": "#f9f9f91a",
        recommended: "rgba(0.25,0.46,0.45,0.94)",
      },
      transitionTimingFunction: {
        viewer: "cubic-bezier(0.25,0.46,0.45,0.94)",
      },
      boxShadow: {
        viewer:
          "0px 26px 20px -10px rgba(0,0,0,0.69), 0px 16px 10px -10px rgba(0,0,0,0.73)",
        "viewer-hover":
          "0 40px 58px -16px rgpa(0,0,0,0.8), 0 30px 22px -10px rgba(0,0,0,0.72)",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("video-hover", "&:hover > video");
    },
    function ({ addVariant }) {
      addVariant("navitem-hover", "&:hover >span");
    },
  ],
};

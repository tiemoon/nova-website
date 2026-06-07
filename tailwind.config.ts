import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nova: {
          purple: "#7C3AED",
          violet: "#6D28D9",
          blue: "#2563EB",
          cyan: "#06B6D4",
          pink: "#EC4899",
          dark: "#0A0A0F",
          darker: "#050508",
          card: "#0F0F1A",
          border: "#1E1E3A",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "nova-gradient":
          "linear-gradient(135deg, #7C3AED 0%, #2563EB 50%, #06B6D4 100%)",
        "nova-dark":
          "linear-gradient(135deg, #0A0A0F 0%, #0D0D1F 50%, #0A0A1A 100%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(37,99,235,0.1) 100%)",
        "hero-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(124,58,237,0.3), transparent)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        "typing": "typing 3.5s steps(40, end), blink 0.75s step-end infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      boxShadow: {
        "nova-glow": "0 0 40px rgba(124, 58, 237, 0.4)",
        "nova-glow-lg": "0 0 80px rgba(124, 58, 237, 0.3)",
        "card-hover": "0 20px 60px rgba(124, 58, 237, 0.2)",
        "cyan-glow": "0 0 40px rgba(6, 182, 212, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;

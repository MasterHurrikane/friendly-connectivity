import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "transparent",
        foreground: "#0D0D0D",
        primary: {
          DEFAULT: "#68C3D4",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#D481E6",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#E57373",
          foreground: "#ffffff",
        },
        success: {
          DEFAULT: "#A09C76",
          foreground: "#0D0D0D",
        },
        warning: {
          DEFAULT: "#F5A485",
          foreground: "#0D0D0D",
        },
        info: {
          DEFAULT: "#68C3D4",
          foreground: "#0D0D0D",
        },
        muted: {
          DEFAULT: "#F5EFB3",
          foreground: "#0D0D0D",
        },
        accent: {
          DEFAULT: "#F78FA7",
          foreground: "#0D0D0D",
        },
        card: {
          DEFAULT: "rgba(255, 255, 255, 0.95)",
          foreground: "#0D0D0D",
        },
      },
      backgroundImage: {
        'gradient-page': 'linear-gradient(180deg, #FFF8E7 0%, #FFE6F3 100%)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeIn: "fadeIn 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#F6F7F4",
        surface: "#FFFFFF",
        ink: "#202923",
        muted: "#68736B",
        line: "#E3E8E2",
        tint: "#EFF3EE",
        brand: { DEFAULT: "#176B50", dark: "#124B3B", soft: "#E4EFE9" },
        good: "#2E7D52",
        warn: "#B77A0C",
        unhealthy: "#C25A25",
        critical: "#C84242",
      },
      fontFamily: { sans: ['"Manrope Variable"', "Manrope", "system-ui", "sans-serif"] },
      borderRadius: { DEFAULT: "6px", md: "8px", lg: "10px" },
      boxShadow: { panel: "0 1px 2px rgba(32,41,35,.04)", pop: "0 8px 24px rgba(32,41,35,.12)" },
    },
  },
  plugins: [],
};

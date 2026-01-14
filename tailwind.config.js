/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xl: "1200px",
      },
    },
    extend: {
      colors: {
        /* Brand */
        primary: "#6366F1",        // Indigo (modern SaaS)
        primaryHover: "#4F46E5",

        success: "#22C55E",
        warning: "#F59E0B",
        danger: "#EF4444",

        /* App Backgrounds */
        bgApp: {
          light: "#F8FAFC",
          dark: "#020617",
        },

        /* Card / Surface */
        card: {
          light: "#FFFFFF",
          dark: "#0F172A",
        },

        /* Borders */
        borderSubtle: {
          light: "#E5E7EB",
          dark: "#1E293B",
        },

        /* Text */
        textMain: {
          light: "#0F172A",
          dark: "#F8FAFC",
        },

        textMuted: {
          light: "#64748B",
          dark: "#94A3B8",
        },
      },

      borderRadius: {
        sm: "8px",
        md: "12px",
        xl: "16px",
        "2xl": "20px",
      },

      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.08)",
        soft: "0 4px 12px rgba(0,0,0,0.06)",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

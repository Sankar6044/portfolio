/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0a0a0a",
        navy: "#0f172a",
        neonBlue: "#00f0ff",
        neonPurple: "#b026ff",
        neonCyan: "#00f0ff",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'blob': 'blob 7s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        glow: {
          'from': { boxShadow: '0 0 10px #00f0ff, 0 0 20px #00f0ff' },
          'to': { boxShadow: '0 0 20px #b026ff, 0 0 30px #b026ff' },
        }
      }
    },
  },
  plugins: [],
}

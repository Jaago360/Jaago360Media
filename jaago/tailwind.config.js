/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'news-black': '#050505',
        'news-red': '#ff0000',
        'news-silver': '#c0c0c0',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'ticker': 'ticker 30s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-line': 'glowLine 3s ease-in-out infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px #ff0000' },
          '50%': { opacity: '0.6', boxShadow: '0 0 40px #ff0000' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowLine: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      boxShadow: {
        'red-glow': '0 0 20px rgba(255, 0, 0, 0.5)',
        'red-glow-lg': '0 0 40px rgba(255, 0, 0, 0.7)',
        'metallic': '0 4px 20px rgba(192, 192, 192, 0.3)',
      },
    },
  },
  plugins: [],
}

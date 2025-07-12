/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
      keyframes: {
        scrollPartnerRow: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marquee: {
          '0%': { transform: "translateX(100%)" },
          '100%': { transform: 'translateX(-100%)' },
        },
      },

      animation: {
        'partner-scroll': 'scrollPartnerRow 40s linear infinite',
        'spinSlow': 'spin 18s linear infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      backgroundImage: {
        'gradient-3dmaker': 'linear-gradient(180deg, #D23D0B 25%, #F9C696 100%)',
        'gradient-spacepilot': 'linear-gradient(180deg, #1D3D30 0%, #24B87C 100%)',
        'gradient-codex': 'linear-gradient(180deg, #532262 0%, #AE90CB 100%)',
        'gradient-innoverse': 'linear-gradient(180deg, #0D0D0D 0%, #ACACAC 100%)',
        'gradient-astrobot': 'linear-gradient(180deg, #181818 25%, #E5E5E5 100%)',
        'gradient-schoolReg': 'linear-gradient(180deg, #0E265F 0%, #1E4FC5 100%)',
        'gradient-form': 'linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(168, 200, 244, 0.2) 20.19%)',
        'school-reg-radial': 'radial-gradient(97.27% 97.27% at 50% 0%, #F5F8FF 47.23%, #307DE3 67.54%, #2054CC 76.56%, #112481 100%)',
        'count-down': 'background: linear-gradient(98.52deg, #FFFFFF 0%, #A7C4D1 100%)',
      },
      colors: {
        'reg-gradient-from': '#FFFFFF',
        'reg-gradient-to': '#A7C4D1',
        'countdown-gradient-from': '#FFFFFF',
        'countdown-gradient-to': '#A2B7C0',
      },
    },
  },
  plugins: [],
}
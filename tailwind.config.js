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
      },
      keyframes: {
        scrollPartnerRow: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'partner-scroll': 'scrollPartnerRow 40s linear infinite',
        'spinSlow': 'spin 18s linear infinite',
      },
      backgroundImage: {
        'gradient-3dmaker': 'linear-gradient(180deg, #D23D0B 25%, #F9C696 100%)',
        'gradient-spacepilot': 'linear-gradient(180deg, #1D3D30 0%, #24B87C 100%)',
        'gradient-codex': 'linear-gradient(180deg, #532262 0%, #AE90CB 100%)',
        'gradient-innoverse': 'linear-gradient(180deg, #0D0D0D 0%, #ACACAC 100%)',
        'gradient-astrobot': 'linear-gradient(180deg, #181818 25%, #E5E5E5 100%)',
        'gradient-schoolReg': 'linear-gradient(180deg, #0E265F 0%, #1E4FC5 100%)',
        'gradient-form': 'linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(168, 200, 244, 0.2) 20.19%)',
      },
    },
  },
  plugins: [],
}
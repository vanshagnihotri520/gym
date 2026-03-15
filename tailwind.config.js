/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gymRed: '#FF0000',
        gymBlack: '#0A0A0A',
        gymDark: '#121212',
        gymGray: '#1C1C1C',
      },
      backgroundImage: {
        'gym-pattern': "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')",
      }
    },
  },
  plugins: [],
}

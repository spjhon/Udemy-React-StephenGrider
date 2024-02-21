/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js,ts,tsx}"],
  theme: {
    //here lays the animations
    extend: {
      keyframes: {
        shimmer: {
          '100%': {transform: 'translateX(100%)'}
        }
      },
      animation: {
        shimmer: 'shimmer 1.5s infinite'
      },
    },
    
  },
  plugins: [],
}

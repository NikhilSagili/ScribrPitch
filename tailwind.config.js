/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        'paper': '#f4f1ea',
        'sidebar': '#ebe7de',
        'card': '#ffffff',
        'accent-red': '#d02020',
        'accent-red-dim': '#a31616',
        'text-main': '#222222',
        'text-gray': '#5e5b55',
        'border-color': '#dcd8cc',
        'revenue': '#f4f1ea',
        'competitors': '#f4f1ea',
        'annexure': 'linear-gradient(180deg, #f4f1ea, #ebe7de)',
      },
      animation: {
        'float-phone': 'floatPhone 4.5s ease-in-out infinite',
        'float-pill': 'floatPill 4.5s ease-in-out infinite',
      },
      keyframes: {
        floatPhone: {
          '0%, 100%': { transform: 'translateY(0) rotate(-10deg)' },
          '50%': { transform: 'translateY(-16px) rotate(-10deg)' },
        },
        floatPill: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      backgroundImage: {
        'vision': 'radial-gradient(circle at 80% 20%, #ffffff 0%, #f4f1ea 100%)',
        'problem': '#f4f1ea',
        'solution': '#f4f1ea',
        'market': 'linear-gradient(to top, #ebe7de 0%, #f4f1ea 100%)',
      }
    },
  },
  plugins: [],
}

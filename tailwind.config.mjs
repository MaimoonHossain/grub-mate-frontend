/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#D72638', // Deep Scarlet Red (CTA & Action Buttons)
        secondary: '#F4A900', // Golden Saffron Yellow (Highlights & Badges)
        accent: '#FAE5C3', // Soft Cream Beige (Card Backgrounds & UI Balance)
      },
    },
  },
  plugins: [],
};

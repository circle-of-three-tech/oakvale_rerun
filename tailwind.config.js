/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: '#0A3D2B',
        'forest-mid': '#145C3F',
        gold: '#C8881A',
        'gold-light': '#E8A832',
        cream: '#F7F3EC',
        'cream-warm': '#EDE7DB',
        stone: '#D4CFCA',
        mint: '#A8D5B5',
        'mint-light': '#D6EDE0',
        slate: '#4A5568',
        charcoal: '#1C1C1C',
        'mid-grey': '#5A5A5A',
        'light-grey': '#E8E4DE',
        sage: '#4EA97A',
      },
      fontFamily: {
        mark: "'Cormorant Garamond', serif",
        serif: "'Cormorant Garamond', serif",
        body: "'EB Garamond', serif",
        lora: "'EB Garamond', serif"
      },
    }
  },
  plugins: [],
}
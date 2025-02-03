import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'primary': '#F9F9F9',
      'secundary': '#1C2529',
      'primary-gray': '#E8E9EA',
      'primary-blue': '#1BB1E0',
      'secundary-gray': '#D7DADD',
      
      'blue-link': '#1C84B5',
      
      'red': '#C12B54',
      'green': '#2BC151',
      'pink': '#EA62E8',

      'gray': '#39454A',

    },
    extend: {
      backgroundImage: {
        'duelan-main': "url('/images/duelan-main.png')",
      },
    },
  },
  plugins: [],
};
export default config;

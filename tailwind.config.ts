import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'primary': '#E8E9EA',
      'secondary': '#1C2529',
      'primary-gray': '#d9dcde',
      'primary-blue': '#1BB1E0',
      'secondary-gray': '#cdd1d4',
      'blue-link': '#1C84B5',
      'red': '#C12B54',
      'green': '#2BC151',
      'pink': '#EA62E8',
      'play-button': '#00B06F',
      'gray': '#39454A',
    },

    extend: {
      backgroundImage: {
        'menu-button': "url('/images/menu-button.svg')",
        'duelan-main': "url('/images/Duelan-Main.png')",
        '404-duelan': "url('/images/404-Duelan.png')",
        'hat-icon': "url('/images/Hat-Icon.png')",
        'polygon-icon': "url('/images/Polygon.png')",

        'duelan-404': "url('/images/Duelan-404.png')",

        'years-decoration': "url('/images/Years-Decoration.png')",
        'right-arrow': "url('/images/Right-Arrow.png')",
        'down-left-arrow': "url('/images/Down-Left-Arrow.png')",

        'script-icon': "url('/images/Script-Icon.png')",
        'hammer-icon': "url('/images/Hammer-Icon.png')",
        'environment-icon': "url('/images/Environment-Icon.png')",
        'gui-icon': "url('/images/GUI-Icon.png')",
        'texturizer-icon': "url('/images/Texturizer-Icon.png')",

        //  videos thumbnails
         'chase': "url('/videos/video-thumbnails/chase.png')",
         'game-select': "url('/videos/video-thumbnails/game-select.png')",
         'item-inventory-system': "url('/videos/video-thumbnails/item-inventory-system.png')",
         
         'game-shadow': "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 52%, rgba(0,0,0,0.75) 95%)",

         // category thumbnails
         'category-shadow': "linear-gradient(180deg, rgba(28,37,41,0.5) 0%, rgba(28,37,41,0.7) 30%, rgba(28,37,41,0.8) 90%)",
         
         'games-thumb': "url('/images/game-thumbnails/TT.png')",
         'systems-thumb': "url('/videos/video-thumbnails/optimized-entity-system.png')",
         '3d-thumb': "url('/images/3d-screenshots/dreams/playground.png')",
      },

      boxShadow: {
        'image-view': '0px 4px 20px 6px rgba(0, 0, 0, 0.3)',
      },

      typography: {
        DEFAULT: {
          css: {
           '.text-link': {
              color: '#1C84B5',
              fontWeight: 'bold',
              textDecoration: 'underline',
              zIndex: 10,
            },
            '.text-link:hover': {
              textDecoration: 'underline',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};

module.exports = config; 

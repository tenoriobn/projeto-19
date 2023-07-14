/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../../../*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'iconDollar': "url('./../../img/icon-dollar.svg')",
        'iconPerson': "url('./../../img/icon-person.svg')",
      },
      backgroundPosition: {
        'left-16': '16px',
      },
      colors: {
        strongCyan: 'hsl(172, 67%, 45%)',
        veryDarkCyan: 'hsl(183, 100%, 15%)',
        darkGrayishCyan: 'hsl(186, 14%, 43%)',
        grayishCyan: 'hsl(184, 14%, 56%)',
        lightGrayishCyan: 'hsl(185, 41%, 84%)',
        veryLightGrayishCyan: 'hsl(189, 41%, 97%)',
        white: 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        space: ['Space Mono', 'monospace'],
      },
      fontSize: {
        '32': ['2rem', {
          lineHeight: '2.5rem'
        }],
      },
      padding: {
        '60lg': '3.75rem',
      },
      margin: {
        '46': '2.875rem',
      }
    },
  },
  plugins: [],
}
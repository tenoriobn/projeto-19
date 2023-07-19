/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../../../*.html", "../../js/base/*.js"],
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
        veryLightStrongCyan: 'hsl(173, 61%, 77%)',
        veryDarkCyan: 'hsl(183, 100%, 15%)',
        veryDarkGraishCyan: 'hsl(183, 79%, 24%)',
        darkGrayishCyan: 'hsl(186, 14%, 43%)',
        grayishCyan: 'hsl(184, 14%, 56%)',
        lightGrayishCyan: 'hsl(185, 41%, 84%)',
        veryLightGrayishCyan: 'hsl(189, 41%, 97%)',
        white: 'hsl(0, 0%, 100%)',
        red: 'hsl(13, 29%, 57%)',
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
        '88': '5.5rem'
      },
      gridTemplateRows: {
        'auto1': 'repeat(2, auto) 1fr',
      },
      gridTemplateColumns: {
        'custom-1': 'minmax(0, 380px) 1fr',
        'custom-2': 'auto, 1fr'
      },
      maxWidth: {
        '450': '450px',
        '920': '920px',
      },
      screens: {
        '374': '374px',
      },
    },
  },
  plugins: [],
}
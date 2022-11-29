module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#edeef5',
          light_gray: '#d1d2dd'
        },
        secondary: {
          dark_gray: '#252324',
          green: '#70c88e',
          orange: '#f6a541'
        },
        gradiant: {
          dark: '#93A5CF',
          light: '#E4EfE9'
        }
      },
      fontFamily: {
        roboto: ['Roboto'],
        cinzel: ['Cinzel Decorative']
      },
      backgroundImage: {
        "body-back13": "url('/Portfolio/img/svgs/wall.jpg')",
        "body-back14": "url('/Portfolio/img/svgs/projectsBg.jpg')",
        "body-back16": "url('/Portfolio/img/svgs/waves.svg')",
        "body-back19": "url('/Portfolio/img/myImg/meback.jpg')",
        "body-back20": "url('/Portfolio/img/myImg/meback2.jpg')",
        "body-back21": "url('/Portfolio/img/myImg/meback3.jpg')",
        "body-back22": "url('/Portfolio/img/myImg/meback4.jpg')",
        "body-back23": "url('/Portfolio/img/myImg/meback5.jpg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

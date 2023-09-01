import bgimage from 'image/pexels-tom-van-dyck-1280x853.jpg';

export const theme = Object.freeze({
  colors: {
    accent: '#2196F3',
    white: '#ffffff',
    gray: '#9e9e9e',
    light: '#f2f2f2',
    dark: '#212121',
    mainBackground: ['linear-gradient(to bottom, #c9d6ff,  #e2e2e2)'],
    tagBackground: ['linear-gradient(to bottom, #FFD194, #D1913C)'],
    alert: '#ec8080',
  },

  fontSizes: {
    smallest: '10px',
    small: '14px',
    medium: '18px',
    large: '22px',
  },

  spacing: value => `${4 * value}px`,

  shadows: {
    small: '0 5px 7px -1px rgba(51, 51, 51, 0.23)',
    regular: '0px 4px 10px 4px #9e9e9e',
    medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
    // main: '2px 3px 4px 2px rgb(20 20 20 / 50%)',
    // main: '0 5px 10px -1px rgba(51, 51, 51, 0.23)',
    main: '0px 4px 10px 4px #9e9e9e',
  },

  animation: {
    cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },

  bg_color: {
    item: 'rgba(248, 248, 248, 0.5)',
    btn: 'rgba(230, 230, 230, 0.3)',
    btn_active: 'rgb(233, 232, 232, 0.8)',
  },
});

export const darkTheme = {
  body: [
    `linear-gradient(rgba(46, 47, 66, 0.7), rgba(46, 47, 66, 0.7)),           url(${bgimage})`,
  ],
  // body: ['linear-gradient(to bottom, #262626,  #e2e2e2)'],
  textColor: '#fff',
};

export const lightTheme = {
  body: [`url(${bgimage}) no-repeat  top left/cover`],
  // body: ['linear-gradient(to bottom, #c9d6ff,  #e2e2e2)'],
  textColor: '#000',
};

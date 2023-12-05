import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  gray10: '#E5E5E5',
  gray20: '#CCCCCC',
  gray30: '#A1A1A1',
  gray40: '#999999',
  gray50: '#7F7F7F',
  gray60: '#666666',
  gray70: '#4C4C4C',
  gray80: '#333333',
  gray85: '#242526',
  gray90: '#191919',

  //  sootr
  primary: '#D60000',
  lightblack: '#5B5B5B',
  lightgray: '#E7E7E7',
  lightgray2: '#818181',

  // --------------------------

  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 22,
  body3: 19,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};
export const FONTS = {
  fourHundred: {fontFamily: 'Poppins-Regular-400'},
  fiveHundred: {fontFamily: 'Poppins-Medium-500'},
  sixHundred: {fontFamily: 'Poppins-SemiBold-600'},
  sevenHundred: {fontFamily: 'Poppins-Bold-700'},
  eightHundred: {fontFamily: 'Poppins-ExtraBold-800'},
  nineHundred: {fontFamily: 'Poppins-Black-900'},
};

export const darkTheme = {
  name: 'dark',
  backgroundColor1: COLORS.gray85,
};

export const lightTheme = {
  name: 'light',
  backgroundColor1: COLORS.white,
  textColor7: COLORS.black,
};

export const selectedTheme = darkTheme;

const appTheme = {COLORS, SIZES, FONTS, darkTheme, lightTheme};

export default appTheme;

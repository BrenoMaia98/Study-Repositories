import {Dimensions, Platform, PixelRatio} from 'react-native';
const {width, height} = Dimensions.get('screen');

const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

// 'normalize' function from https://stackoverflow.com/questions/33628677/react-native-responsive-font-size|
export function normalize(size: number) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}
const blue = '#1F26D0';
const blueLight = '#397AF9';
const bluePale = '#B9B8E9';
const green = '#46745C';
const greenPale = '#C5DAC3';
const red = '#D01F1F';
const redPale = '#DAC3C3';
const black = '#000000';
const gray = '#828282';
const lightGray = '#ddd';
const white = '#ffffff';

export default {
  utils: {
    SCREEN_HEIGHT,
    SCREEN_WIDTH,
    normalize,
  },

  color: {
    blue,
    blueLight,
    bluePale,
    green,
    greenPale,
    red,
    redPale,
    black,
    gray,
    lightGray,
    white,
  },
  type: {
    grass: {
      darkColor: green,
      paleColor: greenPale,
      lightColorContrast: white,
    },
    fire: {darkColor: red, paleColor: redPale, lightColorContrast: white},
    water: {darkColor: blue, paleColor: bluePale, lightColorContrast: white},
    flying: {darkColor: blue, paleColor: bluePale, lightColorContrast: white},
    poison: {darkColor: red, paleColor: redPale, lightColorContrast: white},
  },
  font: {
    size: {
      small: `${normalize(12)}px`,
      normal: `${normalize(14)}px`,
      big: `${normalize(18)}px`,
      title: `${normalize(24)}px`,
      titleBigger: `${normalize(30)}px`,
    },
  },
};

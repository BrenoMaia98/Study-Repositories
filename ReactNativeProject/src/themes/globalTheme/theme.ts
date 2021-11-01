import {Dimensions, Platform, PixelRatio} from 'react-native';
const {width, height} = Dimensions.get('window');

export const SCREEN_HEIGHT = height;
export const SCREEN_WIDTH = width;

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
const white = '#ffffff';

export default {
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
    white,
  },
  type: {
    grass: {border: green, backGroundColor: greenPale},
    fire: {border: red, backGroundColor: redPale},
    water: {border: blue, backGroundColor: bluePale},
    flying: {border: blue, backGroundColor: bluePale},
    poison: {border: red, backGroundColor: redPale},
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

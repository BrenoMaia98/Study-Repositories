import {Dimensions, Platform, PixelRatio} from 'react-native';
const {width: SCREEN_WIDTH} = Dimensions.get('window');

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

export default {
  color: {
    blue: '#1F26D0',
    // blueLight: '#397AF9',
    // bluePale: '#B9B8E9',
    // green: '#46745C',
    // greenPale: '#C5DAC3',
    // red: '#D01F1F',
    // redPale: '#DAC3C3',
    // black: '#000000',
    // gray: '#828282',
    // white: '#ffffff',
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

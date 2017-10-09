import {
  StyleSheet,
  Platform
} from 'react-native';

import COMMON_STYLE from '../CommonStyle';

const { SCREEN, THEME_COLOR } = COMMON_STYLE;

const loaderWidth = parseInt(SCREEN.width / 4);

const Styles = StyleSheet.create({
  wrapper: {
    ...Platform.select({
      android: {
        backgroundColor: 'rgba(0,0,0,0.7)'
      }
    }),
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loader: {
    width: loaderWidth,
    height: loaderWidth
  }
});

export default {
  ...Styles,
  THEME_COLOR
};

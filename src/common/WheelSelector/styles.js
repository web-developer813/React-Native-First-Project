import {
  StyleSheet
} from 'react-native';

import COMMON_STYLE from '../CommonStyle';

const { THEME_COLOR, fonts, SCREEN } = COMMON_STYLE;
const ELEMENT_WIDTH = SCREEN.width / 3;
const Styles = StyleSheet.create({
  wrapper: {
    height: 80,
  },
  elementWrapper: {
    height: 80
  },
  element: {
    justifyContent: 'center',
    alignItems: 'center',
    width: ELEMENT_WIDTH
  },
  text: {
    ...fonts.medium,
    color: THEME_COLOR.lightGrey,
    fontSize: 17
  },
  selectedText: {
    color: THEME_COLOR.color
  }
});

export default {
  ...Styles,
  ELEMENT_WIDTH
};

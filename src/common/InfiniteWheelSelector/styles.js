import { StyleSheet } from 'react-native';

import COMMON_STYLE from '../CommonStyle';

const { THEME_COLOR, fonts } = COMMON_STYLE;
// const ELEMENT_WIDTH = SCREEN.width / 3;

const Styles = StyleSheet.create({
  horizontalContainer: {
    flexGrow: 1,
    flexShrink: 1,
    flexDirection: 'row',
    overflow: 'scroll',
  },
  horizontalContent: {
    flexDirection: 'row',
  },
  element: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  option: {
    ...fonts.medium,
    textAlign: 'center',
    alignItems: 'center',
    color: THEME_COLOR.lightGrey,
    fontSize: 17
  },
  selected: {
    color: THEME_COLOR.color
  }
});

export default {
  ...Styles
};

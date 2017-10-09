import {
  StyleSheet
} from 'react-native';

import COMMON_STYLE from '../CommonStyle';

const { fonts, THEME_COLOR } = COMMON_STYLE;

const Styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text: {
    ...fonts.medium,
    flex: 1,
    color: THEME_COLOR.color,
    fontSize: 16,
    alignSelf: 'center'
  },
});

export default {
  ...Styles,
  THEME_COLOR
};

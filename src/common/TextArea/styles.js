import {
  StyleSheet
} from 'react-native';

import COMMON_STYLE from '../CommonStyle';

const {
  fonts,
  THEME_COLOR
} = COMMON_STYLE;

const Styles = StyleSheet.create({
  textInput: {
    ...fonts.medium,
    fontSize: 16,
    backgroundColor: THEME_COLOR.boxColor
  }
});

export default {
  ...Styles,
  THEME_COLOR
};

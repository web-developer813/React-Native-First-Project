import {
  StyleSheet
} from 'react-native';

import COMMON_STYLE from '../CommonStyle';

const { THEME_COLOR, fonts } = COMMON_STYLE;
const Styles = StyleSheet.create({
  wrapper: {
    height: 80,
    flexDirection: 'row'
  },
  resultWrapper: {
    flex: -1,
    maxWidth: '30%',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    ...fonts.medium,
    fontSize: 14,
    textAlign: 'center',
    color: THEME_COLOR.greyish
  },
  result: {
    ...fonts.medium,
    textAlign: 'center',
    fontSize: 16,
  }
});

export default {
  ...Styles,
  THEME_COLOR
};

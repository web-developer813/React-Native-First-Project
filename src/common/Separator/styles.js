import {
  StyleSheet
} from 'react-native';

import COMMON_STYLE from '../CommonStyle';

const {
  fonts,
  THEME_COLOR
} = COMMON_STYLE;

const Styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    height: 44,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  label: {
    ...fonts.medium16,
    color: THEME_COLOR.grey,
    alignSelf: 'center',
    textAlign: 'center'
  },
  border: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: THEME_COLOR.greyish
  },
  button: {
    position: 'absolute',
    height: 44,
    right: 16,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Styles;

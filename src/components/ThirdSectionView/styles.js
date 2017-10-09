import {
  StyleSheet
} from 'react-native';

import COMMON_STYLE from '../../common/CommonStyle';

const { container, THEME_COLOR } = COMMON_STYLE;
const Styles = StyleSheet.create({
  ratingWrapper: {
    marginLeft: 20
  }
});

export default {
  ...Styles,
  container,
  THEME_COLOR
}

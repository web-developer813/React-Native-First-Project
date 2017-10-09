import {
  StyleSheet,
  Platform
} from 'react-native';

import COMMON_STYLE from '../CommonStyle';

const { fonts } = COMMON_STYLE;

const Styles = StyleSheet.create({
  button: {
    marginTop: 20,
    height: 48,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 4
  },
  text: {
    ...fonts.medium,
    color: '#fff',
    fontWeight: 'bold'
  }
});

export default Styles;

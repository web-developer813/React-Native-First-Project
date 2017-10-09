import { StyleSheet, Platform } from 'react-native';

import COMMON_STYLE from '../CommonStyle';

const { fonts, THEME_COLOR } = COMMON_STYLE;

const Styles = StyleSheet.create({
  headerWrapper: {
    backgroundColor: THEME_COLOR.boxColor,
    top: 0,
    ...Platform.select({
      ios: {
        height: 64,
      },
      android: {
        height: 63,
      },
    }),
    right: 0,
    left: 0,
    position: 'absolute',
    zIndex: 1
  },
  titleWrapper: {

    ...Platform.select({
      ios: {
        height: 64,
      },
      android: {
        height: 63,
      },
    }),
    left: 0,
    right: 0,
    alignItems:'center',
    flexDirection:'row',
    backgroundColor:'rgb(57,58,63)'

  },
  title: {
    ...fonts.headline,
    textAlign: 'center',
    color: '#ffffff',
    width: 180,
    alignSelf: 'center'
  },
  titleWithoutSubTitle: {
    top: 0
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 12,
    color: '#0A0A0A',
    alignSelf: 'center',
  },
  backButton: {
    height: 38,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rightButton: {
    height: 38,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',    
    borderRadius:3,
    paddingLeft:10,
    paddingRight:10,
    right: 16
  },
  backButtonContent: {
    ...Platform.select({
      android: {
        marginBottom: 20,
      }
    }),
    lineHeight: 38,
    fontSize: 14
  },
  dualRightBtnWrapper: {
    flexDirection: 'row',
    width: 48,
    justifyContent: 'space-between'
  }
});

export default {
  ...Styles,
  THEME_COLOR
};

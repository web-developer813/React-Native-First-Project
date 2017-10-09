import {
  StyleSheet
} from 'react-native';

import COMMON_STYLE from '../../common/CommonStyle';

const { THEME_COLOR, SCREEN, fonts } = COMMON_STYLE;

const Styles = StyleSheet.create({
  avatarWrapper: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    ...fonts.medium,
    flex: 1,
    height: 48,
  },
  timeframe: {
    ...fonts.medium12,
    color: THEME_COLOR.lightGrey
  },
  budget: {
    ...fonts.roman,
    fontSize: 22,
    flex: -1,
    textAlign: 'right',
    minWidth: 70,
    fontWeight: '900',
    marginTop: 3,
    color: THEME_COLOR.color
  },
  taskWrapper: {
    flex: 1,
    width: SCREEN.width,
    paddingVertical: 10,
    paddingHorizontal: 14,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: THEME_COLOR.lightGrey
  },
  taskWrapperWithHeight: {
    flex: 0,
    paddingVertical: 10,
    paddingHorizontal: 14,
    flexDirection: 'row',
    backgroundColor: THEME_COLOR.boxColor,
    height: 120
  },
  contentWrapper: {
    flexDirection: 'column',
    flex: 1
  },
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 50,
    alignItems: 'center',
    flex: -1,
    maxWidth: SCREEN.width - 28,
  },
  detailWrapperWithHeight: {
    height: 25,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  status: {
    ...fonts.roman,
    textAlign: 'right',
    alignSelf: 'flex-end',
    fontSize: 12,
    width: 100,
    color: THEME_COLOR.grey
  },
  locationPath: {
    ...fonts.roman,
    color: THEME_COLOR.grey,
    maxWidth: 200
  },
  customerAvatar: {
    borderRadius: 20
  }
});

export default Styles;

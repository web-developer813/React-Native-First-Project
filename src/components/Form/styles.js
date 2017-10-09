import {
  StyleSheet,
  Platform
} from 'react-native';

import COMMON_STYLE from '../../common/CommonStyle';

const {
  THEME_COLOR,
  SCREEN,
  fullContainer,
  fonts,
  tag,
  tagText,
  navigatorStyle,
  defaultNavBackBtn
} = COMMON_STYLE;

const Styles = StyleSheet.create({
  titleInputWrapper: {
    flexDirection: 'column',
    paddingHorizontal: 14,
    paddingTop: 24,
    borderBottomWidth: 1,
    borderBottomColor: THEME_COLOR.lightGrey
  },
  descriptionInputWrapper: {
    flexDirection: 'column',
    paddingTop: 24,
    paddingHorizontal: 14
  },
  categorySelectorWrapper: {
    flexDirection: 'column',
    paddingTop: 24,
    paddingHorizontal: 14,
    flex: 1
  },
  label: {
    ...fonts.medium,
    fontSize: 14,
    color: THEME_COLOR.greyish
  },
  textInput: {
    ...fonts.medium,
    fontSize: 16,
    height: 42
  },
  themeBtn: {
    backgroundColor: THEME_COLOR.color,
    marginHorizontal: 16
  },
  labelWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  bottomWrapper: {
    backgroundColor: 'red',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-end'
  },
  bottonWrapperOnKeyboardAppear: {
    paddingHorizontal: 14,
    marginBottom: 90,
    height: SCREEN.height - 510,
    justifyContent: 'flex-end'
  },
  categorySelector: {
    height: 36,
    alignItems: 'center',
    backgroundColor: THEME_COLOR.boxColor,
    flexDirection: 'row'
  },
  icon: {
    paddingHorizontal: 12
  },
  categorySelectorText: {
    ...fonts.medium,
    color: THEME_COLOR.grey
  },
  selectedCategoriesWrapper: {
    flexDirection: 'column',
    paddingHorizontal: 14,
    flex: 1
  },
  selectedCategory: {
    flexDirection: 'row',
    marginTop: 16,
    alignItems: 'center',
  },
  rightNavBtn: {
    flex: 1,
    alignItems: 'flex-end'
  },
  keyWordsWrapper: {
    paddingHorizontal: 14,
    paddingTop: 14,
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  header: {
    paddingHorizontal: 16,
  },
  inputGroup: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginVertical: 8,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  budgetWrapper: {
    height: 42,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    alignItems: 'center'
  },
  sign: {
    width: 20,
  },
  budgetInput: {
    width: 100,
    height: 42,
    paddingHorizontal: 12,
    backgroundColor: THEME_COLOR.boxColor,
    borderRadius: 4
  },
  onKeyboardAppear: {
    paddingBottom: 64,
    backgroundColor: 'white',
  },
  switch: {
    ...Platform.select({
      ios: {
        backgroundColor: THEME_COLOR.lightGrey,
        borderRadius: 18
      }
    })
  },
  taskBodyWrapper: {
    padding: 14,
    flex: 1
  },
  taskBody: {
    ...fonts.medium
  },
  buttonWrapper: {
    paddingBottom: 16,
    minHeight: 64,
    flex: -1
  },
  title: {
    ...fonts.roman,
    flex: 0,
    fontSize: 18,
    height: 48,
    letterSpacing: 0
  },
  headerWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: SCREEN.width,
    alignSelf: 'flex-start',
    backgroundColor: THEME_COLOR.boxColor,
    flex: 0
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
  unit: {
    fontSize: 14
  },
  withBorderTop: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: THEME_COLOR.boxColor
  }
});

export default {
  ...Styles,
  fullContainer,
  THEME_COLOR,
  tag,
  tagText,
  navigatorStyle,
  defaultNavBackBtn
};

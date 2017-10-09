import {
  StyleSheet,
  Platform,
  Dimensions
} from 'react-native';

import COMMON_STYLE from '../../common/CommonStyle';

const windowWidth = Dimensions.get('window').width;

const windowHeight = Dimensions.get('window').height;

const {
  THEME_COLOR,
  container,
  SCREEN,
  fullContainer,
  fonts,
  tag,
  tagText,
  navigatorStyle,
  defaultNavBackBtn
} = COMMON_STYLE;

const Styles = StyleSheet.create({
 fullContainer: {
    height: windowHeight,
    position: 'relative',
    backgroundColor : '#fff'
 },
 titleInputWrapper: {
    flexDirection: 'column',
    paddingHorizontal: 14,
    paddingTop: 24,
    borderBottomColor: THEME_COLOR.lightGrey,
 },
 labelWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
 },
 borderText : {
      paddingTop : 14,
      paddingHorizontal : 14,
      marginTop : 20,
      borderTopWidth : 1,
      borderTopColor: THEME_COLOR.lightGrey
 },
 borderLastText:{
    paddingVertical : 14,
      paddingHorizontal : 14,
      marginTop : 20,
      borderWidth : 1,
      borderColor: THEME_COLOR.lightGrey
 },
 stretch: {
      height: 20,
      width: 20,
      marginLeft: 3
 },
 buttonPosition: {
   position: 'absolute',
   left: 0,
   bottom: 10,
   width: windowWidth,
  },
 themeBtn: {
    backgroundColor: THEME_COLOR.color,
    flex: 1,
    zIndex: 10,
    marginHorizontal: 16
 },
 lastItem: {
    marginBottom : 100
 },
 label: {
     ...fonts.medium,
     fontSize: 14,
     color: THEME_COLOR.lightGrey
 },
 textInput: {
    ...fonts.medium,
    fontSize: 16,
    height: 42,
    borderBottomWidth: 1,
    borderBottomColor: THEME_COLOR.greyish
 },
 descriptionInputWrapper: {
     flexDirection: 'column',
     paddingTop: 24,
     paddingHorizontal: 14
 },
});


export default {
  ...Styles,
  container,
  navigatorStyle,
  THEME_COLOR
};
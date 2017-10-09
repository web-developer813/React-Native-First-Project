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
 customHeader : {
      color:'rgb(106,100,100)',
      fontSize:18,
      width:windowWidth,
      textAlign:'center',
      marginTop:15,
       marginBottom:15
 },
 imgTopLeft: {
       marginTop:15,
       height: 20,
       width:25,
       left:10,
       position: 'absolute'
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
 labelWrapper: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     paddingBottom: 10
 },
 label: {
     ...fonts.medium,
     fontSize: 14,
     color: THEME_COLOR.lightGrey
 },
 titleInputWrapper: {
     flexDirection: 'column',
     paddingHorizontal: 14,
     paddingTop: 24,
     borderBottomColor: THEME_COLOR.lightGrey,
 },
 textInput: {
     ...fonts.medium,
     fontSize: 16,
     height: 42,
     borderBottomWidth: 1,
     borderBottomColor: THEME_COLOR.greyish
 },
 passwordAlert : {
    backgroundColor : THEME_COLOR.color, position : 'absolute', left: 0, top: 0, width : windowWidth
 },
 lastItem : {
    marginBottom : 100
 }

});

export default {
  ...Styles,
  container,
  navigatorStyle,
  THEME_COLOR
};

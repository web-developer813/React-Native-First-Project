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
    position: 'relative',
    backgroundColor : '#fff'
  },
  titleInputWrapper: {
      flexDirection: 'column',
      paddingHorizontal: 14,
      paddingTop: 24,
      borderBottomColor: THEME_COLOR.lightGrey,
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
  labelWrapper: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     paddingBottom: 10
  },
  paddingBottom20 : {
    paddingBottom : 20,
  },
  paddingVertical10 : {
    paddingVertical : 10,
    paddingHorizontal : 10
  },
  backgroundGray : {
    backgroundColor : THEME_COLOR.boxColor
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
  date: {
      ...fonts.text2,
      color: THEME_COLOR.grey,
      flexDirection : 'column'
    },
  time: {
      ...fonts.text2,
      flex: 1,
      textAlign: 'right',
      color: THEME_COLOR.grey,
      flexDirection : 'column'
  },
  stretch: {
     height: 20,
     width: 20,
     marginLeft: 3
  },
  lastItem : {
    marginBottom : 100
  },
  viewScheduleTitleWrapper : {
    paddingHorizontal : 15 ,
    paddingVertical : 25,
    flex:1 ,
    flexDirection : 'row',
    alignItems:'center',
    justifyContent :'center'
  },
  viewScheduleTitle : {
    fontSize : 18,
    fontWeight : 'bold'
  },
  imgTopLeft: {
      marginTop:15,
      height: 20,
      width:25,
      left:10,
      position: 'absolute'
  },
  TextTopRight : {
    position : 'absolute',
    right :10,
    marginTop :16
  },
  customHeader : {
    color:'rgb(106,100,100)',
    fontSize:18,
    width:windowWidth,
    textAlign:'center',
    marginTop:15,
     marginBottom:15
  },
  timeDescription : {
    width : windowWidth-90
  },
  timeViewDescription : {
    width : windowWidth-140
  },
  descriptionInputWrapper: {
      flexDirection: 'column',
      paddingTop: 24,
      paddingHorizontal: 14
  },
  labelWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 10
  },
  header: {
      paddingHorizontal: 16,
      paddingTop :15
   },
  borderTop : {
     borderTopWidth: StyleSheet.hairlineWidth,
     borderTopColor: THEME_COLOR.greyish
  },
});

export default {
  ...Styles,
  container,
  navigatorStyle,
  THEME_COLOR
};

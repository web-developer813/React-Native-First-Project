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
    titleInputWrapper: {
         flexDirection: 'column',
         paddingHorizontal: 14,
         paddingTop: 24,
         borderBottomColor: THEME_COLOR.lightGrey,
    },
     textBody : {
            fontSize: 15,
            marginBottom:20
     }


})


export default {
  ...Styles,
  container,
  navigatorStyle,
  THEME_COLOR
};

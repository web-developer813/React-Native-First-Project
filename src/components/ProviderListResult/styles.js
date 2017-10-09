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
         flex:1,
         paddingHorizontal: 14,
    },
    border : {
        borderWidth : StyleSheet.hairlineWidth,
        borderColor: THEME_COLOR.greyish,
        height : 210,
        shadowColor: '#fff',
        shadowOpacity : 0.8,
        elevation : 1
    },
    storeInputWrapper : {
       flexDirection :'row',
       paddingHorizontal : 10,
    },
    fontColor : {
        color : '#fff'
    },
    inputWrapper : {
       flex: 1,
       flexDirection :'row',
       paddingVertical: 10,
       paddingHorizontal : 10,
       borderColor: THEME_COLOR.lightGrey
    },
    avatar: {
         width: 48,
         height: 48,
         borderRadius: 24,
    },
    profession: {
    },
    columnWrapper: {
         flex: 1,
         flexDirection: 'column',
         paddingHorizontal: 8
     },
    name: {
          fontSize :16,
          fontWeight: 'bold'
    },
    location: {
    },
    price : {
        color: THEME_COLOR.orange,
        fontSize: 16
    },
    lastColumn: {
     width: 100,
     flexDirection: 'column',
     alignItems: 'flex-end'
   },
   ratingWrapper: {
       marginLeft: 20,
       marginRight: -10
    },

   TextTopRight : {
        position : 'absolute',
        right :10,
        marginTop :16
   },









     searchbox: {
         height: 42,
         width: SCREEN.width - 130,
         backgroundColor: '#e6e6e6'
       },
       rightNavWrapper: {
         flexDirection: 'row'
       },
       listRowWrapper: {
         backgroundColor: '#fff',
         overflow: 'hidden',
         margin: 12,
         padding: 12,
         borderWidth: 1,
         borderColor: '#e6e6e6',
         borderRadius: 4,
         flex:1,
         flexDirection : 'row'
       },
       wrapper: {
         paddingBottom: 60
       },
       rowWrapper: {
         flex: 1,
         flexDirection: 'row'
       },







       description: {
         ...fonts.text2,
         marginTop: 12
       },
       listWrapper: {
         flex: 1
       },
       tagsWrapper: {
         flex: 1,
         flexDirection: 'row',
         marginTop: 12
       }
});



export default {
  ...Styles,
  container,
  navigatorStyle,
  THEME_COLOR
};

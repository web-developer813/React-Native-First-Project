import {
  StyleSheet,
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
  ratingWrapper: {
    marginLeft: 20
  },
  taskThreadImageView :{
     width:36,
     height:36,
     borderRadius: 18,
  },
  imageContainer: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'row',
  },
  circleImageView:{
    width:20,
    height:20,
    borderRadius: 10,
    marginRight:3,
  },
  titleInputWrapper: {
      flexDirection: 'column',
      paddingHorizontal: 14,
  },
  labelWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 10
  },
  paddingTopChange : {
    paddingTop: 10
  },
  taskBoardWidth :{
      width : windowWidth- 150
  },
  myTaskTimeContainer :{
      width : 75,
      alignItems :'flex-end',
  },
  borderTopContainer :{
      borderTopWidth:1,
      borderTopColor: THEME_COLOR.greyish,
      paddingBottom : 15
  },
  inputGroupLocation : {
      flex: 1,
      flexDirection: 'row',
      alignItems : 'center',
      paddingHorizontal : 16,
      justifyContent: 'center',
      marginVertical : 8
  },
  locationSelector : {
      flex: 1,
      alignItems : 'center',
      flexDirection:'column',
  },
  buttonsShow : {
    padding: 5,
    backgroundColor:THEME_COLOR.orangeText,
    color: 'white',
    marginRight: 5
  },
  buttonWrapper :{
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection:'row'
  },
  text: {
      ...fonts.medium,
      flex: 1,
      color: THEME_COLOR.color,
      fontSize: 16,
      alignSelf: 'center'
   },
  textPositionAbsoluteLocation :{
    fontSize: 16 ,
    backgroundColor: 'white',
    textAlign:'center',
    zIndex:100,
    position:'absolute',
    top:-11,
    left :windowWidth/2-40,
    width :80
  },
  textPositionAbsoluteBudget :{
      fontSize: 16 ,
      backgroundColor: 'white',
      textAlign:'center',
      zIndex:100,
      position:'absolute',
      top:-11,
      left :windowWidth/2-60,
      width :120
    },
  textPositionAbsoluteCategories:{
      fontSize: 16 ,
      backgroundColor: 'white',
      textAlign:'center',
      zIndex:100,
      position:'absolute',
      top:-11,
      left :windowWidth/2-50,
      width :100
  },
  textPositionAbsoluteKeywords :{
      fontSize: 16 ,
      backgroundColor: 'white',
      textAlign:'center',
      zIndex:100,
      position:'absolute',
      top:-11,
      left :windowWidth/2-50,
      width :100
  },
  keywordsText :{
    color:THEME_COLOR.orangeText,
    padding:5,
    borderWidth: 1,
    borderColor: THEME_COLOR.orangeText,
    marginRight : 5,
    marginTop :10
  }

});

export default {
  ...Styles,
   container,
   navigatorStyle,
   THEME_COLOR
}

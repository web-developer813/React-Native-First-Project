import {
  StyleSheet,
  Platform,
  Dimensions
} from 'react-native';

import COMMON_STYLE from '../../common/CommonStyle';

const windowWidth = Dimensions.get('window').width;

const windowHeight = Dimensions.get('window').height;

const profileSize = 50;

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
  headerWrapper: {
    flexDirection: 'column',
    backgroundColor: THEME_COLOR.fieldColor,
  },
  headerContentWrapper: {
     paddingBottom: 20,
     paddingLeft: 20,
     paddingRight: 20,
     paddingTop: 14,
     flexDirection: 'row',
  },
  iconSimpleLineTag: {
     flexDirection: 'row',
     paddingTop: 5
  },
  headerText: {
     fontSize: 16,
     marginLeft: 10,
     color: THEME_COLOR.grey,
     flexDirection: 'row',
     alignItems: 'center'
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
  label: {
     ...fonts.medium,
     fontSize: 14,
     color: THEME_COLOR.lightGrey
  },
  imageContainer: {
     flex: 1,
     paddingLeft: 10,
     paddingBottom: 10,
     paddingRight: 10,
     alignItems: 'center',
     flexDirection: 'row'
  },
  stretch: {
     height: 40,
     width: 40,
     marginLeft: 3
  },
  addImage: {
     height: 20,
     width: 20,
     marginLeft: 5
  },
  buttonPosition: {
     position: 'absolute',
     left: 0,
     bottom: 10,
     width: windowWidth,
  },
  textPosition : {
      position: 'absolute',
       left: 0,
       bottom: 70,
       width: windowWidth,
       paddingHorizontal: 16,
       marginVertical: 8,
  },
  themeBtn: {
     backgroundColor: THEME_COLOR.color,
     flex: 1,
     zIndex: 10,
     marginHorizontal: 16
  },
  lastItem : {
     marginBottom: 100
  },
  onKeyboardAppear: {
    paddingBottom: 64,
    backgroundColor: 'white',
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
  label: {
     ...fonts.medium,
     fontSize: 14,
     color: THEME_COLOR.greyish
  },
  subTitle : {
    fontSize : 16,
    width :  windowWidth- 100
  },
  hourlyRate : {
    fontSize : 16,
    color : THEME_COLOR.orange,
  },
  borderBottom : {
     borderBottomWidth : StyleSheet.hairlineWidth,
     borderBottomColor : THEME_COLOR.greyish
  },
  switch: {
      ...Platform.select({
        ios: {
          backgroundColor: THEME_COLOR.lightGrey,
          borderRadius: 18
        }
      })
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
  budgetWrapper: {
      height: 42,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignSelf: 'flex-end',
      alignItems: 'center'
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
  quantityView : {
     marginBottom : 15,
     marginTop : 15
  },
  offerViewTop: {
    width: windowWidth,
    height: 150,
    backgroundColor: 'rgba(51, 51, 51, 0.3)',
    zIndex: 100,
    position: 'absolute'
  },
  labelScreen: {
    fontSize:18,
    marginTop:15,
    fontFamily:'Avenir-Roman',
    width: windowWidth,
    textAlign:'center',
    color:'white',
    position: 'absolute'
  },
  imgTopLeft: {
    marginTop:15,
    height: 20,
    width:25,
    left:10,
    position: 'absolute'
  },
  labelProfileFooterBold: {
    fontSize:14,
    width: windowWidth,
    height:20,
    textAlign:'center',
    fontWeight: 'bold',
    color:'white',
    lineHeight:12
  },
  labelProfileFooter:{
    fontSize:12,
    width: windowWidth,
    marginTop:2,
    textAlign:'center',
    color:'white'
  },
  circleImageView:{
      width:profileSize,
      height:profileSize,
      borderRadius: profileSize/2,
      marginLeft:10,
  },
  labelGrayBold14:{
      fontFamily: 'Avenir-Roman',
      fontSize: 14,
      fontWeight:'bold',
      color:'rgba(106, 100, 100,1)',
      height:24
  },

  labelGray12:{
      fontSize:12,
      color:'rgba(106, 100, 100,1)',
      height:20
  },
  ratingValue : {
    justifyContent: 'space-between',
    flexDirection : 'column',
    marginLeft: 5,
    color: THEME_COLOR.orange
  },
  text16:{
    fontSize : 16,
    fontWeight: "normal"
  },
  rowWrapper : {
    flexDirection:'row',
    height:70,
    alignItems:'center',
    marginTop:10,
    paddingHorizontal:10
  },
  subTitleWrapper :{
    flexDirection:'row',
    justifyContent : 'center',
    alignItems:'center',
    paddingVertical: 10,
    paddingHorizontal:10,
  },
  subTitles :{
    fontSize  : 16,
    fontWeight : 'bold',
    textAlign: 'center',
    flexDirection : 'column',
    alignItems : 'center',
    paddingVertical : 10
  },
  marginBottom20 :{
    marginBottom : 20
  },
  hourlyRateLarge : {
      fontSize : 20,
      color : THEME_COLOR.orange,
    },
  quotationWidth : {
     flexDirection : 'column',
      width :  windowWidth- 150
    },
  budget: {
      ...fonts.roman,
      fontSize: 22,
      flex: -1,
      textAlign: 'right',
      minWidth: 70,
      marginTop: 3,
      color: THEME_COLOR.color
   },

  inputRightGroup: {
      flexDirection: 'row',
      paddingHorizontal: 16,
      marginVertical: 8,
      justifyContent: 'flex-end',
      alignItems: 'flex-end'
  },
  titleContentBody :{
     width : windowWidth-170,
     marginLeft:10
  }

});

export default {
  ...Styles,
  container,
  navigatorStyle,
  THEME_COLOR
};

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
    lastItem : {
        marginBottom: 70
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
    buttonPosition: {
        position: 'absolute',
        left: 0,
        bottom: 10,
        width: windowWidth,
    },
    disputeButtonPosition : {
        position: 'absolute',
        left: 0,
        bottom: 90,
        width: windowWidth,
    },
    themeBtn: {
        backgroundColor: THEME_COLOR.color,
        flex: 1,
        zIndex: 10,
        marginHorizontal: 16
    },
    onKeyboardAppear: {
        backgroundColor: 'white',
    },
    inputGroup: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        marginVertical: 8,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inputTitleGroup: {
        flexDirection: 'row',
        marginTop : 20,
        paddingHorizontal: 16,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    invoiceNumber: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    invoiceGroup:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 16
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
    switch: {
        ...Platform.select({
            ios: {
                backgroundColor: THEME_COLOR.lightGrey,
                borderRadius: 18
            }
        })
    },
    iconSimpleLineTag: {
        flexDirection: 'row',
        paddingTop: 5
    },
    stretch :{
        width : 30,
        height: 30
    },
    helpImage: {
        width : 10,
        height : 10
    },
    borderBottom : {
         borderBottomWidth : StyleSheet.hairlineWidth,
         borderBottomColor : THEME_COLOR.greyish
    },
    borderTop : {
        borderTopWidth : StyleSheet.hairlineWidth,
        borderTopColor : THEME_COLOR.greyish
    },
    subTitle : {
        fontSize : 16,
        width :  windowWidth- 100
    },
    hourlyRate : {
        fontSize : 16,
        color : THEME_COLOR.orange,
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
          color:'white',
          lineHeight:12,
          fontWeight : 'bold'
        },
        labelProfileFooter:{
          fontSize:12,
          width: windowWidth,
          marginTop:2,
          textAlign:'center',
          color:'white'
        },

    rowWrapper : {
        flexDirection:'row',
        height:70,
        alignItems:'center',
        marginTop:10,
        paddingHorizontal:10
    },
    circleImageView:{
          width:profileSize,
          height:profileSize,
          borderRadius: profileSize/2,
          marginLeft:10,
    },
    centerText : {
        marginLeft : 'auto',
        marginRight : 'auto',
        paddingTop: 20,
    },
    centerTextFont : {
        fontSize: 18,
        fontWeight : 'bold'
    },
    marginBottom20 :{
        marginBottom : 20
    },
    quotationWidth : {
     flexDirection : 'column',
      width :  windowWidth- 150
    },
    hourlyRateLarge : {
      fontSize : 20,
      color : THEME_COLOR.orange,
    },
    inputRightGroup: {
          flexDirection: 'row',
          paddingHorizontal: 16,
          justifyContent: 'flex-end',
          alignItems: 'flex-end'
    },
    budget: {
          ...fonts.roman,
          fontSize: 22,
          flex: -1,
          textAlign: 'right',
          minWidth: 90,
          marginTop: 3,
          color: THEME_COLOR.color
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
    confirmTextPosition : {
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
    cancelBtn : {
        backgroundColor: '#ff0000',
        flex: 1,
        zIndex: 10,
        marginHorizontal: 16
    },
    marginTop20 : {
        marginTop: 20
    },
    fontBold :{
        fontSize: 18,
        fontWeight: '900'
    },
    textAlignRight : {
        textAlign : 'right'
    },
    subListWidth : {
        width : windowWidth- 130
    },
    subListTextWidth : {
        width : 100
    },
    countWidth : {
        width : windowWidth - 80,
    },
    countTextWidth : {
        width : 40
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
})

export default {
  ...Styles,
  container,
  navigatorStyle,
  THEME_COLOR
};

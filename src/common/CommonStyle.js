import
{
  Dimensions,
  Platform,
  StyleSheet
} from 'react-native';

const { width, height } = Dimensions.get('window');

const SCREEN = {
  width,
  height
};

const THEME_COLOR = {
  color: '#F7941D', // this is theme color from Appster
  // color: '#f15a29',    // this is theme color from heard agency
  lightGrey: '#8E8E8E',
  lightRed: '#ff5959',
  grey: '#6A6464',
  green: '#8ED051',
  maroon: '#d42d1f',
  boxPlaceholderColor: '#9F9F9F',
  boxGrey: '#ACACAC',
  paleYellow: '#fff8f0',
  chatBubbleColor: '#E7E7E7',
  toasterBgColor: '#FFE57F',
  toasterNotifyColor: '#FFAB00',
  orange: '#f38118',

//Previous and Zeplin same ...
  boxColor: '#F9F9F9',
  fieldColor: '#F4F4F4',
  greyish: '#B8B8B8',

  //New Zeplin Styles for font.

  squash  : '#f7921e',
  black  : '#333333',
  greySepratorLine : '#979797',
  peachBGOrangeButton : '#fdc27b',
  lightRedButton : '#ff5959',
  greyishText  : '#565151',
  orangeText :'#f38118',
  lightGreyText : '#8e8e8e',
  tagsBackgroundColor : '#ffe8cc',
  badgeColorred : '#ef4136',
  inActiveColor : '#e6e6e6',
  tickColor : '#9aca90',
  blueGreyForTime : '#8190a7',
  redPasswordDontMatch : '#e70000',
  errorColor : '#fc4048',
  deleteErrorColor :'#ff5a5a',
  timeColor : '#8dd052',
  paleYellowBg: '#fff8f0',
  paginationColor : '#ffffff',
  paginationColor50 : 'rgba(255,255,255,0.5)',
  warmGrey : '#7b7b7b',
  greenColor:'#8ed051',
  activateColor :'#7dca41',
  oliveFollowColor : '#aed78a',
  visaBlue : '#2b73b6',
  lightGreyText70 : 'rgba(142, 142, 142, 0.7)',
  squashTwo : '#f7941d',
  chatBubbleColor : '#e7e7e7',
  greyColor : '#6a6464',
  greyishTwo : '#aaaaaa',
};

const fontFamilyItalic = Platform.select({
  ios: {
    fontFamily: 'AvenirNext-MediumItalic'
  },
  android: {
    fontFamily: 'sans-serif',
    fontStyle: 'italic'
  }
});

const fontFamily = {
   "default" : {
       fontFamily: 'Avenir-Medium'
     },
   "heavy" : {
       fontFamily : 'Avenir-Heavy'
   },
   "regular": {
       fontFamily : 'Avenir'
   },
   "book" : {
       fontFamily : 'Avenir-Book'
    },
   "black" : {
        fontFamily : 'Avenir-Black'
    },
   "medium" : {
        fontFamily : 'Avenir-Medium'
   },
   "roman" : {
        fontFamily : 'Avenir-Roman',
   },
   "oblique":{
        fontFamily : 'Avenir-Oblique'
   },
   "SFNS" : {
        fontFamily : 'sfns-system-san-francisco-display'
   }
};

const fonts = {
  text1: {
    ...fontFamily.default,
    fontSize: 18
  },
  text2: {
    ...fontFamily.default,
    fontSize: 14
  },
  text2Italic: {
    ...fontFamilyItalic,
    fontSize: 14
  },
  roman: {
    fontFamily: 'Avenir-Roman',
    fontSize: 16
  },
  medium20: {
    fontFamily: 'Avenir-Medium',
    fontSize: 20
  },
  medium22: {
    fontFamily: 'Avenir-Medium',
    fontSize: 22
  },
  medium: {
    fontFamily: 'Avenir-Medium',
    fontSize: 18
  },
  medium16: {
    fontFamily: 'Avenir-Medium',
    fontSize: 16
  },
  medium14: {
    fontFamily: 'Avenir-Medium',
    fontSize: 14
  },
  medium12: {
    fontFamily: 'Avenir-Medium',
    fontSize: 12
  },
  roman12: {
    fontFamily: 'Avenir-Roman',
    fontSize: 12
  },
  book: {
    fontFamily: 'Avenir-Book',
    fontSize: 16
  },
  heavy: {
    fontFamily: 'Avenir-Heavy',
    fontSize: 16
  },
  oblique: {
    fontFamily: 'Avenir-Oblique',
    fontSize: 16
  },
  italic: {
    fontFamily: 'AvenirNext-MediumItalic',
    fontSize: 14
  },
  headline: {
    ...fontFamily.default,
    fontSize: 16,
    fontWeight: 'bold',
    color: THEME_COLOR.grey
  }
};

const Styles = StyleSheet.create({
  fullContainer: {
    flex: 1
  },
  container: {
    ...Platform.select({
      ios: {
        marginTop: 14
      }
    }),
    flex: 1
  },
  containerWithHeader: {
    ...Platform.select({
      // based on different navbar height
      ios: {
        marginTop: 80,
      },
      android: {
        paddingTop: 70,
      }
    }),
    flex: 1
  },
  tabBar: {
    backgroundColor: '#fff',
    borderTopColor: '#f6931d',
    borderTopWidth: 1
  },
  navBar: {
    backgroundColor: '#fff',
  },
  navBarTitle: {
    color: '#fab678'
  },

  /**
   * Global tags view
   * @type {Object}
   */
  tagsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'flex-start'
  },
  tag: {
    height: 32,
    paddingHorizontal: 8,
    marginRight: 6,
    marginVertical: 4,
    flexDirection: 'row',
    borderRadius: 4,
    alignItems: 'center',
    backgroundColor: '#ffe7cb'
  },
  tagFilter: {
    height: 32,
    paddingHorizontal: 8,
    marginRight: 6,
    flexDirection: 'row',
    borderRadius: 4,
    alignItems: 'center',
    backgroundColor: '#ffe7cb'
  },
  tagText: {
    ...fonts.medium14,
    lineHeight: 22,
  },
  tagAddBtn: {
    flexDirection: 'row',
    height: 32
  },
  addTagBtnText: {
    lineHeight: 26,
  },
  selectedTag: {
    borderWidth: 2,
    borderColor: THEME_COLOR.color
  },
  selectedTagText: {
    color: THEME_COLOR.color
  },
  unselectedTag: {
    backgroundColor: '#fff',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: THEME_COLOR.lightGrey
  },
  unselectedTagText: {
    color: THEME_COLOR.lightGrey
  },
  body: {
    flex: 1,
    paddingHorizontal: 16
  },
  label: {
    ...fonts.text1,
    color: '#7d7777',
    flex: 1,
    fontSize: 20,
    height: 32,
    lineHeight: 32,
    marginTop: 12
  },
  flexDirectionRow: {
    flexDirection: 'row'
  },
  flexDirectionColumn: {
    flexDirection: 'column'
  },

  dateNumber : {
     ...fontFamily.heavy,
    fontSize : 18,
    color : THEME_COLOR.greyColor
  },
  boldOrangeText : {
    ...fontFamily.heavy,
    fontSize : 18,
    color : THEME_COLOR.squashTwo
  },
  boldTitleFont : {
       ...fontFamily.heavy,
      fontSize : 18,
      color : THEME_COLOR.greyColor
  },
  titleFont : {
      ...fontFamily.medium,
     fontSize : 18,
     color : THEME_COLOR.greyColor
  },
  centerTitleFont : {
     justifyContent : 'center',
     alignItems : 'center',
     ...fontFamily.medium,
     fontSize : 18,
     color : THEME_COLOR.greyColor,
     textAlign : 'center'
  },
  greyCross :{
    ...fontFamily.SFNS,
    fontSize : 18,
    color: THEME_COLOR.greyish
  },
  titleTextOnContent :{
      ...fontFamily.SFNS,
      fontSize : 18,
      color: THEME_COLOR.greyColor,
      textAlign: 'center'
  },
  newNavBar : {
      ...fontFamily.roman,
     fontSize : 15,
     color: THEME_COLOR.greyColor,
     letterSpacing :0.5
  },
  withNavBar :{
     ...fontFamily.roman,
     fontSize : 15,
     color: THEME_COLOR.paginationColor,
     letterSpacing : 0.5
  },
  textStyle : {
     ...fontFamily.roman,
    color : THEME_COLOR.paginationColor,
     fontSize : 15,
  },
  titleTextOnImage :{
     ...fontFamily.black,
    fontSize: 15,
    color: THEME_COLOR.greyColor,
    lineHeight : 12
  },
  whiteTitle : {
    ...fontFamily.heavy,
    fontSize : 14,
    color: THEME_COLOR.paginationColor
  },
  orangeLinkColor : {
    ...fontFamily.heavy,
   fontSize : 14 ,
   color: THEME_COLOR.squashTwo,
   justifyContent : 'center',
   alignItems : 'center',
   textAlign :'center',
   letterSpacing : 1
  },
  titleGrey : {
    ...fontFamily.heavy,
    fontSize : 14,
    color : THEME_COLOR.greyColor
  },
  centerDatesNumber : {
    ...fontFamily.heavy,
    fontSize : 14 ,
    color:THEME_COLOR.greyColor,
    textAlign : 'center'
  },
  signUpText : {
    ...fontFamily.heavy,
    fontSize : 14,
    color: THEME_COLOR.lightGreyText
  },
  greyMonthsText : {
    ...fontFamily.medium,
    fontSize: 14,
    color: THEME_COLOR.greyish
  },
  greyTextOnButton : {
      ...fontFamily.medium,
      fontSize: 14,
      color: THEME_COLOR.greyColor
  },
  whiteButtonText : {
      ...fontFamily.medium,
      fontSize : 14,
      color : THEME_COLOR.squashTwo,
      textAlign : 'center'
  },
  orangeLinkText : {
      ...fontFamily.medium,
      fontSize : 14,
      color : THEME_COLOR.squashTwo,
      textAlign : 'center'
  },
  deleteStoreFrontText :{
      ...fontFamily.medium,
      fontSize : 14 ,
      color : THEME_COLOR.deleteErrorColor
  },
  greenTextSettings : {
      ...fontFamily.medium,
      fontSize : 14,
      color: THEME_COLOR.activateColor
  },
  deleteStoreText : {
      ...fontFamily.medium,
      fontSize : 14,
      color: THEME_COLOR.redPasswordDontMatch
  },
  categoriesTitleGreyText : {
     ...fontFamily.medium,
     fontSize :14 ,
     color: THEME_COLOR.greyColor
  },
  orangeButtonText : {
     ...fontFamily.medium,
     fontSize: 14,
     color: THEME_COLOR.paginationColor
  },
  writeMsgText : {
     ...fontFamily.SFNS,
     fontSize :14,
     color: THEME_COLOR.greyish
  },
  subTitleGreyText :{
    ...fontFamily.SFNS,
    fontSize : 14,
    color: THEME_COLOR.lightGreyText
  },
  orangeL : {
    ...fontFamily.SFNS,
    fontSize : 14,
    color: THEME_COLOR.squashTwo
  },
  fieldText : {
     ...fontFamily.SFNS,
     fontSize : 14,
     color: THEME_COLOR.greyish
  },
  textOnOrangeBubble :{
     ...fontFamily.book,
     fontSize : 14,
     color: THEME_COLOR.boxColor
  },
  orangeTextForAddingButtonText :{
     ...fontFamily.book,
     fontSize : 14,
     color : THEME_COLOR.squashTwo
  },
  chatBubbleText : {
     ...fontFamily.book,
     fontSize : 14,
     color: THEME_COLOR.greyColor
  },
  lightContentText:{
    ...fontFamily.book,
    fontSize :14,
    color: THEME_COLOR.lightGreyText
  },
  whiteTextOnOrangeChatBubble : {
    ...fontFamily.book,
    fontSize : 14,
    color: THEME_COLOR.paginationColor
  },
  addTagsText : {
    ...fontFamily.book,
    fontSize : 14,
    color: THEME_COLOR.lightGreyText
  },
  searchTextLight : {
    ...fontFamily.roman,
    fontSize: 14,
    color: THEME_COLOR.lightGreyText70
  },
  reviewsText :{
    ...fontFamily.roman,
    fontSize: 14,
    color: THEME_COLOR.lightGreyText,
    textAlign : 'center'
  },
  addServiceText:{
    ...fontFamily.roman,
    fontSize : 14,
    color: THEME_COLOR.squashTwo
  },
  contentColor: {
    ...fontFamily.roman,
    fontSize : 14,
    color: THEME_COLOR.greyColor,
    textAlign : 'center'
  },
  RightTextField :{
     ...fontFamily.roman,
     fontSize : 14,
     color: THEME_COLOR.lightGreyText,
     textAlign : 'right'
  },
  orangeText : {
      ...fontFamily.roman,
      fontSize :14,
      color: THEME_COLOR.squashTwo
  },
  descriptionText :{
     ...fontFamily.roman,
     fontSize : 14,
     color: THEME_COLOR.greyishTwo
  },
  textField :{
     ...fontFamily.roman,
     fontSize : 14,
     color: 'rgba(106,100,100,0.7)'
  },
  inActiveTimeText :{
      ...fontFamily.roman,
      fontSize: 14,
      color:THEME_COLOR.greyish
  },
  timeText:{
      ...fontFamily.roman,
      fontSize: 14,
      color : THEME_COLOR.greyColor
  },
  whiteTextField :{
     ...fontFamily.roman,
     fontSize : 14,
     color: THEME_COLOR.paginationColor
  },
  textPlaceholder:{
    ...fontFamily.roman,
    fontSize:14,
    color: THEME_COLOR.greyish
  },
  searchText :{
    ...fontFamily.roman,
    fontSize : 14,
      color: THEME_COLOR.greyColor
  },
  textFieldLight :{
    ...fontFamily.roman,
    fontSize : 14,
    color: THEME_COLOR.lightGreyText
  },
  centerOrangeText :{
    ...fontFamily.roman,
    fontSize : 14,
    color: THEME_COLOR.squashTwo,
    textAlign: 'center',
    letterSpacing : 0.1
  },
  timeTextForInbox :{
     ...fontFamily.roman,
     fontSize:14,
     color: THEME_COLOR.timeColor
  },
  titleColorWhiteText:{
     ...fontFamily.black,
     fontSize :13,
     lineHeight: 12,
     color: THEME_COLOR.paginationColor
  },
  hrsOrangeText:{
    ...fontFamily.heavy,
    fontSize: 12,
    color: THEME_COLOR.squashTwo
  },
  followersNameText:{
    ...fontFamily.heavy,
    fontSize: 12,
    color: THEME_COLOR.greyColor
  },
  budgetText:{
     ...fontFamily.heavy,
     fontSize: 12,
     color: THEME_COLOR.greyColor
  },
  inActiveDateText :{
     ...fontFamily.medium,
     fontSize: 12,
     color: THEME_COLOR.greyish
  },
  resetLinkText :{
     ...fontFamily.medium,
     fontSize :12,
     color:THEME_COLOR.squashTwo
  },
  subContentWhiteText : {
     ...fontFamily.medium,
     fontSize:12,
     color: THEME_COLOR.paginationColor
  },
  mediumTitleText :{
    ...fontFamily.medium,
    fontSize: 12,
    color: THEME_COLOR.greyColor
  },
  whiteTextOnGreenBg :{
    ...fontFamily.medium,
    fontSize : 12,
    color:THEME_COLOR.paginationColor,
    textAlign : 'center'
  },
  unFollowText :{
    ...fontFamily.medium,
    fontSize:12,
    color: THEME_COLOR.lightGreyText
  },
  serviceText:{
    ...fontFamily.medium,
    fontSize : 12,
    color: THEME_COLOR.greyColor,
  },
  italicOrangeTextForHighlight:{
     ...fontFamilyItalic,
    fontSize :12,
    color: THEME_COLOR.orangeText
  },
  numberOnCircle : {
    ...fontFamily.SFNS,
    fontSize :12,
    color: THEME_COLOR.paginationColor
  },
  requestServiceText : {
     ...fontFamily.SFNS,
     fontSize : 12,
     color: THEME_COLOR.paginationColor
  },
  contentText : {
     ...fontFamily.book,
     fontSize :12,
     color: THEME_COLOR.greyColor
  },
  rightInActiveText:{
    ...fontFamily.book,
    fontSize : 12,
    color : THEME_COLOR.greyish,
    textAlign : 'right'
  },
  inActiveText :{
      ...fontFamily.book,
      fontSize : 12,
      color : THEME_COLOR.greyish,
  },
  newTagText: {
      ...fontFamily.book,
      fontSize :12,
      color: THEME_COLOR.lightGreyText
  },
  inActiveTextColor:{
      ...fontFamily.book,
      fontSize : 12,
      color : THEME_COLOR.inActiveColor,
  },
  addMomentText:{
      ...fontFamily.book,
      fontSize : 12,
      color: THEME_COLOR.paginationColor
  },
  orangeTextRight:{
     ...fontFamily.book,
     fontSize : 12,
     textAlign: 'right',
     color: THEME_COLOR.squashTwo
  },

  contentTextLineHeight:{
      ...fontFamily.book,
      fontSize : 12,
      color: THEME_COLOR.greyColor,
      lineHeight : 15
  },
  orangeTextForTags:{
      ...fontFamily.book,
      fontSize : 12,
      color: THEME_COLOR.squashTwo
  },
  italicText : {
     ...fontFamilyItalic,
     fontSize: 12,
     color: THEME_COLOR.greyColor
  },
  whiteText: {
     ...fontFamily.roman,
     fontSize :12,
     color : THEME_COLOR.paginationColor
  },
  diffCategoryText:{
    ...fontFamily.roman,
    fontSize :12,
    color: THEME_COLOR.squashTwo,
    textAlign : 'center'
  },
  contentTextDeactivate:{
    ...fontFamily.roman,
    fontSize: 12,
    color: THEME_COLOR.greyColor,
    textAlign:'center'
  },
  greyText :{
     ...fontFamily.roman,
     fontSize : 12,
     color: THEME_COLOR.lightGreyText
  },
  toTextInBetween:{
     ...fontFamily.roman,
     fontSize: 12,
     color: THEME_COLOR.squashTwo
  },
  timeFront :{
     ...fontFamily.roman,
     fontSize: 12,
     textAlign:'right',
     color: THEME_COLOR.warmGrey
  },
  commentsText:{
     ...fontFamily.roman,
     fontSize : 12,
     color: THEME_COLOR.orangeText
  },
  inActiveLocationText:{
    ...fontFamily.roman,
    fontSize :12,
    color : THEME_COLOR.greyish
  },
  diffCategoriesText:{
    ...fontFamily.roman,
    fontSize: 12,
    color: THEME_COLOR.squashTwo,
    textAlign: 'center',
    letterSpacing : 0.6
  },
  titleTextLocation : {
    ...fontFamily.roman,
    fontSize :12,
    color: THEME_COLOR.greyColor
  },
  followingText:{
    ...fontFamily.heavy,
    fontSize : 10,
    color: THEME_COLOR.greyColor
  },
  month:{
    ...fontFamily.heavy,
    fontSize : 10,
    color:THEME_COLOR.greyColor,
    textAlign: 'center'
  },
  tooltipTitle : {
    ...fontFamily.medium,
    fontSize: 10,
    color: THEME_COLOR.greyish
  },
  rightToolTipTitle :{
      ...fontFamily.medium,
      fontSize: 10,
      color: THEME_COLOR.greyish,
      textAlign:'center'
  },
  clearText :{
    ...fontFamily.medium,
    fontSize :10,
    color: THEME_COLOR.lightGreyText
  },
  clearTextUnderlined: {
    ...fontFamily.medium,
    fontSize : 10,
    color: THEME_COLOR.squashTwo
  },
  smallTitleForTimeBook :{
     ...fontFamily.book,
     fontSize :10,
     color: THEME_COLOR.lightGreyText
  },
  italicWhiteText:{
     ...fontFamilyItalic,
     fontSize: 10,
     color:THEME_COLOR.paginationColor
  },
  greyText :{
     ...fontFamily.roman,
     fontSize: 10,
     color: THEME_COLOR.greyColor,
     textAlign: 'right'
  },
  greenText: {
     ...fontFamily.roman,
     fontSize :10,
     color: THEME_COLOR.timeColor,
     textAlign: 'right'
  },
  smallTitleForTimeRoman :{
     ...fontFamily.roman,
     fontSize : 10,
     color: THEME_COLOR.lightGreyText
  },
  offlineColor :{
     ...fontFamily.roman,
     fontSize : 10,
     color :THEME_COLOR.greyColor,
     letterSpacing : 0.5
  },
  timeColor:{
      ...fontFamily.roman,
      fontSize : 10,
      color: THEME_COLOR.lightGreyText,
      textAlign: 'center'
  },
  replyText :{
      ...fontFamily.roman,
      fontSize : 10,
      color : THEME_COLOR.greyColor
  },
  hoursWhiteText :{
    ...fontFamily.roman,
    fontSize :10,
    color: THEME_COLOR.paginationColor
  },
  smallInActiveText :{
     ...fontFamily.roman,
     fontSize : 10,
     color : THEME_COLOR.greyish
  },
  smallTimeText:{
      ...fontFamily.roman,
      fontSize : 10,
      color: THEME_COLOR.blueGreyForTime,
      textAlign : 'center'
  },
  smallToolTipTitle :{
     ...fontFamily.medium,
     fontSize : 9,
     color :THEME_COLOR.greyish
  },
  errorColor : {
    fontSize : 9,
    color : THEME_COLOR.errorColor
  },
  verifiedText :{
     fontSize : 9,
     textAlign : 'right',
     color :THEME_COLOR.squashTwo
  },




});

const navigatorStyle = {
  statusBarTextColorScheme: 'light',
  drawUnderTabBar: false, // screen would not draw under bottom tab
  drawUnderNavBar: false, // screen would not draw under top nav
  screenBackgroundColor: 'white',
  navBarTextFontFamily: 'Avenir-Medium',
  navBarTitleTextCentered: true,
  navBarTranslucent: false,
  navBarTextColor: THEME_COLOR.grey,
  navBarBackgroundColor: THEME_COLOR.boxColor,
  navBarButtonColor: THEME_COLOR.grey,
};

const defaultNavBackBtn = {
  leftButtons: [
    {
      icon: require('./Images/backIcon.png'),
      id: 'back'
    }
  ]
};

export default {
  ...Styles,
  SCREEN,
  THEME_COLOR,
  fonts,
  navigatorStyle,
  defaultNavBackBtn
};

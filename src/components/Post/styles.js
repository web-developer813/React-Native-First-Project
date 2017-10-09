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
  italicText: {
    fontSize: 16,
    color: THEME_COLOR.lightGrey,
    fontStyle: 'italic'
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
  labelLarge :{
     ...fonts.medium,
     color: THEME_COLOR.greyish,
     fontSize: 20,
     fontWeight : 'bold'
  },
  textInput: {
    ...fonts.medium,
    fontSize: 16,
    height: 42,
    borderBottomWidth: 1,
    borderBottomColor: THEME_COLOR.greyish
  },
  textSelectInput: {
    ...fonts.medium,
    fontSize: 16,
    height: 42,
    borderBottomWidth: 1,
    borderBottomColor: THEME_COLOR.orange
  },
  descriptionInputWrapper: {
    flexDirection: 'column',
    paddingTop: 24,
    paddingHorizontal: 14
  },
  icon: {
    paddingHorizontal: 12
  },
  labelWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10
  },
  icons: {
    color: THEME_COLOR.lightGrey,
    height: 30,
    transform: [{ rotate: '45deg' }]
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
  descriptionTextArea: {
    height: 150,
  },
  tabImageContainer : {
      flex: 1,
    paddingBottom: 10,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom : 100,
    paddingTop: 10,
  },
  imageContainer: {
    flex: 1,
    paddingLeft: 10,
    paddingBottom: 10,
    paddingRight: 10,
    alignItems: 'center',
    flexDirection: 'row',
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
  header: {
    paddingHorizontal: 16,
  },
  onKeyboardAppear: {
    paddingBottom: 64,
    backgroundColor: 'white',
  },
  inputGroup: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginVertical: 8,
    justifyContent: 'space-between',
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
  switch: {
    ...Platform.select({
      ios: {
        backgroundColor: THEME_COLOR.lightGrey,
        borderRadius: 18
      }
    })
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
  taskBodyWrapper: {
      padding: 14,
      paddingRight :10,
      flex: 1
   },
  taskSubject: {
     fontWeight: 'bold',
     ...fonts.medium
  },
  taskTimeFrame : {
     fontWeight : 'normal',
     ...fonts.medium
  },
  taskContent : {
    flexDirection : 'row',
    paddingTop : 20,
    paddingLeft : 5
  },
  lastItem : {
   marginBottom: 100
  },
});

export default {
  ...Styles,
  container,
  navigatorStyle,
  THEME_COLOR
};

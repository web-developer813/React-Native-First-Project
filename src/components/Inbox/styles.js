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

const profileSize =20;
const Styles = StyleSheet.create({
    titleInputWrapper: {
        flexDirection: 'column',
        paddingHorizontal: 14,
        paddingTop: 24,
    },
    labelWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10
    },
    circleImageLargeView:{
          width:30,
          height:30,
          borderRadius: 15,
          marginLeft:3,
    },
    circleImageView:{
      width:profileSize,
      height:profileSize,
      borderRadius: profileSize/2,
      marginLeft:3,
    },
    taskThreadImageView :{
       width:36,
       height:36,
       borderRadius: 18,
       marginLeft:3,
    },
    imageContainer: {
        flex: 1,
        paddingTop: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },
    myTaskContainer :{
        width: windowWidth-100,
        marginBottom:5
    },
    myTaskNumber :{
        fontSize:10,
        marginLeft:10,
    },
    myTaskList :{
        width:100,
        marginLeft: 10,
        fontSize:12
    },
    myTaskTimeContainer :{
        width : 70,
        alignItems :'flex-end',
    },
    myTaskTime:{
        fontSize: 10
    },
    borderTopContainer :{
        borderTopWidth:1,
        borderTopColor: THEME_COLOR.greyish,
        paddingBottom : 15
    },
    paddingTopChange: {
        paddingTop:12
    },
    myTaskSubList :{
        width:100,
        marginLeft: 10,
        fontSize:12
    },
    myTaskContent : {
        marginTop: 15,
        width : 20,
        height: 20,
        borderRadius: 10,
        borderWidth:1,
        borderColor: THEME_COLOR.boxColor,
        color: '#fff',
        backgroundColor: THEME_COLOR.badgeColorred,
        alignItems: 'center',
        justifyContent:'center',
        fontSize: 11,
        paddingTop:2,
        paddingLeft:3
    },
    iconAlert : {
        color: THEME_COLOR.squashTwo,
        position:'absolute',
        bottom :10 ,
        left :-8
    },
    redPoint : {
        backgroundColor: THEME_COLOR.badgeColorred,
        width : 6,
        height: 6,
        borderRadius:4
    },
    changeRedPoint: {
        justifyContent:'flex-end',
        marginLeft:15
    },
    detailWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: 10,
        flex: 1,
      },
    calendarWrapper : {
        flexDirection: 'row',
        flex: 1,
        paddingLeft : 5,
        paddingRight: 5
    },
    contentBody:{
        flexDirection : 'column'
    },
    locationPathBody : {
        flexDirection : 'column',
        color: THEME_COLOR.orange
     },
    ratingWrapper: {
       marginRight: -10
    },
    ratingText :{
      fontSize :12,
      marginTop:1,
      marginLeft:3
    },
    taskThreadWidth :{
        width : windowWidth- 150
    },
    taskThreadContainer :{
        paddingTop:5,
        paddingLeft: 8,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
})

export default {
  ...Styles,
  container,
  navigatorStyle,
  THEME_COLOR
};

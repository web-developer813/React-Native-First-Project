import {
  StyleSheet
} from 'react-native';

import COMMON_STYLE from '../../common/CommonStyle';

const { THEME_COLOR, SCREEN, fonts } = COMMON_STYLE;

const Styles = StyleSheet.create({
  avatarWrapper: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center'
  },
  budgetWrapper : {
    flex : 1,
    paddingVertical : 10,
    paddingHorizontal : 14,
    flexDirection : 'column',
    borderBottomColor : 1,
    borderBottomColor : THEME_COLOR.lightGrey,
    alignItems : 'center'
  },
  border : {
    borderBottomColor : 1,
    borderBottomColor : THEME_COLOR.lightGrey
  },
  postWrapperWithHeight: {
    flex: 0,
    paddingVertical: 10,
    paddingHorizontal: 5,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: THEME_COLOR.lightGrey,
  },
  contentWrapper: {
    flexDirection: 'column',
    flex: 1,
  },
   detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 50,
    alignItems: 'center',
    flex: -1,
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
  budgetContent : {
    flexDirection : 'row'
  },
  budgetHeader : {
    fontWeight : 'bold',
    ...fonts.medium16,
    flexDirection : 'column',
  },
  budgetText : {
   flexDirection : 'column',
   ...fonts.medium16,
   color: THEME_COLOR.orange
  },
  customerAvatar: {
      borderRadius: 20
  },
  title: {
     ...fonts.medium,
     fontWeight: 'bold',
     color: THEME_COLOR.lightGrey,
     paddingLeft : 5

  },

});


export default Styles;
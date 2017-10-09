import {
  StyleSheet
} from 'react-native';

import COMMON_STYLE from '../../common/CommonStyle';

const {
  fullContainer,
  THEME_COLOR,
  fonts,
  SCREEN
} = COMMON_STYLE;

const imageCellSize = (SCREEN.width) / 3;
const Styles = StyleSheet.create({
  wrapper: {    
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pickerButton: {
    flex: 1,
    height: 32,
    marginLeft: 10,
    alignItems: 'center',
    flexDirection: 'row'
  },
  pickerButtonInner: {
    flex: 1,
    height: 32,
    alignItems: 'center',
    flexDirection: 'row'
  },
  clipIcon: {
    marginRight: 6
  },
  label: {
    ...fonts.medium,
    fontSize: 14,
    color: THEME_COLOR.greyish
  },
  editorOverlayUnder: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 140,
    backgroundColor: 'rgba(255,255,255,0.7)',
    flexDirection: 'row',
    flex: 1,
    bottom: 0,
    zIndex: 2,
    justifyContent: 'space-between'
  },
  buttonWrapper: {
    flex: 1,
    zIndex: 3,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end'
  },
  leftButton: {
    backgroundColor: THEME_COLOR.squash,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28,
    marginBottom: 10,
    width: 56,
    height: 56
  },
  rightButton: {
    backgroundColor: THEME_COLOR.oliver,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28,
    marginBottom: 10,
    width: 56,
    height: 56
  },
  loader: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  photoGrid: {
    flex: 1,
  },
  girdContentStyle: {
    paddingTop: 65,
    paddingBottom: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // flex: 1
  },
  photoCell: {
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: imageCellSize,
    height: imageCellSize
  },
  highlight: {
    borderWidth: 2,
    borderColor: THEME_COLOR.color
  },
  row: {
    width: SCREEN.width,
    flexDirection: 'row'
  },
  frame: {
    backgroundColor: THEME_COLOR.boxColor,
    width: imageCellSize,
    height: imageCellSize,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cell: {
    margin: 2,
    width: imageCellSize - 4,
    height: imageCellSize - 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkBoxWrap: {
    position: 'absolute',
    top: 10,
    right: 10,
    height: 24,
    width: 24,
    zIndex: 2,
    backgroundColor: 'transparent',
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkedWrap: {
    backgroundColor: THEME_COLOR.green
  },
  checkIcon: {
    borderRadius: 4,
    height: 18,
    width: 18
  },
  confirmBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 4,
    backgroundColor:'rgb(26,173,25)',
    paddingLeft:10,
    paddingRight:10,
  },
  confirmText: {
    ...fonts.medium16,
    color: 'rgb(255,255,255)'
    //color: THEME_COLOR.grey

  },
  rightIcon:
  {
    height: 38,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'rgb(26,173,25)',
    borderRadius:3,
    paddingLeft:10,
    paddingRight:10,
    right: 16
  },
  resultWrapper: {
    flexDirection: 'row'
  },
  resultImg: {
    marginHorizontal: 2
  },
  imgEdit: {
    backgroundColor:'black',
    marginTop:60,
    width: SCREEN.width,
    height:SCREEN.height-160
  },
  imgEditWidth: {
    width: SCREEN.width
  },
  bottomBar:
  {
    width: SCREEN.width,
    height:100,
    backgroundColor:'rgb(57,58,63)'
  }
});

export default {
  ...Styles,
  fullContainer,
  THEME_COLOR,
  fonts
};

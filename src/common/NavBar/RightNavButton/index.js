import React, {
  PropTypes
} from 'react';
import {
  View,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from '../styles';

const RightNavButton = ({ onFirstRightBtnPress, onSecondRightBtnPress }) => (
  <View style={Styles.dualRightBtnWrapper}>
    <TouchableOpacity onPress={onFirstRightBtnPress}>
      <Icon name="magnify" size={24} color={Styles.THEME_COLOR.grey} />
    </TouchableOpacity>
    <TouchableOpacity onPress={onSecondRightBtnPress}>
      <Icon name="tune" size={24} color={Styles.THEME_COLOR.grey} />
    </TouchableOpacity>
  </View>
);

RightNavButton.propTypes = {
  onFirstRightBtnPress: PropTypes.func,
  onSecondRightBtnPress: PropTypes.func
};

RightNavButton.defaultProps = {
  onFirstRightBtnPress: null,
  onSecondRightBtnPress: null
};

export default RightNavButton;

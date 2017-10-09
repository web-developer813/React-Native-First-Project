import React from 'react';
import {
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from '../styles';

const PlusNavButton = ({ ...props }) => (
  <TouchableOpacity {...props}>
    <Icon name="close" size={24} color={Styles.THEME_COLOR.grey} />
  </TouchableOpacity>
);

export default PlusNavButton;

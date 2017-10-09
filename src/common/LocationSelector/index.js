import React from 'react';

import PropTypes from 'prop-types';

import {
  TouchableOpacity,
  Text
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Styles from './styles';

const LocationSelector = ({ text, onPress, style }) => (
  <TouchableOpacity style={[Styles.wrapper, style]} onPress={onPress}>
    <Text numberOfLines={1} style={Styles.text}> <Icon name="magnify" color={Styles.THEME_COLOR.boxGrey} size={20} /> {text}</Text>
  </TouchableOpacity>
 );

LocationSelector.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number
  ])
};

LocationSelector.defaultProps = {
  text: null,
  onPress: () => {},
  style: null
};

export default LocationSelector;

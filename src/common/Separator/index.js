import React, {
  PropTypes
} from 'react';
import {
  View,
  Text
} from 'react-native';

import Styles from './styles';

const Separator = ({ ...props, text, rightButton }) => (
  <View style={[props.style, Styles.wrapper, props.noBorder ? null : Styles.border]}>
    <Text style={Styles.label}>{text}</Text>
    { rightButton &&
    <View style={Styles.button}>
      { rightButton }
    </View>}
  </View>
);

Separator.propTypes = {
  text: PropTypes.string,
  style: PropTypes.number,
  noBorder: PropTypes.bool,
  rightButton: PropTypes.any
};

Separator.defaultProps = {
  text: null,
  style: null,
  rightButton: null,
  noBorder: false
};

export default Separator;

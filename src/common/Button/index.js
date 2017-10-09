import React, {
  PureComponent
} from 'react';

import PropTypes from 'prop-types';

import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Text,
  View
} from 'react-native';
import { debounce } from 'lodash';

import Styles from './styles';

export default class Button extends PureComponent {
  static propTypes = {
    text: PropTypes.string,
    buttonStyle: PropTypes.number,
    textStyle: PropTypes.number,
    onPress: PropTypes.func
  }

  static defaultProps = {
    text: null,
    buttonStyle: null,
    textStyle: null,
    onPress: null
  }


  constructor(props) {
    super(props);
    this.onPressDebounce = debounce(
      this.props.onPress,
      1000,
      {
        leading: true,
        trailing: false
      }
    );
  }

  render() {
    const { text, textStyle, buttonStyle } = this.props;

    return (
      Platform.OS === 'ios' ?
        <TouchableOpacity
          style={[Styles.button, this.props.buttonStyle]}
          onPress={this.onPressDebounce}
        >
          <Text style={[Styles.text, textStyle]}>
            {text}
          </Text>
        </TouchableOpacity>
        :
        <TouchableNativeFeedback onPress={this.onPressDebounce}>
          <View style={[Styles.button, buttonStyle]} >
            <Text style={[Styles.text, textStyle]}>
              {text}
            </Text>
          </View>
        </TouchableNativeFeedback>
    );
  }

}

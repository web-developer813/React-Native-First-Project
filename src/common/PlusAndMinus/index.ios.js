import React, {
  Component
} from 'react';

import PropTypes from 'prop-types';

import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Styles from './styles';

export default class PlusAndMinus extends Component {

  static propTypes = {
    onChange: PropTypes.func,
    result: PropTypes.number
  }

  static defaultProps = {
    onChange: null,
    result: 0
  }

  state = {
    result: this.props.result
  }

  onPlus = () => {
    this.setState(prevState => ({
      result: parseInt(prevState.result) + 1
    }), this.callBack);
  }

  onMinus = () => {
    if (this.state.result > 0) {
      this.setState(prevState => ({
        result: parseInt(prevState.result) - 1
      }), this.callBack);
    }
  }

  callBack = () => {
    if (this.props.onChange) {
      this.props.onChange(this.state.result);
    }
  }

  render() {
    const { result } = this.state;

    return (
      <View style={Styles.wrapper}>
        <TouchableOpacity style={Styles.button} onPress={this.onPlus}>
          <Icon name="plus" size={32} color={Styles.THEME_COLOR.color} />
        </TouchableOpacity>
        <View style={Styles.resultWrapper}>
          <Text style={Styles.label}>Quantity</Text>
          <Text style={Styles.result}>{result}</Text>
        </View>
        <TouchableOpacity style={Styles.button} onPress={this.onMinus}>
          <Icon name="minus" size={32} color={Styles.THEME_COLOR.color} />
        </TouchableOpacity>
      </View>
    );
  }
}

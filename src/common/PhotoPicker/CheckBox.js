import React, {
  Component
} from 'react';

import {
  TouchableOpacity
} from 'react-native';

import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Styles from './styles';

export default class CheckBox extends Component {

  static propTypes = {
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    onCheck: PropTypes.func
  }

  static defaultProps = {
    disabled: false,
    checked: false,
    onCheck: () => {}
  }

  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked,
      disabled: props.disabled
    };
  }

  componentWillReceiveProps(nextProps) {
    const { disabled, checked } = nextProps;
    if (disabled !== this.state.disabled) {
      this.setState({
        disabled
      });
    } else if (checked !== this.state.checked) {
      this.setState({
        checked
      });
    }
  }

  onPress = () => {
    const { disabled, checked } = this.state;
    if (!disabled) {
      const newState = !checked;
      const changeStateOrNot = this.props.onCheck(newState);

      if (changeStateOrNot) {
        this.setState({
          checked: newState
        });
      }
    }
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.onPress}
        style={[Styles.checkBoxWrap, this.state.checked && Styles.checkedWrap]}
      >
        {this.state.checked && <Icon name="check" size={18} color="white" style={Styles.checkIcon} />}
      </TouchableOpacity>
    );
  }
}

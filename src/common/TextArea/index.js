import React, {
  PureComponent
} from 'react';

import PropTypes from 'prop-types';

import {
  TextInput,
  Platform
} from 'react-native';

import Styles from './styles';

export default class TextArea extends PureComponent {
  static propTypes = {
    startHeight: PropTypes.number,
    onChange: PropTypes.func
  }

  static defaultProps = {
    startHeight: 42,
    onChange: null
  }

  constructor(props) {
    super(props);

    this.state = {
      height: props.startHeight
    };
  }

  onChange(e) {
    if (e.nativeEvent.contentSize) {
      const { height } = e.nativeEvent.contentSize;
      if (height !== this.state.height) {
        this.setState(() => ({
          height
        }));
      }
    }

    if (this.props.onChange) {
      this.props.onChange();
    }
  }

  render() {
    return (
      Platform.OS === 'android' ?
        <TextInput
          {...this.props}
          underlineColorAndroid="transparent"
          placeholderTextColor={Styles.THEME_COLOR.greyish}
          onChange={e => this.onChange(e)}
          style={[Styles.textInput, { height: this.state.height }]}
        />
      :
        <TextInput
          {...this.props}
          placeholderTextColor={Styles.THEME_COLOR.greyish}
          onContentSizeChange={(event) => {
            const { height } = event.nativeEvent.contentSize;
            if (height > this.state.height && height !== this.state.height) {
              this.setState(() => ({ height }));
            }
          }}
          style={[Styles.textInput, { height: this.state.height }]}
        />
    );
  }
}

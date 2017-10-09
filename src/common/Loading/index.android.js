
import React, {
  PureComponent
} from 'react';

import PropTypes from 'prop-types';

import {
  Modal,
  View
} from 'react-native';

import reactMixin from 'react-mixin';
import TimerMixin from 'react-timer-mixin';

import Spinner from 'react-native-spinkit';

import Styles from './styles';

export default class Loading extends PureComponent {
  static propTypes = {
    onTimeout: PropTypes.func,
    visible: PropTypes.bool,
    beforeClose: PropTypes.func
  }

  static defaultProps = {
    onTimeout: null,
    visible: false,
    beforeClose: null
  }

  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible,
      viewRef: null
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.visible) {
      this.clearTimeout();
      if (this.state.visible) {
        // callback after the modal is dismissed
        if (this.props.beforeClose) {
          this.setTimeout(() =>
            this.props.beforeClose()
          , 100);
        }
      }
    }

    this.setState(() => ({
      visible: nextProps.visible
    }));
  }

  componentWillUnmount() {
    this.clearTimeout();
  }

  onShow = () => {
    // dismiss the loding modal after 30 seconds
    this.setTimeout(() => {
      if (this.state.visible) {
        this.setState({
          visible: false
        });
      }

      if (this.props.onTimeout) {
        this.props.onTimeout();
      }
    }, 30000);
  }

  render() {
    return (
      <Modal
        visible={this.state.visible}
        supportedOrientations={['landscape', 'portrait']}
        animationType={'fade'}
        onShow={() => this.onShow()}
        onRequestClose={() => {}}
        transparent
      >
        <View style={Styles.wrapper}>
          <Spinner isVisible={this.state.visible} style={Styles.loader} type="Circle" color={Styles.THEME_COLOR.color} />
        </View>
      </Modal>
    );
  }
}

reactMixin(Loading.prototype, TimerMixin);

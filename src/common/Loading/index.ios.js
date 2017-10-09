import React, {
  PureComponent
} from 'react';

import PropTypes from 'prop-types';

import {
  Modal,
  View,
  StatusBar
} from 'react-native';

import reactMixin from 'react-mixin';
import TimerMixin from 'react-timer-mixin';
import { BlurView } from 'react-native-blur';
import Animation from 'lottie-react-native';

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
      visible: props.visible
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
          , 1000);
        }
      }

      if (this.animation) {
        this.animation.reset();
      }
    }

    this.setState(() => ({
      visible: nextProps.visible
    }));
  }

  componentWillUnmount() {
    this.onHide();
  }

  onShow = () => {
    // dismiss the loding modal after 30 seconds
    this.setTimeout(() => {
      if (this.animation) {
        this.animation.reset();
      }
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

  onHide = () => {
    this.clearTimeout();
    if (this.animation) {
      this.animation.reset();
    }
  }

  render() {
    return (
      <Modal
        visible={this.state.visible}
        supportedOrientations={['landscape', 'portrait']}
        animationType={'fade'}
        onShow={() => this.onShow()}
        onRequestClose={() => this.onHide()}
        transparent
      >
        <StatusBar animated hidden />
        <BlurView
          style={Styles.wrapper}
          blurType="dark"
          blurAmount={5}
        >
          <View>
            <Animation
              ref={ref => (this.animation = ref)}
              onLayout={() => this.animation.play()}
              style={Styles.loader}
              loop
              source={require('./lottie/soda_loader.json')}
            />
          </View>
        </BlurView>
      </Modal>
    );
  }
}

reactMixin(Loading.prototype, TimerMixin);

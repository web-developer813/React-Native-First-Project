
import React, {
  Component
} from 'react';

import {
  View,
  Text,
  Animated,
  Easing,
  PanResponder,
} from 'react-native';

import PropTypes from 'prop-types';

import Styles from './styles';

const ANIMATION_DURATION = 100;

export default class InfiniteWheelSelector extends Component {
  static propTypes = {
    options: PropTypes.array,
    displayNumber: PropTypes.number
  }

  static defaultProps = {
    options: [],
    displayNumber: 3
  }

  state = {
    containerDimensions: {
      width: 0,
      height: 0,
    },
    contentDimensions: {
      width: 0,
      height: 0,
    },
    currentIndex: (this.props.displayNumber + 1) / 2
  }

  componentDidUpdate() {
    const { containerDimensions, contentDimensions } = this.state;
    if (containerDimensions.width !== 0 && contentDimensions.width !== 0) {
      if (!this.firstPosition) {
        this.moveToPage(2);
        this.firstPosition = true;
      } else {
        this.moveToPage(this.currentPage);
      }
    }
  }

  animatedXPosition = new Animated.Value(0)
  xScrollOffset = 0
  xScrollPosition = 0
  pageWidth = 0
  currentPage = 0

  firstPosition = false

  isDistanceEnough = velocity =>
    (evt, gestureState) => Math.abs(gestureState.dx) > velocity

  panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onStartShouldSetPanResponderCature: () => true,
    onMoveShouldSetPanResponder: () => false,
    onMoveShouldSetPanResponderCapture: this.isDistanceEnough(15),

    onPanResponderGrant: () => {
      // The guesture has started. Show visual feedback so the user knows
      // what is happening!
      // gestureState.d{x,y} will be set to zero now
      this.xScrollOffset = this.xScrollPosition;
    },
    onPanResponderMove: (evt, gestureState) => {
      // The most recent move distance is gestureState.move{X,Y}

      // The accumulated gesture distance since becoming responder is
      // gestureState.d{x,y}
      this.scrollTo(
        this.xScrollOffset + Math.round(gestureState.dx * 0.75),
      );
    },
    onPanResponderTerminationRequest: () => true,
    onPanResponderRelease: (evt, gestureState) => {
      let towardLeft = false;
      if (gestureState.dx < 0) {
        towardLeft = true;
      }
      // The user has released all touches while this view is the
      // responder. This typically means a gesture has succeeded
      // console.log(gestureState.vx)
      this.roundPage(towardLeft);
    },
    onPanResponderTerminate: () => {
      // Another component has become the responder, so this gesture
      // should be cancelled
      this.roundPage();
    },
    // onShouldBlockNativeResponder: () =>
    //   // Returns whether this component should block native components from becoming the JS
    //   // responder. Returns true by default. Is currently only supported on android.
    //   true,
  })

  scrollTo = (pos, animated, callback = () => {}) => {
    const endOfContent = (this.state.contentDimensions.width -
      this.state.containerDimensions.width) *
      -1;
    if (pos > 0) {
      this.xScrollPosition = 0;
    } else if (pos < endOfContent) {
      this.xScrollPosition = endOfContent;
    } else {
      this.xScrollPosition = pos;
    }

    if (animated) {
      Animated.timing(this.animatedXPosition, {
        toValue: this.xScrollPosition,
        duration: ANIMATION_DURATION,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start(() => {
        callback();
        const currentIndex = this.currentPage + Math.floor((this.props.displayNumber / 2) - 1);
        this.setState({
          currentIndex
        });
        this.props.onSelectChange();
      });
    } else {
      this.animatedXPosition.setValue(this.xScrollPosition);
    }
  }

  getPositionToPageCenter = pageIndex =>
    Math.round(((pageIndex - 1) * this.pageWidth)) * -1

  moveToPage = (page, animated, callback) => {
    this.currentPage = page;
    const pagePosition = this.getPositionToPageCenter(this.currentPage);
    this.scrollTo(pagePosition, animated, callback);
  }

  roundPage = (towardLeft = true) => {
    const relativePos = this.xScrollPosition / this.pageWidth;
    const page =
      towardLeft ?
      Math.abs(Math.floor(relativePos) - 1)
      :
      Math.abs(Math.ceil(relativePos) - 1);
    this.moveToPage(page, true, this.setCritical);
  }

  setCritical = () => {
    const pageCount = this.props.options.length;
    if (this.currentPage === 1) {
      this.moveToPage(pageCount + 1);
    }
    if (this.currentPage === pageCount + 2) {
      this.moveToPage(2);
    }
  }

  isSameMeasure = (measurement1, measurement2) =>
    measurement1.width === measurement2.width &&
    measurement1.height === measurement2.height;

  manageLayout = key =>
    ({ nativeEvent }) => {
      const dimensions = nativeEvent.layout;
      if (!this.isSameMeasure(this.state[key], dimensions)) {
        this.setState({ [key]: dimensions });
      }
    }

  renderContent() {
    const { containerDimensions, currentIndex } = this.state;
    const { options, displayNumber } = this.props;

    if (displayNumber % 2 === 0) {
      console.warn('please use a odd number');
    }

    this.pageWidth = containerDimensions.width / displayNumber;
    // shallow copy of children
    const pages = [...options];

    for (let i = 0, len = displayNumber - 1; i < len; ++i) {
      pages.push(pages[i]);
    }

    pages.unshift(pages[options.length - (displayNumber - 1)], pages[options.length - 1]);

    const compotedPageStyle = {
      width: this.pageWidth,
      height: containerDimensions.height,
    };

    return pages.map((page, index) => {
      let transform = {};
      if (displayNumber === 3) {
        const pageOffset = ((index * this.pageWidth) - this.pageWidth) * -1;
        const scale = this.animatedXPosition.interpolate({
          inputRange: [
            pageOffset - this.pageWidth,
            pageOffset,
            pageOffset + this.pageWidth,
          ],
          outputRange: [0.7, 1, 0.7],
        });

        transform = { transform: [{ scale }] };
      }

      return (
        <Animated.View
          key={index}
          style={[
            compotedPageStyle,
            Styles.element,
            displayNumber === 3 && transform
          ]}
        >
          <Text style={[Styles.option, currentIndex === index && Styles.selected]}>
            {
              page
            }
          </Text>
        </Animated.View>
      );
    });
  }

  render() {
    const computedContentStyle = {
      transform: [{ translateX: this.animatedXPosition }],
    };
    return (
      <View
        pointerEvents="box-none"
        style={Styles.horizontalContainer}
        onLayout={this.manageLayout('containerDimensions')}
        {...this.panResponder.panHandlers}
      >
        <View onLayout={this.manageLayout('contentDimensions')}>
          <Animated.View
            style={[computedContentStyle, Styles.horizontalContent]}
          >
            {this.renderContent()}
          </Animated.View>
        </View>

      </View>
    );
  }
}

import React, {
  PureComponent
} from 'react';

import PropTypes from 'prop-types';

import {
  ScrollView,
  View,
  Text
} from 'react-native';

import Styles from './styles';



export default class WheelSelector extends PureComponent {
  static propTypes = {
    selectors: PropTypes.array,
    onSelectChange: PropTypes.func
  }

  static defaultProps = {
    selectors: [],
    onSelectChange: null
  }

  state = {
    selectedIndex: 0
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.selectedIndex !== this.state.selectedIndex) {
      return true;
    }
    return false;
  }

  onScroll = (e) => {
    const x = e.nativeEvent.contentOffset.x;

    if (x >= this.offset) {
      this.scrollTowardLeft = true;
    } else {
      this.scrollTowardLeft = false;
    }
    this.offset = x;
  }

  onScrollEndDrag = (e) => {
    const x = e.nativeEvent.contentOffset.x;

    if (Math.abs(x - this.endDragAnchor) >= Styles.ELEMENT_WIDTH / 4) {
      if (this.scrollTowardLeft
          && this.state.selectedIndex <= this.maxIndex) {
        this.selectedIndex += 1;
      } else if (!this.scrollTowardLeft
        && this.state.selectedIndex >= 1) {
        this.selectedIndex -= 1;
      }
    }

    this.setState({
      selectedIndex: this.selectedIndex
    }, () => {
      this.selector.scrollTo({
        x: Styles.ELEMENT_WIDTH * this.selectedIndex,
        y: 0,
        animated: true
      });

      if (this.props.onSelectChange) {
        /* eslint-disable no-undef */
        requestAnimationFrame(() => this.props.onSelectChange(this.props.selectors[this.selectedIndex]));
      }
    });
  }

  onScrollEndMoment = (e) => {
    const x = e.nativeEvent.contentOffset.x;
    this.endDragAnchor = x;
  }

  maxIndex = this.props.selectors.length - 1
  offset = 0
  selectedIndex = 0
  endDragAnchor = 0
  scrollTowardLeft = true

  renderSelectors = () => this.props.selectors.map((selector, index) => (
    <View key={selector} style={Styles.element}>
      <Text
        style={[
          Styles.text,
          index === this.state.selectedIndex && Styles.selectedText
        ]}
      >
        {selector}
      </Text>
    </View>
    ));

  render() {
    return (
      <View style={Styles.wrapper}>
        <ScrollView
          ref={ref => (this.selector = ref)}
          onScroll={this.onScroll}
          onScrollEndDrag={this.onScrollEndDrag}
          onMomentumScrollEnd={this.onScrollEndMoment}
          snapToAlignment="start"
          snapToInterval={Styles.ELEMENT_WIDTH}
          keyboardShouldPersistTaps="never"
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={Styles.elementWrapper}
          horizontal
        >
          <View style={Styles.element} />
          { this.renderSelectors() }
          <View style={Styles.element} />
        </ScrollView>
      </View>
    );
  }
}

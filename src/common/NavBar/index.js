import React, {
  PureComponent,
  PropTypes
} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Styles from './styles';

export default class NavBar extends PureComponent {
  static propTypes = {
    onPressRightNavBtn: PropTypes.func,
    onPressLeftNavBtn: PropTypes.func,
    leftButtonStyle: PropTypes.string,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    rightButton: PropTypes.func,
    leftButton: PropTypes.element
  };

  static defaultProps = {
    onPressRightNavBtn: null,
    onPressLeftNavBtn: null,
    leftButtonStyle: null,
    title: null,
    subTitle: null,
    rightButton: null,
    leftButton: null
  };

  onPressRightNavBtn() {
    if (this.props.onPressRightNavBtn) {
      this.props.onPressRightNavBtn();
    }
  }

  renderSubTitle() {
    return (
      <Text style={Styles.subTitle}>
        {this.props.subTitle}
      </Text>
    );
  }

  renderBackButton() {
    if (this.props.leftButton) {
      return (
        <View style={Styles.backButton}>
          { this.props.leftButton }
        </View>
      );
    }

    if (this.props.leftButtonStyle === 'close') {
      return (
        <TouchableOpacity
          style={Styles.backButton}
          onPress={this.props.onPressLeftNavBtn}
        >
          <Icon name="close" size={30} />
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity
        style={Styles.backButton}
        onPress={this.props.onPressLeftNavBtn}
      >
        <Image source={require('../Images/backWhite.png')} style={[Styles.backButtonIcon,{width:20,height:20}]} />
      </TouchableOpacity>
    );
  }

  renderRightButton() {
    if (this.props.rightButton) {
      return (
        <View style={Styles.rightButton}>
          <TouchableOpacity
            onPress={() => this.onPressRightNavBtn()}
          >
              { this.props.rightButton() }
          </TouchableOpacity>

        </View>
      );
    }
    return (
      <TouchableOpacity
        style={[Styles.rightButton]}
        onPress={() => this.onPressRightNavBtn()}
      >
        <Image source={require('../Images/trash_dark@3x.png')} style={{width: 24, height: 24 }} />
      </TouchableOpacity>
    );
  }

  render() {
    const { title, rightButton, subTitle } = this.props;
    return (
      <View style={Styles.headerWrapper}>
        <View style={Styles.titleWrapper}>
          { this.renderBackButton() }
          <Text
            style={[
              Styles.title,
              subTitle && Styles.titleWithoutSubTitle
            ]}
          >
            {title}
          </Text>
          {subTitle && this.renderSubTitle()}
          {rightButton && this.renderRightButton()}
        </View>
      </View>
    );
  }
}

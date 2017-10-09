import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import Rating from '../../common/Rating';

import Styles from './styles';

export default class ThirdSectionViewContainer extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text>This is the section 3</Text>
        <Rating
          wrapperStyle={Styles.ratingWrapper}
          total={5}
          rating={2}
          size={14}
          color={Styles.THEME_COLOR.color}
        />
      </View>
    );
  }
}

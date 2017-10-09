import React, {
  PureComponent,
  PropTypes
} from 'react';

import {
  View
} from 'react-native';

import UUID from 'react-native-uuid';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Styles from './styles';

export default class Rating extends PureComponent {
  static propTypes = {
    total: PropTypes.number,
    rating: PropTypes.number,
    totalStars: PropTypes.number,
    color: PropTypes.string,
    size: PropTypes.number,
    wrapperStyle: PropTypes.number
  };

  static defaultProps = {
    total: 100,
    rating: 50,
    totalStars: 5,
    color: '#000',
    size: 36,
    wrapperStyle: null
  };

  constructor(props) {
    super(props);
    this.state = this.initilizeState();
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.rating !== this.props.rating;
  }

  initilizeState() {
    const size = this.props.size;
    const x = parseInt(this.props.total / this.props.totalStars, 10);
    const y = this.props.rating / x;
    const fullStars = Math.floor(y);
    const halfStar = Math.round(y.toFixed(1)) > fullStars;
    const emptyStars = halfStar ?
      this.props.totalStars - fullStars - 1 : this.props.totalStars - fullStars;
    return {
      fullStars,
      halfStar,
      emptyStars,
      size
    };
  }

  renderFullStars() {
    return [...Array(this.state.fullStars)].map(
      () => <Icon name="star" key={UUID.v4()} color={this.props.color} size={this.state.size} />
    );
  }

  renderEmptyStars() {
    return [...Array(this.state.emptyStars)].map(
     () => <Icon key={UUID.v4()} name="star-outline" color={this.props.color} size={this.state.size} />
    );
  }

  render() {
    return (
      <View style={[Styles.wrapper, this.props.wrapperStyle]}>
        {this.renderFullStars()}
        {
          this.state.halfStar ?
            <Icon name="star-half" color={this.props.color} size={36} />
            :
            null
        }
        {this.renderEmptyStars()}
      </View>
    );
  }
}

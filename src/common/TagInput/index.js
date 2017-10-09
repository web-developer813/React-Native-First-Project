import React, {
  PureComponent,
  PropTypes
} from 'react';

import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import CommonStyle from '../CommonStyle';

export default class TagInput extends PureComponent {
  static propTypes = {
    tags: PropTypes.array,
    addBtnText: PropTypes.string,
    theme: PropTypes.string,
    removeTagFunc: PropTypes.func,
    addTagFunc: PropTypes.func,
    editable: PropTypes.bool
  }

  static defaultProps = {
    addBtnText: null,
    theme: null,
    tags: [],
    removeTagFunc: null,
    addTagFunc: null,
    editable: true
  }

  render() {
    const { theme } = this.props;
    let color = '#f6931d';
    let backgroundColor = '#ffe7cb';
    if (theme === 'dark') {
      color = '#8e8e8e';
      backgroundColor = '#e6e6e6';
    }

    return (
      <View style={CommonStyle.tagsWrapper}>
        {
          this.props.tags.map((tag, index) =>
            <View key={tag} style={[CommonStyle.tag, { backgroundColor }]}>
              {
                this.props.editable &&
                <Icon name="close" color={color} size={24} onPress={() => this.props.removeTagFunc(index)} />
              }
              <Text style={[CommonStyle.tagText, { color }]}>{tag}</Text>
            </View>
          )
        }
        {
          this.props.editable &&
            <TouchableOpacity style={CommonStyle.tagAddBtn} onPress={() => this.props.addTagFunc()}>
              <Icon name="plus-circle" color={color} size={32} />
              <Text style={[CommonStyle.addTagBtnText, { color }]}>{this.props.addBtnText}</Text>
            </TouchableOpacity>
        }
      </View>
    );
  }
}

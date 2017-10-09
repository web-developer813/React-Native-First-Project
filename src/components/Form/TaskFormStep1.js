import React, {
  Component
} from 'react';

import PropTypes from 'prop-types';

import {
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Text
} from 'react-native';

import { Map } from 'immutable';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Button from '../../common/Button';
import TextArea from '../../common/TextArea';

import Styles from './styles';

const selectedCategories = [
  {
    id: 1,
    icon: 'headset',
    subCategory: 'Event & Entertainment'
  },
  {
    id: 2,
    icon: 'dribbble',
    subCategory: 'Personal Skills & Lifestyle'
  },
  {
    id: 3,
    icon: 'home',
    subCategory: 'Development & Advices'
  }
];

const keywords = [
  'keyword1',
  'keyword2',
  'keyword3',
  'keyword4',
  'keyword5',
];


export default class TaskFormStep1 extends Component {

  static propTypes = {
    navigator: PropTypes.object,
    updateCurrentTask: PropTypes.func,
    task: PropTypes.shape({
      currentTask: PropTypes.object
    })
  }

  static defaultProps = {
    navigator: null,
    updateCurrentTask: null,
    task: {
      currentTask: null
    }
  }

  constructor(props) {
    super(props);

    const { currentTask } = props.task;
    if (Map.isMap(currentTask)) {
      this.state = {
        ...currentTask.toJS()
      };
    }

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
    if (event.type === 'NavBarButtonPress' && event.id === 'back') { // this is the event type for button presses
      this.props.navigator.pop();
    }
  }

  goNextStep = () => {
    const { subject, body } = this.state;

    this.props.updateCurrentTask({
      subject,
      body
    });

    this.props.navigator.push({
      screen: 'global.TaskFormStep2',
      title: 'Create New Task',
      navigatorStyle: {
        ...Styles.navigatorStyle
      },
      navigatorButtons: {
        ...Styles.defaultNavBackBtn
      }
    });
  }

  renderSelectedCatgories = () => selectedCategories.map(category => (
    <View key={category.id} style={Styles.selectedCategory}>
      <Icon style={Styles.icon} name={category.icon} size={24} color={Styles.THEME_COLOR.color} />
      <Text style={Styles.categorySelectorText}>{ category.subCategory }</Text>
      <TouchableOpacity style={Styles.rightNavBtn}>
        <Icon name="chevron-right" size={24} color={Styles.THEME_COLOR.grey} />
      </TouchableOpacity>
    </View>
  ))

  renderKeyWords = () => keywords.map(keyword => (
    <View
      key={keyword}
      style={Styles.tag}
    >
      <Text style={Styles.tagText}>
        { keyword }
      </Text>
    </View>
  ))

  render() {
    const { body } = this.state;
    let length = 0;
    if (body) {
      length = body.length;
    }

    return (
      <ScrollView style={Styles.fullContainer}>
        <View style={Styles.titleInputWrapper}>
          <Text style={Styles.label}>Title</Text>
          <TextInput
            autoCorrect={false}
            style={Styles.textInput}
            value={this.state.subject}
            underlineColorAndroid="transparent"
            onChangeText={subject => this.setState({
              subject
            })}
            placeholder="e.g. Needs someone to take my dog on a walk"
          />
        </View>
        <View style={Styles.descriptionInputWrapper}>
          <View style={Styles.labelWrapper}>
            <Text style={Styles.label}>Description</Text>
            <Text style={Styles.label}>{length}/500 characters</Text>
          </View>
          <TextArea
            startHeight={42}
            autoCorrect={false}
            enablesReturnKeyAutomatically
            maxLength={500}
            numberOfLines={5}
            multiline
            placeholder="Describe your task within 500 characters."
            onChangeText={text => this.setState({
              body: text
            })}
            value={this.state.body}
          />
        </View>
        <Button
          buttonStyle={Styles.themeBtn}
          onPress={this.goNextStep}
          text="Next"
        />
      </ScrollView>
    );
  }
}

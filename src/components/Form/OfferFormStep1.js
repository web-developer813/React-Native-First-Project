import React, {
  Component
} from 'react';

import PropTypes from 'prop-types';

import {
  View,
  ScrollView,
  Text
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Button from '../../common/Button';
import TextArea from '../../common/TextArea';

import Styles from './styles';

export default class OfferFormStep1 extends Component {

  static propTypes = {
    navigator: PropTypes.object.isRequired,
    selectedTask: PropTypes.object.isRequired,
    updateCurrentOffer: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    const { selectedTask } = this.props;

    this.state = {
      ...selectedTask,
      body: ''
    };

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.body !== this.state.body) {
      return true;
    }
    return false;
  }

  onNavigatorEvent(event) {
    if (event.type === 'NavBarButtonPress' && event.id === 'back') {
      this.props.navigator.pop();
    }
  }

  goNextStep = () => {
    const { body } = this.state;
    const { userThreadKey } = this.props.selectedTask;
    this.props.updateCurrentOffer({
      userThreadKey,
      body
    });

    this.props.navigator.push({
      screen: 'global.OfferFormStep2',
      title: 'Create New Offer',
      navigatorStyle: {
        ...Styles.navigatorStyle
      },
      navigatorButtons: {
        ...Styles.defaultNavBackBtn
      }
    });
  }
  render() {
    const { body, subject, timeframe } = this.state;
    let length = 0;
    if (body) {
      length = body.length;
    }

    return (
      <ScrollView style={Styles.fullContainer}>
        <View style={Styles.headerWrapper}>
          <Icon name="tag-outline" color={Styles.THEME_COLOR.lightGrey} size={24} />
          <Text style={Styles.title}>{ `"${subject}"`}
            <Text style={Styles.timeframe}> | {timeframe}</Text>
          </Text>
        </View>
        <View style={Styles.descriptionInputWrapper}>
          <View style={Styles.labelWrapper}>
            <Text style={Styles.label}>Your offer (optional)</Text>
            <Text style={Styles.label}>{length}/500 characters</Text>
          </View>
          <TextArea
            startHeight={42}
            autoCorrect={false}
            enablesReturnKeyAutomatically
            underlineColorAndroid="transparent"
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

import React, {
  Component
} from 'react';

import PropTypes from 'prop-types';

import {
  View,
  Switch,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';

import Button from '../../common/Button';
import Separator from '../../common/Separator';
import WheelSelector from '../../common/WheelSelector';
import LocationSelector from '../../common/LocationSelector';

import Styles from './styles';

export default class TaskFormStep2 extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
    location: PropTypes.object
  }

  static defaultProps = {
    taskTitle: '',
    taskDescription: '',
    publishTask: null,
    authenticate: null,
    location: null,
    updateInitialTab: () => {},
    account: {
      palyload: {
        sub: null
      }
    },
    task: {
      isFetching: false,
      failed: false
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      anyWhere: true,
      takeOffer: true,
      timeframe: 'ASAP',
      budget: '0'
    };

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.type === 'NavBarButtonPress' && event.id === 'back') {
      this.props.navigator.pop();
    }
  }

  onTimeframeChange = value => this.setState({
    timeframe: value
  })

  goToSummary = () => {
    const { currentAddress, longitude, latitude } = this.props.location;

    const location = {
      longitude,
      latitude
    };

    let locationPath = currentAddress;
    if (this.state.anyWhere) {
      locationPath = 'Anywhere/Online';
    }

    this.props.navigator.push({
      screen: 'global.TaskSummary',
      title: 'View Post',
      passProps: {
        timeframe: this.state.timeframe,
        location,
        locationPath,
        budget: this.state.budget,
      },
      navigatorStyle: {
        ...Styles.navigatorStyle
      },
      navigatorButtons: {
        ...Styles.defaultNavBackBtn
      }
    });
  }

  goLocationPickerView = () => this.props.navigator.push({
    screen: 'explore.LocationView',
    navigatorStyle: {
      ...Styles.navigatorStyle,
      navBarHidden: true
    }
  })

  renderBudgetInput = () => (
    <View style={Styles.inputGroup}>
      <Text style={Styles.label}>Set a budget</Text>
      <View style={Styles.budgetWrapper}>
        <Text style={[Styles.label, Styles.sign]}>$</Text>
        <TextInput
          style={Styles.budgetInput}
          underlineColorAndroid="transparent"
          maxLength={8}
          keyboardType="numeric"
          onChangeText={budget => this.setState(() => ({ budget }))}
          value={this.state.budget}
        />
      </View>
    </View>
  )

  renderLocationPicker() {
    const { currentAddress } = this.props.location;
    const text = currentAddress || 'Please choose a address';
    return (
      <View style={Styles.inputGroup}>
        <LocationSelector
          onPress={this.goLocationPickerView}
          text={text}
        />
      </View>
    );
  }

  render() {
    return (
      <ScrollView
        style={Styles.fullContainer}
        pagingEnabled={false}
        keyboardShouldPersistTaps="never"
      >
        <KeyboardAvoidingView
          behavior="position"
          contentContainerStyle={Styles.onKeyboardAppear}
        >
          <Separator style={Styles.header} text="Location" noBorder />
          <View style={Styles.inputGroup}>
            <Text style={Styles.label}>Anywhere/Online</Text>
            <Switch
              style={Styles.switch}
              onValueChange={anyWhere => this.setState({ anyWhere })}
              onTintColor={Styles.THEME_COLOR.color}
              tintColor={Styles.THEME_COLOR.lightGrey}
              thumbTintColor="#F5F5F5"
              value={this.state.anyWhere}
            />
          </View>
          { !this.state.anyWhere && this.renderLocationPicker() }

          <Separator style={Styles.header} text="Timeframe" />
          <WheelSelector
            selectors={[
              'ASAP',
              'Flexible',
              'By today',
              'Couple Days',
              'After Hours',
              'Weekend'
            ]}
            onSelectChange={this.onTimeframeChange}
          />

          <Separator style={Styles.header} text="Budget" />
          <View style={Styles.inputGroup}>
            <Text style={Styles.label}>Take Offer</Text>
            <Switch
              style={Styles.switch}
              onValueChange={(takeOffer) => { this.setState({ takeOffer, budget: '0' }); }}
              onTintColor={Styles.THEME_COLOR.color}
              tintColor={Styles.THEME_COLOR.lightGrey}
              thumbTintColor="#F5F5F5"
              value={this.state.takeOffer}
            />
          </View>
          { !this.state.takeOffer && this.renderBudgetInput() }
          <Button
            buttonStyle={Styles.themeBtn}
            onPress={this.goToSummary}
            text="Next"
          />
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

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
import PlusAndMinus from '../../common/PlusAndMinus';
import LocationSelector from '../../common/LocationSelector';

import Styles from './styles';

export default class OfferFormStep2 extends Component {

  static propTypes = {
    navigator: PropTypes.object.isRequired,
    location: PropTypes.object
  }

  static defaultProps = {
    location: null
  }

  constructor(props) {
    super(props);
    this.state = {
      unit: 'Per Hour',
      serviceLocation: 'My Location',
      locationPickerVisible: true,
      myService: false,
      quantity: 0,
      price: ''
    };

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.type === 'NavBarButtonPress' && event.id === 'back') {
      this.props.navigator.pop();
    }
  }

  onSeviceLocationChange = (serviceLocation) => {
    this.setState(() => {
      let locationPickerVisible = false;
      if (serviceLocation === 'My Location') {
        locationPickerVisible = true;
      }
      return {
        serviceLocation,
        locationPickerVisible
      };
    });
  }

  onQuantityChange = (quantity) => {
    this.setState(() => ({
      quantity
    }));
  }

  unitChange = (unit) => {
    this.setState(() => ({
      unit
    }));
  }

  goLocationPickerView = () => this.props.navigator.push({
    screen: 'explore.LocationView',
    navigatorStyle: {
      ...Styles.navigatorStyle,
      navBarHidden: true
    }
  })

  goToSummary = () =>
    this.props.navigator.push({
      screen: 'global.OfferSummary',
      title: 'View Offer',
      passProps: {
        ...this.state
      },
      navigatorStyle: {
        ...Styles.navigatorStyle
      },
      navigatorButtons: {
        ...Styles.defaultNavBackBtn
      }
    })

  renderLocationPicker = () => {
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
          <Separator style={Styles.header} text="My Service" noBorder />
          <View style={Styles.inputGroup}>
            <Text style={Styles.label}>Select from my service</Text>
            <Switch
              style={Styles.switch}
              onValueChange={myService => this.setState({ myService })}
              onTintColor={Styles.THEME_COLOR.color}
              tintColor={Styles.THEME_COLOR.lightGrey}
              thumbTintColor="#F5F5F5"
              value={this.state.myService}
            />
          </View>

          <Separator style={Styles.header} text="Service Location" />
          <WheelSelector
            selectors={[
              'My Location',
              'Your Location',
              'Online'
            ]}
            onSelectChange={this.onSeviceLocationChange}
          />

          { this.state.locationPickerVisible && this.renderLocationPicker() }

          <Separator style={Styles.header} text="Service Price" />
          <View style={Styles.inputGroup}>
            <Text style={Styles.label}>Service unit price(inc. Tax)</Text>
            <View style={Styles.budgetWrapper}>
              <Text style={[Styles.label, Styles.sign]}>$</Text>
              <TextInput
                style={Styles.budgetInput}
                maxLength={8}
                underlineColorAndroid="transparent"
                keyboardType="numeric"
                onChangeText={price => this.setState(() => ({ price }))}
                value={this.state.price}
              />
            </View>
          </View>

          <Separator style={Styles.header} text="Service Unit" />
          <WheelSelector
            selectors={[
              'Per Hour',
              'Per Day',
              'Per Visit',
              'Per Job'
            ]}
            onSelectChange={this.unitChange}
          />

          <Separator style={Styles.header} text="Job Estimation" />
          <PlusAndMinus
            result={this.state.quantity}
            onChange={this.onQuantityChange}
          />
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

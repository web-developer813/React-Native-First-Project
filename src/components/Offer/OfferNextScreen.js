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
  ScrollView,
  Keyboard
} from 'react-native';

import Button from '../../common/Button';
import Separator from '../../common/Separator';
import WheelSelector from '../../common/WheelSelector';
//import PlusAndMinus from '../../common/PlusAndMinus';
import LocationSelector from '../../common/LocationSelector';
import QuantitySelector from '../../common/QuantitySelector';

import Styles from './styles';
export default class OfferNextScreen extends Component {
    static navigatorStyle = {
        tabBarHidden: true,
        navBarHidden:true
    };
    static propTypes = {
        navigator: PropTypes.object.isRequired,
        location: PropTypes.object
    }

    static defaultProps = {
        location: null
    }
    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow() {
        this.setState({
             nextButtonAvailable: false
        });
    }

    _keyboardDidHide() {
        this.setState({
           nextButtonAvailable: true
        });
    }
    constructor(props) {
        super(props);
        this.state = {
          unit: 'Per Hour',
          serviceLocation: 'My Location',
          locationPickerVisible: false,
          myService: false,
          quantity: 1,
          price: '',
          beginQuantity : 1,
          seniorQuantity : 0,
          nextButtonAvailable : true,
        };

        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
        this.onChangeMyService = this.onChangeMyService.bind(this);
        this.goNextStep = this.goNextStep.bind(this);
        this._keyboardDidShow = this._keyboardDidShow.bind(this);
        this._keyboardDidHide = this._keyboardDidHide.bind(this);
        this.changeQuantity = this.changeQuantity.bind(this);
        this.changeBeginQuantity = this.changeBeginQuantity.bind(this);
        this.changeSeniorQuantity = this.changeSeniorQuantity.bind(this);
        this.unitChange = this.unitChange.bind(this);
     }

    onNavigatorEvent(event) {
      if (event.type === 'NavBarButtonPress' && event.id === 'back') {
       this.props.navigator.pop();
      }
    }
    changeQuantity(text){
           this.setState({
                quantity : text
           });
        }
    changeBeginQuantity(text){
       this.setState({
            beginQuantity : text
       });
    }
    changeSeniorQuantity(text){
       this.setState({
            seniorQuantity : text
       });
    }
    unitChange = (unit) => {
        this.setState(() => ({
          unit
        }));
    }
    onServiceLocationChange = (serviceLocation) => {
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
    goNextStep = () =>{
        const { currentAddress, longitude, latitude } = this.props.location;
        const { offer } = this.props.offer
        const location = {
          longitude,
          latitude
        };
        this.props.navigator.push({
          screen: 'global.OfferView',
          title: 'Prepare Offer',
          passProps: {
           ...this.state,
           location,
           offer
          },
          navigatorStyle: {
            ...Styles.navigatorStyle,
            tabBarHidden: true,
          },
        });

    }
    renderLocationPicker = () => {
        const { currentAddress } = this.props.location;
        const text = currentAddress || 'Please choose a address';
        return (
          <View style={Styles.inputGroupLocation}>
            <LocationSelector
                style={Styles.locationSelector}
              onPress={this.goLocationPickerView}
              text={text}
            />
          </View>
        );
    }
    renderLocationUnPicker() {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems : 'center', paddingBottom: 10}}>
                <Text style={{color:Styles.THEME_COLOR.greyish, fontSize: 16}}>Location not specified</Text>
            </View>
        );
    }
    renderOffService = () =>{
        return (
        <View>
            <Separator style={Styles.header} text="Service Location" />

            <View style={Styles.inputGroup}>
                <Text style={Styles.label}>Anywhere/Online</Text>
                <Switch
                  style={Styles.switch}
                  onValueChange={locationPickerVisible => this.setState({ locationPickerVisible })}
                  onTintColor={Styles.THEME_COLOR.orange}
                  tintColor={Styles.THEME_COLOR.lightGrey}
                  thumbTintColor="#F5F5F5"
                  value={this.state.locationPickerVisible}
                />
            </View>
            { !this.state.locationPickerVisible && this.renderLocationPicker() }
            { this.state.locationPickerVisible && this.renderLocationUnPicker() }


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
                     selectionColor="rgb(243,145,28)"
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
            <QuantitySelector value={this.state.quantity} minQuantity={1} onChange={(text) => this.changeQuantity(text)} Styles={Styles.lastItem} />
        </View>
        );
    }
    renderOnService = () =>{
        return (
        <View>
            <View style={Styles.borderBottom}>
                <View style={Styles.inputGroup}>
                    <View>
                        <Text style={Styles.subTitle}>Weekend Beginner Dog Training... </Text>
                        <Text style={Styles.label}>central park, Melbourne</Text>
                    </View>
                    <View>
                        <Text style={Styles.hourlyRate}>$35/hour</Text>
                    </View>
                </View>
                <View style={Styles.quantityView}>
                    <QuantitySelector value={this.state.beginQuantity} minQuantity={1} onChange={(text) => this.changeBeginQuantity(text)} />
                </View>
            </View>
            <View style={Styles.borderBottom}>
                <View style={Styles.inputGroup}>
                    <View>
                        <Text style={Styles.subTitle}>Weekend Senior Dog Training test content list... </Text>
                        <Text style={Styles.label}>central park, Melbourne</Text>
                    </View>
                    <View>
                        <Text style={Styles.hourlyRate}>$30/hour</Text>
                    </View>
                </View>
                <View style={Styles.quantityView}>
                    <QuantitySelector value={this.state.seniorQuantity} minQuantity={0} onChange={(text) => this.changeSeniorQuantity(text)} />
                </View>
            </View>
        </View>
        );
    }

    onChangeMyService(myService){
        this.setState({
            myService: myService
        });
        if(myService == true){
            this.setState({
                unit: 'Per Hour',
                serviceLocation: 'My Location',
                locationPickerVisible: true,
                quantity: 1,
                price: '',
            });
        }else{
            this.setState({
                beginQuantity : 1,
                seniorQuantity : 0,
            });
        }
    }

     render() {
        return (
            <View style={{ flex: 1 }}>
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
                              onValueChange={(myService) => this.onChangeMyService(myService)}
                              onTintColor={Styles.THEME_COLOR.orange}
                              tintColor={Styles.THEME_COLOR.lightGrey}
                              thumbTintColor="#F5F5F5"
                              value={this.state.myService}
                            />
                        </View>
                        {!this.state.myService && this.renderOffService()}
                        {this.state.myService && this.renderOnService()}

                    </KeyboardAvoidingView>
                </ScrollView>
                <View style={Styles.buttonPosition}>
                 {
                    this.state.nextButtonAvailable
                    ?
                       <Button
                        buttonStyle={Styles.themeBtn}
                        onPress={this.goNextStep}
                        text="Next"
                       />
                    :
                        null
               }
             </View>
            </View>
        );
     }
}

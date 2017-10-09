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
  Keyboard,
  ScrollView
} from 'react-native';
import Button from '../../common/Button';
import Separator from '../../common/Separator';
import WheelSelector from '../../common/WheelSelector';
import LocationSelector from '../../common/LocationSelector';
import QuantitySelector from '../../common/QuantitySelector';
import Styles from './styles';

export default class PostNextScreen extends Component {
    static propTypes = {
        navigator: PropTypes.object.isRequired,
        location: PropTypes.object
    }
    static defaultProps = {
        postTitle: '',
        postDescription: '',
        publishPost: null,
        authenticate: null,
        location: null,
        updateInitialTab: () => {},
        account: {
          palyload: {
            sub: null
          }
        },
        post: {
          isFetching: false,
          failed: false
        }
    }
    constructor(props) {
        super(props);
        this.state = {
          anyWhere: false,
          takeOffer: true,
          timeframe: 'ASAP',
          location : 'My Location',
          budget: '',
          quantity : 1,
          nextButtonAvailable : true
        };
        console.log(this.props.subject);
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
        this._keyboardDidShow = this._keyboardDidShow.bind(this);
        this._keyboardDidHide = this._keyboardDidHide.bind(this);
        this.goNextStep = this.goNextStep.bind(this);
        this.changeQuantity = this.changeQuantity.bind(this);
      }

    onNavigatorEvent(event) {
        if (event.type === 'NavBarButtonPress' && event.id === 'back') {
          this.props.navigator.pop();

        }
    }
    onTimeFrameChange = value => this.setState({
        timeframe: value
    })

    onLocationSelect = value =>this.setState({
        location: value
    })
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


    goLocationPickerView (){

    }
    changeQuantity(text){
       this.setState({
            quantity : text
       });
    }

    renderLocationPicker() {
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
    goNextStep (){
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
          screen: 'global.PostView',
          title: 'View Post',
          passProps: {
            subject : this.props.subject,
            body : this.props.body,
            timeframe: this.state.timeframe,
            location,
            locationPath,
            budget: this.state.budget,
            takeOffer : this.state.takeOffer,
            providers : this.state.quantity
          },
          navigatorStyle: {
            ...Styles.navigatorStyle,
            tabBarHidden: true
          }
        });
    }

    renderBudgetInput = () => (
        <View style={Styles.inputGroup}>
          <Text style={Styles.label}>Set a budget</Text>
          <View style={Styles.budgetWrapper}>
            <Text style={[Styles.label, Styles.sign]}>$</Text>
            <TextInput
              style={Styles.budgetInput}
              underlineColorAndroid="transparent"
              selectionColor={Styles.THEME_COLOR.orange}
              maxLength={8}
              keyboardType="numeric"
              onChangeText={budget => this.setState(() => ({ budget }))}
              value={this.state.budget}
            />
          </View>
        </View>
      )

    render() {
        return (
            <View style={{flex: 1}}>
                <ScrollView
                    style={Styles.fullContainer}
                    pagingEnabled={false}
                    keyboardShouldPersistTaps="never"
                >
                    <KeyboardAvoidingView
                      behavior="position"
                      contentContainerStyle={Styles.onKeyboardAppear}
                    >
                        <Separator style={Styles.header} text="Job Location" noBorder />
                        <View style={Styles.inputGroup}>
                            <Text style={Styles.label}>Anywhere/Online</Text>
                            <Switch
                              style={Styles.switch}
                              onValueChange={anyWhere => this.setState({ anyWhere })}
                              onTintColor={Styles.THEME_COLOR.orange}
                              tintColor={Styles.THEME_COLOR.lightGrey}
                              thumbTintColor="#F5F5F5"
                              value={this.state.anyWhere}
                            />
                        </View>
                        { !this.state.anyWhere && this.renderLocationPicker() }
                        { this.state.anyWhere && this.renderLocationUnPicker()}

                        <Separator style={Styles.header} text="Time Frame" />
                        <WheelSelector
                             selectors={[
                               'ASAP',
                               'Flexible',
                               'By today',
                               'Couple Days',
                               'After Hours',
                               'Weekend'
                             ]}
                             onSelectChange={this.onTimeFrameChange}
                        />
                        <Separator style={Styles.header} text="Budget" />
                        <View style={Styles.inputGroup}>
                            <Text style={Styles.label}>Take Offer</Text>
                            <Switch
                              style={Styles.switch}
                              onValueChange={(takeOffer) => { this.setState({ takeOffer, budget: '' }); }}
                              onTintColor={Styles.THEME_COLOR.orange}
                              tintColor={Styles.THEME_COLOR.lightGrey}
                              thumbTintColor="#F5F5F5"
                              value={this.state.takeOffer}
                            />
                        </View>
                        { !this.state.takeOffer && this.renderBudgetInput() }

                        <Separator style={Styles.header} text="Require Providers" />
                        <QuantitySelector value={this.state.quantity} minQuantity={1} onChange={(text) => this.changeQuantity(text)} />

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

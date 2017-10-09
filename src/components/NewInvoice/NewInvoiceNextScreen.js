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
  Keyboard,
  Image,
  TouchableHighlight
} from 'react-native';

import Button from '../../common/Button';
import Separator from '../../common/Separator';
import WheelSelector from '../../common/WheelSelector';
import LocationSelector from '../../common/LocationSelector';
import QuantitySelector from '../../common/QuantitySelector';
import IconSimpleLine from 'react-native-vector-icons/SimpleLineIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Styles from './styles';

export default class NewInvoiceNextScreen extends Component {
    static navigatorStyle = {
        tabBarHidden: true,
        navBarHidden:true
    };
    static propTypes = {
        navigator: PropTypes.object.isRequired,
        invoiceNumber : PropTypes.string,
        adminNote : PropTypes.string,
        location: PropTypes.object
    }
    static defaultProps = {
        invoiceNumber : null,
        adminNote : null,
        location: null,
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
          locationPickerVisible: true,
          myService: false,
          anyWhere: false,
          quantity: 0,
          price: '',
          beginQuantity : 1,
          seniorQuantity : 0,
          nextButtonAvailable : true,
          discount : false,
          discountAmount : ''
        };
        this.onChangeMyService = this.onChangeMyService.bind(this);
        this.renderLocationPicker = this.renderLocationPicker.bind(this);
        this.unitChange = this.unitChange.bind(this);
        this.changeQuantity = this.changeQuantity.bind(this);
        this.goNextStep = this.goNextStep.bind(this);
        this._keyboardDidShow = this._keyboardDidShow.bind(this);
        this._keyboardDidHide = this._keyboardDidHide.bind(this);
        this.changeBeginQuantity = this.changeBeginQuantity.bind(this);
        this.changeSeniorQuantity = this.changeSeniorQuantity.bind(this);
    }
    onChangeMyService(myService){
        this.setState({
            myService: myService
        });
    }
    unitChange = (unit) => {
        this.setState(() => ({
          unit
        }));
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
    goNextStep = () => {
        console.log(this.props.invoiceNumber);
        const {invoiceNumber,adminNote,location} = this.props;
        console.log(invoiceNumber);
        this.props.navigator.push({
          screen: 'global.InvoiceView',
          title: 'View Offer',
           passProps: {
               location,
               invoiceNumber,
               adminNote
             },
          navigatorStyle: {
            ...Styles.navigatorStyle,
            tabBarHidden: true,
          },
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
   renderDiscount(){
      return (
            <View style={Styles.inputGroup}>
                <Text style={Styles.label}>Discount amount</Text>
                <View style={Styles.budgetWrapper}>
                   <Text style={[Styles.label, Styles.sign]}>$</Text>
                   <TextInput
                     style={Styles.budgetInput}
                     maxLength={8}
                     underlineColorAndroid="transparent"
                     keyboardType="numeric"
                     selectionColor="rgb(243,145,28)"
                     onChangeText={discountAmount => this.setState(() => ({ discountAmount }))}
                     value={this.state.discountAmount}
                    />
                </View>
            </View>
      );
   }
   goLocationPickerView () {

   }
   renderOffService (){
        return(
            <View>
                <Separator style={Styles.header} text=" Location"  />
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
                { this.state.anyWhere && this.renderLocationUnPicker() }

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

                <Separator style={Styles.header} text="Unit Estimation" />
                <QuantitySelector value={this.state.quantity} minQuantity={0} onChange={(text) => this.changeQuantity(text)} Styles={Styles.lastItem} />
            </View>
        );
   }

   renderOnService () {
        return (
            <View>
                <View style={[Styles.borderBottom, Styles.borderTop]}>
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
    render(){
        return(
            <View style={{flex: 1}}>
                <ScrollView
                    style={Styles.fullContainer}
                    pagingEnabled={false}
                    keyboardShouldPersistTaps="never"
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
                        <Separator style={Styles.header} text="Discount" />
                        <View style={Styles.inputGroup}>
                            <View style={{flexDirection : 'row'}}>
                                <IconSimpleLine name="tag" size={17} style={Styles.iconSimpleLineTag} />
                                <Text style={Styles.label,{marginTop: 5}}>  Apply Discount (if enabled)</Text>
                            </View>
                            <Switch
                               style={Styles.switch}
                               onValueChange={discount => this.setState({ discount })}
                               onTintColor={Styles.THEME_COLOR.orange}
                               tintColor={Styles.THEME_COLOR.lightGrey}
                               thumbTintColor="#F5F5F5"
                               value={this.state.discount}
                            />
                        </View>
                        {this.state.discount && this.renderDiscount() }
                        <View style={[Styles.inputGroup, Styles.lastItem]}>
                            <View style={{flex: 1, justifyContent: 'center',alignItems: 'center', flexDirection: 'row', paddingTop: 20, paddingBottom: 20 }}>
                                <Image source={require('../../common/Images/certified@2x.png')} style={{width: 30, height: 30 }}/>
                                <Text>
                                     Satisfaction Guard
                                </Text>
                                <Icon name='help-circle' size={15} color='#f38118'/>
                            </View>
                        </View>
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
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
  Animated,
  Image,
  TouchableHighlight,
  Dimensions
} from 'react-native';

import Loading from '../../common/Loading';

import Button from '../../common/Button';

import Styles from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import CommonStyle from '../../common/CommonStyle';

const windowWidth = Dimensions.get('window').width;

const windowHeight = Dimensions.get('window').height;


export default class NewInvoiceViewScree extends Component {

    static PropTypes = {
        invoiceNumber: PropTypes.string,
        adminNote : PropTypes.string,
        viewType : PropTypes.string,
        userType : PropTypes.string
    }
    static defaultProps = {
        invoiceNumber: null,
        adminNote : null,
        viewType  : null,
        userType : null
    }
    constructor(props) {
       super(props);
       this.state = {
          avatarSource: null,
          avatarCropped: {
                uri: null
          },
          openCorpModal: false,
          bottomValue : 20,
          ProfileTopHeight : new Animated.Value(150),
          resizeAnim : new Animated.Value(150),
          titleScreen : 'View Invoice',
          contentHeights:[0,0],
          exampleContentHeight:0,
          nextButtonAvailable: true,
          minMomentHeight: new Animated.Value(300)
       };
      this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
      this.goToPrevious = this.goToPrevious.bind(this);
      this.sendNow = this.sendNow.bind(this);
      this.postNow = this.postNow.bind(this);
      this.confirmNow = this.confirmNow.bind(this);
      this.popupWindow = this.popupWindow.bind(this);
    }


    onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
        if (event.type === 'NavBarButtonPress' && event.id === 'back') { // this is the event type for button presses
            this.props.navigator.pop();
        }
    }
    goToPrevious = () =>{
        this.props.navigator.pop();
    }
    sendNow = () =>{

    }
    confirmNow = () =>{
        this.props.navigator.push({
            screen: 'global.InvoiceFeedbackView',
            title: 'Review Service',
            passProps: {
            },
            navigatorStyle: {
               ...Styles.navigatorStyle,
               tabBarHidden: true,
             },
        });
    }
    postNow = () => {
        const viewType = 'paid';
        const {invoiceNumber,userType} = this.props;
        this.props.navigator.push({
             screen: 'global.InvoiceView',
             title: 'Review Service',
              passProps: {
                  invoiceNumber,
                  userType,
                  viewType
                },
             navigatorStyle: {
               ...Styles.navigatorStyle,
               tabBarHidden: true,
             },
        });
    }
    popupWindow = () => {
        if(this.props.userType == 'buyer') {
            this.props.navigator.showModal({
                screen : 'global.DisputePopup',
                title : '',
                passProps : {},
                navigatorStyle: {
                   ...Styles.navigatorStyle,
                   tabBarHidden: true,
                   navBarHidden : true
                 },
                animationType : 'slide-up'
            });
        }else if (this.props.userType == 'seller' ){
            this.props.navigator.showModal({
                    screen : 'global.RefundPopup',
                    title : '',
                    passProps : {},
                    navigatorStyle: {
                       ...Styles.navigatorStyle,
                       tabBarHidden: true,
                       navBarHidden : true
                     },
                    animationType : 'slide-up'
                });
        }

    }
    renderButton() {
        if(this.props.viewType == 'paid'){
            return (
                <View>
                    <View style={ Styles.confirmTextPosition}>
                       <Text style={{color: Styles.THEME_COLOR.lightGrey,fontStyle: 'italic'}}>
                           (note this is only an initial quotation, a final price would be sent out on the invoice upon agreement)
                       </Text>
                       <TouchableHighlight  onPress = {() => this.popupWindow()}>
                           <Text style={{textAlign:'center', alignItems : 'center', width:windowWidth,color: '#ffc000'}}>More Options</Text>
                      </TouchableHighlight>
                   </View>
                   <View style={Styles.buttonPosition}>
                        {
                           this.state.nextButtonAvailable
                           ?
                                 <Button
                                   buttonStyle={Styles.themeBtn}
                                   onPress={this.confirmNow}
                                   text="Confirm Service"
                                 />

                           :
                               null
                        }
                    </View>
                </View>
            );
        }else if(this.props.viewType === 'unpaid'){
            return (
                <View>
                    <View style={ Styles.textPosition}>
                       <Text style={{color: Styles.THEME_COLOR.lightGrey,fontStyle: 'italic'}}>
                           (note this is only an initial quotation, a final price would be sent out on the invoice upon agreement)
                       </Text>
                   </View>
                   <View style={Styles.buttonPosition}>
                        {
                           this.state.nextButtonAvailable
                           ?
                                <Button
                                   buttonStyle={Styles.themeBtn}
                                   onPress={this.postNow}
                                   text="Post Now"
                                 />
                           :
                               null
                        }
                    </View>
                </View>
            );
        }else{
            return (
                <View>
                    <View style={ Styles.textPosition}>
                       <Text style={{color: Styles.THEME_COLOR.lightGrey,fontStyle: 'italic'}}>
                           (note this is only an initial quotation, a final price would be sent out on the invoice upon agreement)
                       </Text>
                   </View>
                   <View style={Styles.buttonPosition}>
                        {
                           this.state.nextButtonAvailable
                           ?
                                 <Button
                                   buttonStyle={Styles.themeBtn}
                                   onPress={this.sendNow}
                                   text="Send Now"
                                 />
                           :
                               null
                        }
                    </View>
                </View>
            );
        }
    }

    renderTitle(){
        if(this.props.viewType === 'unpaid'){
            return (
                 <View style={Styles.inputTitleGroup}>
                    <Text style={[CommonStyle.titleFont,{color: Styles.THEME_COLOR.peachBGOrangeButton}]}>Payment is Requested</Text>
                </View>
            );
        }else if (this.props.viewType === 'paid'){
            return (
                 <View style={Styles.inputTitleGroup}>
                    <Text style={[CommonStyle.titleFont,{color: Styles.THEME_COLOR.greenColor}]}>Paid on 21 Dec 9:23am</Text>
                </View>
            );
        }else{
            return(
                <View style={Styles.inputTitleGroup}>
                    <Text style={CommonStyle.titleFont}>Review Your Invoice</Text>
                </View>
             );
        }
    }
    render(){
         const price = 40 ;
         const quantity = 4;
         const discount = 20;
         const total = (parseFloat(price) * quantity) - discount;
        return(
           <View style={{flex:1}}>
                <ScrollView style={Styles.fullContainer}>
                    {this.renderTitle()}
                    <View style={Styles.inputGroup}>
                        <Text style={[Styles.centerTextFont,{marginTop:10}]}>{ this.props.invoiceNumber }</Text>
                    </View>
                    <View style={Styles.inputGroup}>
                        <Text style={CommonStyle.mediumTitleText}>From Aeirth Gainsburrough</Text>
                    </View>
                    <View style={{paddingHorizontal: 16, marginVertical: 8,}}>
                        <Text style={[CommonStyle.categoriesTitleGreyText, {flexDirection: 'row', height:24,fontWeight: 'bold'}]}>Shutter Edge Photography</Text>
                        <Text style={[CommonStyle.mediumTitleText,{flexDirection: 'row', height:20}]}>ABN 900 000 345 38</Text>
                    </View>
                    <View style={Styles.borderBottom}>
                        <View style={[Styles.inputGroup,Styles.marginBottom20]}>
                            <View style={Styles.quotationWidth}>
                                <Text>Weekend Beginner Dog Training Class Summer Camp. </Text>
                                <Text style={Styles.label}>central park, Melbourne</Text>
                            </View>
                            <View style={{flexDirection : 'row'}}>
                                <Text>x{quantity}</Text>
                            </View>
                            <View style={{flexDirection : 'row'}}>
                                <Text style={Styles.hourlyRateLarge}>${price}/visit</Text>
                            </View>
                        </View>
                    </View>
                    <View style={Styles.inputRightGroup}>
                        <Text> Discount </Text>
                        <Text style={Styles.budget}>${discount}</Text>
                     </View>
                    <View style={Styles.inputRightGroup}>
                        <Text >(Inc. Tax) Total </Text>
                        <Text style={Styles.budget}>${total}</Text>
                     </View>
                    <View style={[Styles.invoiceNumber, Styles.lastItem,{paddingTop: 5, paddingBottom: 5}]}>
                        <View style={{flex: 1, justifyContent: 'center',alignItems: 'center', flexDirection: 'row', paddingTop: 20, paddingBottom: 20 }}>
                            <Image source={require('../../common/Images/certified@2x.png')} style={{width: 30, height: 30 }}/>
                            <Text>
                                 Satisfaction Guard
                            </Text>
                            <Icon name='help-circle' size={15} color='#f38118'/>
                        </View>
                     </View>
                </ScrollView>
                {this.renderButton()}
            </View>
        );
    }
}
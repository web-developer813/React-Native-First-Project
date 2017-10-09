import React, { Component } from 'react';

import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  Keyboard,
  Platform,
  TouchableHighlight

} from 'react-native';

import PropTypes from 'prop-types';

import Button from '../../common/Button';

import CommonStyle from '../../common/CommonStyle';

import Styles from './styles';

export default class ReportProblem extends Component {
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
            nextButtonAvailable: true
       };

       this._keyboardDidShow = this._keyboardDidShow.bind(this);
       this._keyboardDidHide = this._keyboardDidHide.bind(this);
       this.goNextStep = this.goNextStep.bind(this);
       this.goToNextTitle = this.goToNextTitle.bind(this);
   }
   goToNextTitle(title){
      this.props.navigator.push({
         screen : 'global.ReportAboutView',
         title : 'Customer Service',
         passProps : {
              title
         },
         navigatorStyle : {
            ...Styles.navigatorStyle,
            tabBarHidden : true,
         },
      });
   }
   goNextStep = () =>{
        let title = "";
        this.props.navigator.push({
           screen : 'global.ReportAboutView',
           title : 'Customer Service',
           passProps : {
                title
           },
           navigatorStyle : {
              ...Styles.navigatorStyle,
              tabBarHidden : true,
           },
        });
   }
   render() {
        return(
            <View style={{flex : 1}}>
                 <ScrollView style={Styles.fullContainer}>
                    <View style={Styles.titleInputWrapper}>
                        <Text style={[CommonStyle.boldTitleFont, {textAlign:'center'}]}>Report a Problem</Text>
                    </View>
                    <View style={Styles.titleInputWrapper}>
                        <Text style={CommonStyle.signUpText}>
                            We understand how frustrated sometimes things can be!
                            Our customer support will do everything to improve our service and solve your problem.
                            Please let us know about your concerns by choosing from one of the following options.
                        </Text>
                    </View>
                    <View style={Styles.borderText}>
                        <TouchableHighlight onPress={()=>this.goToNextTitle('Content and Internet Safety')}>
                            <View style={Styles.labelWrapper}>
                                <Text style={{fontSize:16}}>Content and Internet Safety</Text>
                                <Image source={require('../../common/Images/forward-gray.png')} style={Styles.stretch} />
                            </View>
                         </TouchableHighlight>
                    </View>
                    <View style={Styles.borderText}>
                        <TouchableHighlight onPress={()=>this.goToNextTitle('Profile Settings and Account Security')}>
                             <View style={Styles.labelWrapper}>
                                 <Text style={{fontSize:16}}>Profile Settings and Account Security </Text>
                                 <Image source={require('../../common/Images/forward-gray.png')} style={Styles.stretch} />
                             </View>
                        </TouchableHighlight>
                    </View>
                    <View style={Styles.borderText}>
                        <TouchableHighlight onPress={()=>this.goToNextTitle('Faults and Technical Issues')}>
                            <View style={Styles.labelWrapper}>
                                <Text style={{fontSize:16}}>Faults and Technical Issues</Text>
                                <Image source={require('../../common/Images/forward-gray.png')} style={Styles.stretch} />
                            </View>
                         </TouchableHighlight>
                    </View>
                    <View style={Styles.borderLastText}>
                        <TouchableHighlight onPress={()=>this.goToNextTitle('Billing and Transactions')}>
                            <View style={Styles.labelWrapper}>
                                <Text style={{fontSize:16}}>Billing and Transactions</Text>
                                <Image source={require('../../common/Images/forward-gray.png')} style={Styles.stretch} />
                            </View>
                         </TouchableHighlight>
                    </View>
                    <View style={[Styles.titleInputWrapper, Styles.lastItem]}>
                        <Text style={CommonStyle.signUpText}>
                            For further information about our platform please see our
                            <Text style={{color:'#f38118'}}> Terms and Conditions</Text> and  <Text style={{color:'#f38118'}}> Privacy Policy </Text> here.
                        </Text>
                    </View>
                </ScrollView>
                <View style={Styles.buttonPosition}>
                    {
                        this.state.nextButtonAvailable
                        ?
                          <Button
                           buttonStyle={Styles.themeBtn}
                           onPress={this.goNextStep}
                           text="Continue"
                          />
                        :
                          null
                    }
                </View>
            </View>
        );
   }
}
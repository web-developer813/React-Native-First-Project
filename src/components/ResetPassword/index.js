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

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Styles from './styles';

export default class ResetPassword extends Component {
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
            currentPassword : '',
            newPassword : '',
            confirmPassword : '',
            nextButtonAvailable : true,
            passwordMatch : false
        }
        this.resetPassword = this.resetPassword.bind(this);
        this.confirm = this.confirm.bind(this);
        this._keyboardDidHide = this._keyboardDidHide.bind(this);
        this._keyboardDidShow = this._keyboardDidShow.bind(this);
    }
    confirm = () =>{
        if(this.state.newPassword != this.state.confirmPassword) {
            this.setState ({
                 passwordMatch : true
            });
        }else{
            this.setState ({
                passwordMatch : false
            });
        }
    }
    resetPassword = () => {

    }
    renderAlert =() => {
        return (
            <View style={Styles.passwordAlert}>
                <View style={{flex: 1, justifyContent: 'center',alignItems: 'center', flexDirection: 'row', paddingTop: 5, paddingBottom: 5 }}>
                    <Icon name='alert' style={{color: 'white'}} size= {15}/>
                    <Text style={{paddingLeft : 5,color : 'white', fontSize: 12}}>Password dont match </Text>
                </View>
           </View>
        )
    }
    renderSubAlert = () => {
        return (
             <View style={Styles.titleInputWrapper}>
                <Text style={{color: '#FC4048'}}>Password dont  match!</Text>
             </View>

        );
    }
    render() {
        return (
           <View style={{ flex: 1 }}>
               <View style={{backgroundColor : Styles.THEME_COLOR.boxColor}}>
                 <Text style={Styles.customHeader}>Reset Password</Text>
                 <TouchableHighlight style={Styles.imgTopLeft} activeOpacity={0.6} underlayColor={'rgba(255,255,255,0.1)'}
                   onPress={()=>
                       this.props.navigator.pop()
                     }>
                     <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/backIcon@2x.png')} style={{width:10,height:20}}/>
                 </TouchableHighlight>
               </View>
               {this.state.passwordMatch  && this.renderAlert()}

               <ScrollView style={Styles.fullContainer}>
                   <View style={[Styles.titleInputWrapper,{marginTop : 50}]}>
                       <View style={Styles.labelWrapper}>
                         <Text style={Styles.label}>Enter Current Password</Text>
                       </View>
                       <TextInput
                         autoCorrect={false}
                         style={Styles.textInput}
                         value={this.state.currentPassword}
                         underlineColorAndroid="transparent"
                         selectionColor={Styles.THEME_COLOR.orange}
                         placeholderTextColor={Styles.THEME_COLOR.greyish}
                         maxLength={99}
                         secureTextEntry={true}
                         onChangeText={currentPassword => this.setState({
                           currentPassword
                         })}
                       />
                   </View>
                   <View style={Styles.titleInputWrapper}>
                      <View style={Styles.labelWrapper}>
                        <Text style={Styles.label}>Enter New Password</Text>
                      </View>
                      <TextInput
                        autoCorrect={false}
                        style={Styles.textInput}
                        value={this.state.newPassword}
                        underlineColorAndroid="transparent"
                        selectionColor={Styles.THEME_COLOR.orange}
                        placeholderTextColor={Styles.THEME_COLOR.greyish}
                        maxLength={99}
                        secureTextEntry={true}
                        onChangeText={newPassword => this.setState({
                          newPassword
                        })}
                      />
                  </View>
                  <View style={Styles.titleInputWrapper}>
                     <View style={Styles.labelWrapper}>
                       <Text style={Styles.label}>Confirm Password</Text>
                     </View>
                     <TextInput
                       autoCorrect={false}
                       style={Styles.textInput}
                       value={this.state.confirmPassword}
                       underlineColorAndroid="transparent"
                       selectionColor={Styles.THEME_COLOR.orange}
                       placeholderTextColor={Styles.THEME_COLOR.greyish}
                       maxLength={99}
                       secureTextEntry={true}
                       onBlur={()=>this.confirm()}
                       onChangeText={confirmPassword => this.setState({
                           confirmPassword
                         })}
                     />
                 </View>
                  {this.state.passwordMatch  && this.renderSubAlert()}
                 <View style={Styles.lastItem}>
                 </View>
               </ScrollView>
               <View style={Styles.buttonPosition}>
                   {
                       this.state.nextButtonAvailable
                       ?
                         <Button
                          buttonStyle={Styles.themeBtn}
                          onPress={this.resetPassword}
                          text="Reset Password"
                         />
                       :
                         null
                   }
               </View>
           </View>
        );
    }
}
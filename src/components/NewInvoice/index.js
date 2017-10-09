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

import Styles from './styles';

import CommonStyle from '../../common/CommonStyle';

export default class NewInvoice extends Component {
    constructor(props) {
        super(props);
        this.state = {
          invoiceNumber: '',
          adminNote: '',
          nextButtonAvailable: true
        };
        this.location = {
            currentAddress: "North Melbourne",
             latitude :  37.7992,
             longitude : 144.9467
        };
        this._keyboardDidShow = this._keyboardDidShow.bind(this);
        this._keyboardDidHide = this._keyboardDidHide.bind(this);
        this.goNextStep =this.goNextStep.bind(this);
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

    goNextStep = () => {
         const { invoiceNumber, adminNote } = this.state;
         const location = this.location;
         this.props.navigator.push({
               screen: 'global.InvoiceNextView',
               title: 'Create New Invoice',
               passProps: {
                 location,
                 invoiceNumber,
                 adminNote
               },
               navigatorStyle: {
                 ...Styles.navigatorStyle,
                 tabBarHidden: true
               },
         });
    }

    render(){
        const { invoiceNumber } = this.state;
        let invoiceNumberLength = 0;
        if (invoiceNumber) {
          invoiceNumberLength = invoiceNumber.length;
        }
        const { adminNote } = this.state;
        let adminNoteLength = 0;
        if (adminNote) {
          adminNoteLength = adminNote.length;
        }
        return(
            <View style={{ flex: 1 }}>
                <ScrollView style={[Styles.fullContainer, Styles.marginBottom]}>
                    <View style={Styles.titleInputWrapper}>
                        <View>
                           <Text style={[CommonStyle.titleFont,{paddingBottom: 10}]}>Invoice</Text>
                        </View>
                        <View style={Styles.labelWrapper}>
                          <Text style={Styles.label}></Text>
                          <Text style={Styles.label}>{invoiceNumberLength}/10 characters</Text>
                        </View>
                        <TextInput
                          autoCorrect={false}
                          style={Styles.textInput}
                          value={this.state.subject}
                          underlineColorAndroid="transparent"
                          selectionColor={Styles.THEME_COLOR.orange}
                          placeholderTextColor={Styles.THEME_COLOR.greyish}
                          maxLength={10}
                          onChangeText={invoiceNumber => this.setState({
                            invoiceNumber
                          })}
                        />
                    </View>
                    <View style={Styles.titleInputWrapper}>
                        <View style={Styles.labelWrapper}>
                          <Text style={Styles.label}>Admin Note (for yourself) </Text>
                          <Text style={Styles.label}>{adminNoteLength}/100 characters</Text>
                        </View>
                        <TextInput
                          autoCorrect={false}
                          style={Styles.textInput}
                          value={this.state.subject}
                          underlineColorAndroid="transparent"
                          selectionColor={Styles.THEME_COLOR.orange}
                          placeholderTextColor={Styles.THEME_COLOR.greyish}
                          maxLength={100}
                          onChangeText={adminNote => this.setState({
                            adminNote
                          })}
                        />
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
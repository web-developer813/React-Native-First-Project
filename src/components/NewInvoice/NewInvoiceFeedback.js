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
import TextArea from '../../common/TextArea';

import Styles from './styles';

export default class NewInvoiceFeedback extends Component {
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
             feedback: '',
             nextButtonAvailable: true
           };
        this._keyboardDidShow = this._keyboardDidShow.bind(this);
        this._keyboardDidHide = this._keyboardDidHide.bind(this);
     }
    goNextStep = () =>{

    }
    render(){
        const { feedback } = this.state;
        let length = 0;
        if (feedback) {
          length = feedback.length;
        }
        return(
            <View style={{flex:1}}>
                 <ScrollView style={Styles.fullContainer}>
                    <View style={Styles.descriptionInputWrapper}>
                        <View style={Styles.labelWrapper}>
                          <Text style={Styles.label}>Your Feedback </Text>
                          <Text style={Styles.label}>{length}/100 characters</Text>
                        </View>
                        <TextArea
                          startHeight={42}
                          autoCorrect={false}
                          enablesReturnKeyAutomatically
                          maxLength={100}
                          numberOfLines={5}
                          multiline
                          selectionColor="rgb(243,145,28)"
                          onChangeText={text => this.setState({
                            feedback: text
                          })}
                          value={this.state.feedback}
                        />
                      </View>
                      <View style={Styles.descriptionInputWrapper}>
                         <View style={Styles.labelWrapper}>
                              <Text style={Styles.label}>Your Rating </Text>
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
                        text="Post Feedback"
                       />
                     :
                       null
                   }
                 </View>
            </View>
        );
    }
}
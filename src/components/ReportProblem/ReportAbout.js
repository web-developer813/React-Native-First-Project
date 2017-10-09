import React, { Component } from 'react';

import {
  AppRegistry,
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

import TextArea from '../../common/TextArea';

import CommonStyle from '../../common/CommonStyle';

import Styles from './styles';

export default class ReportAbout extends Component {
     static propTypes = {
        title: PropTypes.string,
    }
    static defaultProps = {
        title : ''
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
            nextButtonAvailable: true,
            contact : '',
            topic : '',
            description : ''
       };

       this._keyboardDidShow = this._keyboardDidShow.bind(this);
       this._keyboardDidHide = this._keyboardDidHide.bind(this);
   }
   goNextStep = () =>{
        this.props.navigator.push({
           screen : 'global.ReportDocumentsView',
           title : 'Customer Service',
           passProps : {
                title : this.props.title,
                contact: this.state.contact,
                topic: this.state.topic,
                description : this.state.description
           },
           navigatorStyle : {
              ...Styles.navigatorStyle,
              tabBarHidden : true,
           },
        });
   }
   render() {
        const { contact } = this.state;
        let contact_length = 0;
        if (contact) {
          contact_length = contact.length;
        }
        const { topic } = this.state;
        let topic_length = 0;
        if (topic) {
          topic_length = topic.length;
        }
        const { description } = this.state;
        let description_length = 0;
        if (topic) {
          description_length = description.length;
        }

       return(
           <View style={{flex : 1}}>
                <ScrollView style={Styles.fullContainer}>
                   <View style={Styles.titleInputWrapper}>
                        <Text style={[CommonStyle.boldTitleFont, {textAlign:'center'}]}>What is it about</Text>
                   </View>
                   <View style={Styles.titleInputWrapper}>
                       <Text style={CommonStyle.signUpText}>{this.props.title}</Text>
                  </View>
                  <View style={Styles.titleInputWrapper}>
                       <View style={[Styles.labelWrapper, {paddingBottom: 10}]}>
                          <Text style={Styles.label}>Your contact</Text>
                          <Text style={Styles.label}>{contact_length}/50 characters</Text>
                       </View>
                       <TextInput
                             autoCorrect={false}
                             style={Styles.textInput}
                             value={this.state.contact}
                             underlineColorAndroid="transparent"
                             selectionColor={Styles.THEME_COLOR.orange}
                             placeholderTextColor={Styles.THEME_COLOR.greyish}
                             maxLength={50}
                             onChangeText={contact => this.setState({
                               contact
                             })}
                             placeholder="Your phone number or email address"
                           />
                  </View>
                  <View style={Styles.titleInputWrapper}>
                       <View style={[Styles.labelWrapper, {paddingBottom: 10}]}>
                          <Text style={Styles.label}>Your topic</Text>
                          <Text style={Styles.label}>{topic_length}/50 characters</Text>
                       </View>
                       <TextInput
                             autoCorrect={false}
                             style={Styles.textInput}
                             value={this.state.topic}
                             underlineColorAndroid="transparent"
                             selectionColor={Styles.THEME_COLOR.orange}
                             placeholderTextColor={Styles.THEME_COLOR.greyish}
                             maxLength={50}
                             onChangeText={topic => this.setState({
                               topic
                             })}
                             placeholder="E.g. I need help with a transaction"
                           />
                  </View>
                  <View style={[Styles.titleInputWrapper, Styles.lastItem]}>
                     <View style={[Styles.labelWrapper, {paddingBottom: 10}]}>
                        <Text style={Styles.label}>Description</Text>
                        <Text style={Styles.label}>{description_length}/500 characters</Text>
                     </View>
                     <TextArea
                       startHeight={42}
                       autoCorrect={false}
                       enablesReturnKeyAutomatically
                       maxLength={500}
                       numberOfLines={5}
                       multiline
                       selectionColor="rgb(243,145,28)"
                       placeholder="Describe your description within 500 characters."
                       onChangeText={description => this.setState({
                         description
                       })}
                       value={this.state.description}
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

AppRegistry.registerComponent('ReportAbout', () => ReportAbout);
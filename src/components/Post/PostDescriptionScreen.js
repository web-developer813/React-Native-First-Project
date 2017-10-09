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
  ScrollView,
  Image,
  TouchableHighlight
} from 'react-native';

import Button from '../../common/Button';

import TextArea from '../../common/TextArea';

import CommonStyle from '../../common/CommonStyle';

import Styles from './styles';

export default class PostDescriptionScreen extends Component {
    static propTypes = {
       location: PropTypes.object,
       subject : PropTypes.string,
       pageTitle : PropTypes.string,
       body: PropTypes.string
    }
    static defaultProps = {
        subject : '',
        location : '',
        pageTitle : '',
        body :''
    }
    constructor(props) {
       super(props);
       this.state = {
        body : '',
        nextButtonAvailable : true
       };
       this._keyboardDidShow = this._keyboardDidShow.bind(this);
       this._keyboardDidHide = this._keyboardDidHide.bind(this);
    }

   componentWillMount() {
       this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
       this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
       if(this.props.pageTitle == "second"){
           this.setState({
                body: this.props.body
           });
       }
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
   renderImage(){
        if(this.props.pageTitle == 'second'){
            return (
                <View style={[Styles.descriptionInputWrapper, Styles.lastItem]}>
                    <View style={Styles.imageContainer}>
                      <Image source={require('./img/avatar1.png')} style={Styles.stretch} />
                      <Image source={require('./img/avatar2.png')} style={Styles.stretch} />
                      <Image source={require('./img/avatar3.png')} style={Styles.stretch} />
                      <TouchableHighlight onPress={this.onAddImage}>
                        <Image source={require('../../common/Images/plus_light_padding.png')} style={Styles.stretch} />
                      </TouchableHighlight>
                    </View>
                </View>
            );
        }
   }
   render() {
        const { body } = this.state;
        let length = 0;
        if (body) {
          length = body.length;
        }
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={Styles.fullContainer}>
                    <View style={Styles.titleInputWrapper}>
                        <Text style={CommonStyle.titleFont}>{this.props.subject}</Text>
                    </View>
                    <View style={Styles.descriptionInputWrapper}>
                        <View>
                              <Text style={[CommonStyle.centerTitleFont,{paddingBottom: 10}]}>A  bit more description </Text>
                        </View>
                        <View style={Styles.labelWrapper}>
                          <Text style={Styles.label}></Text>
                          <Text style={Styles.label}>{length}/500 characters</Text>
                        </View>
                        <TextArea
                          startHeight={42}
                          autoCorrect={false}
                          enablesReturnKeyAutomatically
                          maxLength={500}
                          numberOfLines={5}
                          multiline
                          selectionColor="rgb(243,145,28)"
                          placeholder="Describe your task within 500 characters."
                          onChangeText={text => this.setState({
                            body: text
                          })}
                          value={this.state.body}
                        />
                    </View>
                    {this.renderImage()}
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

   goNextStep = () => {
        const location = this.props.location;
        const {body} = this.state;
        const subject = this.props.subject;
        const pageTitle = "second";
        if(this.props.pageTitle === 'first'){
            this.props.navigator.push({
                  screen: 'global.PostDescriptionView',
                  title: 'Create New Job',
                  passProps: {
                    location,
                    body,
                    subject,
                    pageTitle
                  },
                  navigatorStyle: {
                    ...Styles.navigatorStyle,
                    tabBarHidden: true
                  },
            });
        }else if(this.props.pageTitle ==='second'){
             this.props.navigator.push({
                  screen: 'global.PostNextView',
                  title: 'Create New Job',
                  passProps: {
                    location,
                    subject,
                    body
                  },
                  navigatorStyle: {
                    ...Styles.navigatorStyle,
                    tabBarHidden: true
                  },
                });
        }
   };

}
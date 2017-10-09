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

import TextArea from '../../common/TextArea';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import IconSimpleLine from 'react-native-vector-icons/SimpleLineIcons';

import CommonStyle from '../../common/CommonStyle';


import Styles from './styles';

export default class Offer extends Component {
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
          offer: '',
          image: '',
         nextButtonAvailable: true
       };
       this.location = {
        currentAddress: "North Melbourne",
        latitude :  37.7992,
        longitude : 144.9467
       };
       this._keyboardDidShow = this._keyboardDidShow.bind(this);
       this._keyboardDidHide = this._keyboardDidHide.bind(this);
       this.goNextStep = this.goNextStep.bind(this);
   }
   onAddImage() {
       alert('Add Images');
   }
   goNextStep = () => {
        const { offer } = this.state;
        const location = this.location;
        this.props.navigator.push({
          screen: 'global.OfferNextView',
          title: 'Prepare Offer',
          passProps: {
            location,
            offer,
          },
          navigatorStyle: {
            ...Styles.navigatorStyle,
            tabBarHidden: true
          },
        });
   }

   render(){
        const { offer } = this.state;
        let length = 0;
        if (offer) {
            length = offer.length;
        }
        const { image } = this.state;
        let image_length = 3;
        if (image) {
            image_length = image.length;
        }
        return(
            <View style={{ flex: 1 }}>
                 <ScrollView style={Styles.fullContainer}>
                      <View style={Styles.headerWrapper}>
                          <View style={Styles.headerContentWrapper}>
                            <IconSimpleLine name="tag" size={17} style={Styles.iconSimpleLineTag} />
                            <Text style={Styles.headerText}>
                               "Need someone to take my dog on a walk everyday afternoon" | ASAP
                             </Text>
                           </View>
                      </View>
                      <View style={Styles.descriptionInputWrapper}>
                          <View>
                            <Text style={[CommonStyle.centerTitleFont,{paddingBottom: 10}]}>Your Quote (optional)</Text>
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
                              offer: text
                            })}
                            value={this.state.offer}
                          />
                      </View>
                      <View style={[Styles.descriptionInputWrapper, Styles.lastItem]}>
                           <View style={Styles.labelWrapper}>
                             <Text style={Styles.label}><Image source={require('../../common/Images/paperclip.png')} style={Styles.stretch} size="14" /> Add Photo</Text>
                             <Text style={Styles.label}>{image_length}/9</Text>
                           </View>
                           <View style={Styles.imageContainer}>
                             <Image source={require('./img/avatar1.png')} style={Styles.stretch} />
                             <Image source={require('./img/avatar2.png')} style={Styles.stretch} />
                             <Image source={require('./img/avatar3.png')} style={Styles.stretch} />
                             <TouchableHighlight onPress={this.onAddImage}>
                               <Image source={require('../../common/Images/plus_light_padding.png')} style={Styles.stretch} />
                             </TouchableHighlight>
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
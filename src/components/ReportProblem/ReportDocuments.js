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

import ImagePicker from 'react-native-image-picker';

import PhotoPickerVertical from '../../common/PhotoPickerVertical/index.js';

import Styles from './styles';

const options = {
  title: 'Select Image',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
}
export default class ReportDocuments extends Component {
    static propTypes = {
        title: PropTypes.string,
        contact: PropTypes.string,
        topic : PropTypes.string,
        description: PropTypes.string
    }
    static defaultProps = {
        title : '',
        contact : '',
        topic: '',
        description : ''
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
       this.state={
           nextButtonAvailable: true,
           avatarSource :''
       }
    }
    goNextStep = () =>{
        this.props.navigator.push({
           screen : 'global.ReportReviewView',
           title : 'Customer Service',
           passProps : {
                title : this.props.title,
                contact: this.props.contact,
                topic: this.props.topic,
                description : this.props.description,
                avatarSource : this.state.avatarSource
           },
           navigatorStyle : {
              ...Styles.navigatorStyle,
              tabBarHidden : true,
           },
        });
    }
    render(){
        return(
            <View style={{flex:1}}>
                  <ScrollView style={Styles.fullContainer}>
                    <View style={Styles.titleInputWrapper}>
                         <Text style={[CommonStyle.boldTitleFont, {textAlign:'center'}]}>Images or Documents</Text>
                    </View>
                    <View style={Styles.titleInputWrapper}>
                         <Text style={CommonStyle.signUpText}>Upload images or documents to help us understand or handle your problem, but only do so if it is safe!</Text>
                    </View>
                    <View style={Styles.titleInputWrapper}>
                        <PhotoPickerVertical />
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

AppRegistry.registerComponent('ReportDocuments', () => ReportDocuments);
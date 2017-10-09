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
  Dimensions,
  Animated,
  TouchableHighlight

} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const windowHeight = Dimensions.get('window').height;

import PropTypes from 'prop-types';

import Button from '../../common/Button';

import TextArea from '../../common/TextArea';

import CommonStyle from '../../common/CommonStyle';

import Styles from './styles';


export default class ReportReview extends Component {
    static propTypes = {
            title: PropTypes.string,
            contact: PropTypes.string,
            topic : PropTypes.string,
            description: PropTypes.string,
            avatarSource : PropTypes.string
    }
    static defaultProps = {
        title : '',
        contact : '',
        topic: '',
        description : '',
        avatarSource : ''
    }
    componentWillMount() {
       this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
       this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
       console.log(this.props.avatarSource.width);
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
           nextButtonAvailable: true
       }
    }
    goNextStep = () => {
        alert("All set! We will get back to you soon with any update!");
    }
    render(){
        return(
            <View style={{flex:1}}>
                  <ScrollView style={Styles.fullContainer}>
                    <View style={Styles.titleInputWrapper}>
                         <Text style={[CommonStyle.boldTitleFont, {textAlign:'center'}]}>Review your Issue</Text>
                    </View>
                    <View style={Styles.titleInputWrapper}>
                         <Text style={CommonStyle.signUpText}> {this.props.topic}</Text>
                    </View>
                    <View style={Styles.titleInputWrapper}>
                         <Text style={CommonStyle.signUpText}>{this.props.description}</Text>
                    </View>
                    <View style={Styles.titleInputWrapper}>
                        <Animated.Image resizeMode={Image.resizeMode.cover} source={require('../../common/Images/dogtrain.jpg')} style={{width: windowWidth-28,height: 200}} />
                    </View>
                 </ScrollView>
                 <View style={Styles.buttonPosition}>
                     {
                         this.state.nextButtonAvailable
                         ?
                           <Button
                            buttonStyle={Styles.themeBtn}
                            onPress={this.goNextStep}
                            text="Submit"
                           />
                         :
                           null
                     }
                 </View>
            </View>
        );
    }

}

AppRegistry.registerComponent('ReportReview', () => ReportReview);
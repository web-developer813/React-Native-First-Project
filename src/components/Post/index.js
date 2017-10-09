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


export default class Post extends Component {
  static propTypes = {
    navigator: PropTypes.object,
    updateCurrentPost: PropTypes.func,
    post: PropTypes.shape({
      currentPost: PropTypes.object
    })
  }

  static defaultProps = {
    navigator: null,
    updateCurrentPost: null,
    post: {
      currentPost: null
    }
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
    const { currentPost } = props.post;
    this.state = {
      subject: '',
      body: '',
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
  }
  onAddImage() {
    alert('Add Images');
  }
  goNextStep = () => {
    const { subject, body } = this.state;
    const location = this.location;
    const pageTitle = "first";
//    this.props.updateCurrentPost({
//      subject,
//      body
//    });

//    this.props.navigator.push({
//      screen: 'global.PostNextView',
//      title: 'Create New Post',
//      passProps: {
//        location,
//        subject,
//        body
//      },
//      navigatorStyle: {
//        ...Styles.navigatorStyle,
//        tabBarHidden: true
//      },
//    });
    this.props.navigator.push({
          screen: 'global.PostDescriptionView',
          title: 'Create New Job',
          passProps: {
            location,
            subject,
            body,
            pageTitle
          },
          navigatorStyle: {
            ...Styles.navigatorStyle,
            tabBarHidden: true
          },
    });
  }
  render() {
    const { body } = this.state;
    let length = 0;
    if (body) {
      length = body.length;
    }
    const { image } = this.state;
    let image_length = 3;
    if (image) {
      image_length = image.length;
    }
    const { subject } = this.state;
    let subject_length = 0;
    if (subject) {
      subject_length = subject.length;
    }

    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={Styles.fullContainer}>
          <View style={Styles.headerWrapper}>
            <View style={Styles.headerContentWrapper}>
              <IconSimpleLine name="tag" size={17} style={Styles.iconSimpleLineTag} />
              <Text style={Styles.headerText}>
                You are positing to 27 providers found in
                "pet training" under <Text style={Styles.italicText}> pet care </Text>
              </Text>
            </View>
          </View>
          <View style={Styles.titleInputWrapper}>
            <View>
              <Text style={[CommonStyle.centerTitleFont,{paddingBottom: 10}]}>Tell us what you need</Text>
            </View>
            <TextInput
              autoCorrect={false}
              style={Styles.textInput}
              value={this.state.subject}
              underlineColorAndroid="transparent"
              selectionColor={Styles.THEME_COLOR.orange}
              placeholderTextColor={Styles.THEME_COLOR.greyish}
              maxLength={99}
              onChangeText={subject => this.setState({
                subject
              })}
              placeholder="e.g. Needs someone to teach me French"
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

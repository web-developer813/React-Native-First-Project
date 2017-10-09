import React, { Component } from 'react';

import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  Keyboard,
  Platform,
  TouchableHighlight,
  Dimensions
} from 'react-native';


import PropTypes from 'prop-types';


import Styles from './styles';

import CommonStyle from '../../common/CommonStyle';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const windowWidth = Dimensions.get('window').width;

export default class Inbox extends Component {
    constructor(props) {
       super(props);
       this.onPress = this.onPress.bind();
    }
    onPress = () =>{
        this.props.navigator.push({
          screen: 'global.InboxTaskDetailView',
          title: 'Task Thread',
          passProps: {
          },
          navigatorStyle: {
            ...Styles.navigatorStyle,
          },
           navigatorButtons: {
              rightButtons: [
                {
                  icon: require('../../common/Images/tune.png'), // for icon button, provide the local image asset name
                  id: 'filter' // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
                }
              ]
            }
        });
    }
    render(){
        return(
            <View>
                <ScrollView>
                    <TouchableHighlight onPress={this.onPress}>
                        <View style={[Styles.titleInputWrapper, Styles.labelWrapper]}>
                            <View style={Styles.myTaskContainer}>
                                <Text numberOfLines={1} style={[CommonStyle.titleGrey,{fontSize:18}]}> Need help with my  dog behaviour screen </Text>
                                <View style={Styles.imageContainer}>
                                    <Image resizeMode={Image.resizeMode.cover} source={require('./img/avatar1.png')} style={Styles.circleImageView}/>
                                    <Image resizeMode={Image.resizeMode.cover} source={require('./img/avatar2.png')} style={Styles.circleImageView}/>
                                    <Image resizeMode={Image.resizeMode.cover} source={require('./img/avatar3.png')} style={Styles.circleImageView}/>
                                    <Image resizeMode={Image.resizeMode.cover} source={require('./img/avatar4.png')} style={Styles.circleImageView}/>
                                    <Text style={Styles.myTaskNumber}>(20)</Text>
                                    <Text numberOfLines={1} style={Styles.myTaskList}>Jack, Jessica, Peter, James, Letter</Text>
                                </View>
                            </View>
                            <View style={Styles.myTaskTimeContainer}>
                                <Text style={Styles.redPoint}></Text>
                                <Text style={[Styles.myTaskTime,{marginRight:5}]}>11.59 AM</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <View style={Styles.borderTopContainer}>
                    <TouchableHighlight onPress={this.onPress}>
                        <View style={[Styles.titleInputWrapper, Styles.labelWrapper,Styles.paddingTopChange]}>
                            <View style={Styles.myTaskContainer}>
                                <Text numberOfLines={1} style={[CommonStyle.mediumTitleText,{fontSize:16}]}>Looking for a photography assistant my result rest.</Text>
                                <View style={Styles.imageContainer}>
                                    <Image resizeMode={Image.resizeMode.cover} source={require('./img/avatar1.png')} style={Styles.circleImageView}/>
                                    <Image resizeMode={Image.resizeMode.cover} source={require('./img/avatar2.png')} style={Styles.circleImageView}/>
                                    <Image resizeMode={Image.resizeMode.cover} source={require('./img/avatar3.png')} style={Styles.circleImageView}/>
                                    <Text style={Styles.myTaskNumber}>(3)</Text>
                                    <Text numberOfLines={1} style={Styles.myTaskSubList}>Jack, Jessica, Peter, James, Letter</Text>
                                </View>
                            </View>
                            <View style={Styles.myTaskTimeContainer}>
                                <Text style={Styles.myTaskTime}>Yesterday</Text>
                                <Text style={Styles.myTaskContent}> 3</Text>
                            </View>
                        </View>
                        </TouchableHighlight>
                    </View>
                    <View style={Styles.borderTopContainer}>
                        <TouchableHighlight onPress={this.onPress}>
                        <View style={[Styles.titleInputWrapper, Styles.labelWrapper,Styles.paddingTopChange]}>
                              <View style={Styles.myTaskContainer}>
                                 <Text numberOfLines={1} style={[CommonStyle.mediumTitleText,{fontSize:16}]}>Jessica Gainsburrough</Text>
                                 <View style={Styles.imageContainer}>
                                    <Image resizeMode={Image.resizeMode.cover} source={require('./img/avatar1.png')} style={Styles.circleImageLargeView}/>
                                    <Text style={{marginLeft: 10}} numberOfLines ={1}>Me: I can do it !</Text>
                                 </View>
                              </View>
                              <View style={Styles.myTaskTimeContainer}>
                                  <Text style={Styles.myTaskTime}>20/11/2017</Text>
                                  <View>
                                  <Text style={Styles.myTaskContent}> 3</Text>
                                  <Icon name='alert' style={Styles.iconAlert} size= {15}/>
                                  </View>
                              </View>
                        </View>
                        </TouchableHighlight>
                    </View>
                    <View style={Styles.borderTopContainer}>
                    <TouchableHighlight onPress={this.onPress}>
                        <View style={[Styles.titleInputWrapper, Styles.labelWrapper,Styles.paddingTopChange]}>

                            <View style={Styles.myTaskContainer}>
                                <Text numberOfLines={1} style={[CommonStyle.mediumTitleText,{fontSize:16}]}>Need to help me take my kid to this</Text>
                                <View style={Styles.imageContainer}>
                                     <Image resizeMode={Image.resizeMode.cover} source={require('./img/avatar4.png')} style={Styles.circleImageLargeView}/>
                                     <Text  numberOfLines ={1} style={{width:200,marginLeft: 10}}>Me: We are the best team, I believe about that.</Text>
                                 </View>
                            </View>
                            <View style={Styles.myTaskTimeContainer}>
                                <Text style={Styles.myTaskTime}>20/11/2017</Text>
                            </View>
                        </View>
                        </TouchableHighlight>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
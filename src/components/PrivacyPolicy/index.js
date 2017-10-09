import React, { Component } from 'react';

import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  TouchableHighlight

} from 'react-native';

import PropTypes from 'prop-types';

import Styles from './styles';

export default class PrivacyPolicy extends Component {
     constructor(props) {
        super(props);
     }
    render(){
        return(
            <View style={{flex: 1}}>
                <View style={{backgroundColor : Styles.THEME_COLOR.boxColor}}>
                   <Text style={Styles.customHeader}>Privacy Policy</Text>
                   <TouchableHighlight style={Styles.imgTopLeft} activeOpacity={0.6} underlayColor={'rgba(255,255,255,0.1)'}
                     onPress={()=>
                       this.props.navigator.pop()
                     }>
                     <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/backIcon@2x.png')} style={{width:10,height:20}}/>
                    </TouchableHighlight>
                </View>
                <ScrollView style={Styles.fullContainer}>
                    <View style={Styles.titleInputWrapper}>
                        <Text style={Styles.textBody}>
                            This is dummy text. This text is for display purposes only. Actual text will be placed here after the approval of your design.
                            This is dummy text. This text is for display purposes only. Actual text will be placed here after the approval of your design.
                            This is dummy text. This text is for display purposes only. Actual text will be placed here after the approval of your design.
                            This is dummy text. This text is for display purposes only. Actual text will be placed here after the approval of your design.
                        </Text>
                        <Text style={Styles.textBody}>
                            This is dummy text. This text is for display purposes only. Actual text will be placed here after the approval of your design.
                            This is dummy text. This text is for display purposes only. Actual text will be placed here after the approval of your design.
                            This is dummy text. This text is for display purposes only. Actual text will be placed here after the approval of your design.
                            This is dummy text. This text is for display purposes only. Actual text will be placed here after the approval of your design.
                        </Text>
                         <Text style={Styles.textBody}>
                            This is dummy text. This text is for display purposes only. Actual text will be placed here after the approval of your design.
                            This is dummy text. This text is for display purposes only. Actual text will be placed here after the approval of your design.
                            This is dummy text. This text is for display purposes only. Actual text will be placed here after the approval of your design.
                            This is dummy text. This text is for display purposes only. Actual text will be placed here after the approval of your design.
                         </Text>
                         <Text style={Styles.textBody}>
                            This is dummy text. This text is for display purposes only. Actual text will be placed here after the approval of your design.
                            This is dummy text. This text is for display purposes only. Actual text will be placed here after the approval of your design.
                         </Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
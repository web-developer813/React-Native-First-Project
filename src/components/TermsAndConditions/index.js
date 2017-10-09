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

import Styles from './styles';

export default class TermsAndConditions extends Component {
     constructor(props) {
        super(props);
     }
    render(){
        return(
            <View style={{flex: 1}}>
                <View style={{backgroundColor : Styles.THEME_COLOR.boxColor}}>
                   <Text style={Styles.customHeader}>Terms and Conditions</Text>
                   <TouchableHighlight style={Styles.imgTopLeft} activeOpacity={0.6} underlayColor={'rgba(255,255,255,0.1)'}
                     onPress={()=>
                       this.props.navigator.pop()
                     }>
                     <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/backIcon@2x.png')} style={{width:10,height:20}}/>
                    </TouchableHighlight>
                </View>
                <ScrollView style={Styles.fullContainer}>
                    <View style={Styles.titleInputWrapper}>
                        <Text style={Styles.textTitle}>1. YOUR AGREEMENT</Text>
                        <Text style={Styles.textBody}>
                            By using this App, you agree to be bound by, and to comply with, these Terms and Conditions.
                            If you do not agree to these Terms and Conditions, please do not use this site
                        </Text>
                        <Text style={Styles.textBody}>
                            PLEASE NOTE: We reserve the right, at our sole discretion, to change, modify or otherwise alter these
                            Terms and Conditions at any time, Unless otherwise indicated, amendments will become effective immediately.breakPlease review these Terms and Conditions periodically.
                            Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised
                            Terms and Conditions and the reasonableness of these standards for notice of changes.
                            For your information, this page was last updated as of the date at the top of these terms and conditions.
                        </Text>
                         <Text style={Styles.textTitle}>2. PRIVACY</Text>
                         <Text style={Styles.textBody}>
                            Please review our Privacy Policy, which also governs your visit to this Site, to understand our practices.
                         </Text>
                         <Text style={Styles.textTitle}>3. LINKED SITES</Text>
                         <Text style={Styles.textBody}>
                            This Site may contain links to other independent third party Web sites("Linked Sites"). These Linked Sites
                            are provided solely as a convenience to our visitors. Such Linked Sites are not under our control, and we are
                            not responsible for and does not endorse the content of such Linked Sites, including any information or materials
                            contained on such Linked Sites. You will need to make your own independent judgment regarding your interaction with these Linked Sites.
                         </Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
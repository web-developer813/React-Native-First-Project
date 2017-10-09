import React, {
  Component
} from 'react';

import PropTypes from 'prop-types';

import { AppRegistry, Navigator } from 'react-native';

import {
  View,
  Text,
  TextInput,
  ScrollView,
  Keyboard,
  Image,
  TouchableHighlight,
  Dimensions
} from 'react-native';

import Button from '../../common/Button';

import Styles from './styles';

export default class RefundPopup extends Component {
    constructor(props) {
       super(props);
       this.refund = this.refund.bind(this);
       this.cancel = this.cancel.bind(this);
    }
    refund = () => {
    }

    cancel = () => {
        this.props.navigator.dismissModal({
          animationType: 'slide-down'
        });
    }
    render(){
        return(
           <View style = {{flex: 1}}>
               <View style={Styles.disputeButtonPosition}>
                    <Button
                       buttonStyle={Styles.themeBtn}
                       onPress={this.refund}
                       text="Refund"
                     />
                </View>
                <View style={Styles.buttonPosition}>
                    <Button
                       buttonStyle={Styles.cancelBtn}
                       onPress={this.cancel}
                       text="Cancel"
                     />
                </View>
            </View>
        );
    }
}

AppRegistry.registerComponent('RefundPopup', () => DisputePopup);



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
  ScrollView,
  Keyboard,
  Image,
  TouchableHighlight,
  Dimensions
} from 'react-native';

import Button from '../../common/Button';
import Separator from '../../common/Separator';
import WheelSelector from '../../common/WheelSelector';
import LocationSelector from '../../common/LocationSelector';
import QuantitySelector from '../../common/QuantitySelector';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import IconSimpleLine from 'react-native-vector-icons/SimpleLineIcons';

import IconFontAwesome from 'react-native-vector-icons/FontAwesome';


import Styles from './styles';

const windowWidth = Dimensions.get('window').width;

const windowHeight = Dimensions.get('window').height;

export default class NewInvoiceListScreen extends Component {
   constructor(props) {
      super(props);
      this.goToNextPage = this.goToNextPage.bind(this);
   }
   goToNextPage(invoiceNumber,userType){
        const viewType = "unpaid";
        this.props.navigator.push({
             screen: 'global.InvoiceView',
             title: 'Review Invoice',
              passProps: {
                  invoiceNumber,
                  userType,
                  viewType
                },
             navigatorStyle: {
               ...Styles.navigatorStyle,
               tabBarHidden: true,
             },
           });
   }

    render() {
        return(
            <View style={{flex:1}}>
                <ScrollView style={Styles.fullContainer}>
                    <TouchableHighlight onPress = {() => this.goToNextPage('INV-001' , 'seller')}>
                        <View style={[Styles.borderTop,Styles.marginTop20]}>
                            <View style={Styles.inputGroup}>
                                <Text style={Styles.fontBold}><IconFontAwesome name='arrow-left' size={15}/>  INV-001</Text>
                                <Text style={[Styles.fontBold, Styles.textAlignRight]}>$400.00</Text>
                            </View>
                             <View style={Styles.inputGroup}>
                                <Text style={Styles.subListWidth}>Shutter Edge Photogra...</Text>
                                <Text style={[Styles.subListTextWidth, Styles.textAlignRight]}>09 Sep 2016</Text>
                            </View>
                             <View style={Styles.inputGroup}>
                                <Text style={[Styles.countWidth,{color: Styles.THEME_COLOR.lightGrey}]}>Weekend Starter training class...</Text>
                                <Text style={[Styles.countTextWidth, Styles.textAlignRight, {color: Styles.THEME_COLOR.lightGrey}]}>x2</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight  onPress = {() => this.goToNextPage('INV-002','buyer')}>
                        <View style={[Styles.borderTop,Styles.borderBottom]}>
                            <View style={Styles.inputGroup}>
                                <Text style={Styles.fontBold}><IconFontAwesome name='arrow-right' size={15}/>  INV-002</Text>
                                <Text style={[Styles.fontBold, Styles.textAlignRight]}>$200.00</Text>
                            </View>
                             <View style={Styles.inputGroup}>
                                <Text style={Styles.subListWidth}>Shutter Edge Photogra...</Text>
                                <Text style={[Styles.subListTextWidth, Styles.textAlignRight]}>09 Sep 2016</Text>
                            </View>
                             <View style={Styles.inputGroup}>
                                <Text style={[Styles.countWidth,{color: Styles.THEME_COLOR.lightGrey}]}>Weekend Starter training class...</Text>
                                <Text style={[Styles.countTextWidth, Styles.textAlignRight, {color: Styles.THEME_COLOR.lightGrey}]}>x2</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <View style={Styles.inputGroup}>
                        <TouchableHighlight>
                            <Text style={{flex:1,paddingTop: 20, paddingBottom:20,textAlign:'center', alignItems : 'center', width:windowWidth}}>More...</Text>
                        </TouchableHighlight>
                    </View>

                </ScrollView>
            </View>
        );
    };
}
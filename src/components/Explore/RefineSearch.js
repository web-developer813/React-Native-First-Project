import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  Slider,
  TouchableHighlight
} from 'react-native';

import LocationSelector from '../../common/LocationSelector';
import Button from '../../common/Button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from './styles';
import CommonStyle from '../../common/CommonStyle';

export default class ExploreRefineSearch extends Component {
  constructor(props) {
    super(props);
    this.state={
        budget: 2000
    };

  }
  location = {
   currentAddress: "North Melbourne",
   latitude :  37.7992,
   longitude : 144.9467
  };
  renderLocationPicker() {
      const { currentAddress } = this.location;
      const text = currentAddress || 'Please choose a address';
      return (
        <View style={Styles.inputGroupLocation}>
          <LocationSelector
            style={Styles.locationSelector}
            onPress={this.goLocationPickerView}
            text={text}
          />
        </View>
      );
  }
  getVal(val){
  }
  render(){
    return(
        <View style={{flex:1}}>
            <ScrollView style={Styles.fullContainer}>
                <View style={{marginTop: 24, justifyContent: 'center', alignItems:'center'}}>
                    <Text style={Styles.textPositionAbsoluteLocation}>Location</Text>
                </View>
                <View style={Styles.borderTopContainer}>
                    <View style = {[Styles.titleInputWrapper,{paddingTop: 24}]}>
                        {this.renderLocationPicker()}
                    </View>
                </View>
                <View style={{marginTop: 24, justifyContent: 'center', alignItems:'center'}}>
                    <Text style={Styles.textPositionAbsoluteBudget}>Budget Range</Text>
                </View>
                <View style={Styles.borderTopContainer}>
                    <View style = {[Styles.titleInputWrapper,{paddingTop: 24}]}>
                       <Text style={{textAlign: 'center', fontSize: 16, paddingBottom: 10}}>2k-5k</Text>
                       <Slider
                            style={{ width: 300 , marginLeft: (Dimensions.get('window').width-300)/2 -10}}
                            step={1}
                            minimumTrackTintColor= {CommonStyle.THEME_COLOR.orangeText}
                            thumbTintColor={CommonStyle.THEME_COLOR.lightGrey}
                            minimumValue={2000}
                            maximumValue={5000}
                            value={this.state.budget}
                            onValueChange={val => this.setState({ budget: val })}
                            onSlidingComplete={ val => this.getVal(val)}
                           />
                    </View>
                </View>
                <View style={{marginTop: 24, justifyContent: 'center', alignItems:'center'}}>
                    <Text style={Styles.textPositionAbsoluteCategories}>Categories</Text>
                </View>
                <View style={Styles.borderTopContainer}>
                    <View style = {[Styles.titleInputWrapper,Styles.buttonWrapper,{paddingTop: 24}]}>
                        <Text style={Styles.buttonsShow}>Pet Care</Text>
                        <Text style={Styles.buttonsShow}>Family and Kids</Text>
                    </View>
                    <View style = {[Styles.titleInputWrapper,{paddingTop: 24}]}>
                        <Text numberOfLines={1} style={Styles.text}> <Icon name="magnify" color={Styles.THEME_COLOR.boxGrey} size={20} /> Change Categories</Text>
                    </View>
                </View>
                <View style={{marginTop: 24, justifyContent: 'center', alignItems:'center'}}>
                    <Text style={Styles.textPositionAbsoluteKeywords}>Keywords</Text>
                </View>
                <View style={Styles.borderTopContainer}>
                     <View style = {[Styles.titleInputWrapper,Styles.buttonWrapper,{paddingTop: 24}]}>
                        <Text style={Styles.keywordsText}><Icon name="close" size={15}/> pet Behaviors</Text>
                        <Text style={Styles.keywordsText}><Icon name="close" size={15}/> Veterinary</Text>
                        <Text style={Styles.keywordsText}><Icon name="close" size={15}/> Veterinarian</Text>
                        <Text style={Styles.keywordsText}><Icon name="close" size={15}/> Vet</Text>
                     </View>
                     <View style = {[Styles.titleInputWrapper,{paddingTop: 24, marginBottom:20}]}>
                       <Text numberOfLines={1} style={Styles.text}> <Icon name="plus-circle-outline" color={Styles.THEME_COLOR.orangeText} size={20}/> Add Keywords </Text>
                     </View>
                </View>
                <View style={Styles.borderTopContainer}>
                     <View style = {[Styles.titleInputWrapper,Styles.labelWrapper,{paddingTop: 24, marginBottom:100}]}>
                         <TouchableHighlight>
                            <Text style={{fontSize: 18, color:CommonStyle.THEME_COLOR.orangeText}}>Clear All</Text>
                         </TouchableHighlight>
                         <TouchableHighlight>
                            <Text style={{fontSize: 18, color:CommonStyle.THEME_COLOR.orangeText}}>Apply</Text>
                         </TouchableHighlight>
                     </View>
                </View>
            </ScrollView>
        </View>
    );
  }
}
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

import Separator from '../../common/Separator';

import WheelSelector from '../../common/WheelSelector';

import InfiniteWheelSelector from '../../common/InfiniteWheelSelector';

import Button from '../../common/Button';

import TextArea from '../../common/TextArea';

import Styles from './styles';

export default class AddTime extends Component {
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
         const days = new Array();
         for(let  i = 1; i <= 31; i ++){
             days.push(i);
         }
         this.state = {
            month : 'January',
            day : '1',
            nextButtonAvailable: true,
            days : days,
            time: '00:00am',
            description : ''
         }

         this.goPreviousStep = this.goPreviousStep.bind(this);
         this._keyboardDidShow = this._keyboardDidShow.bind(this);
         this._keyboardDidHide = this._keyboardDidHide.bind(this);
     }
    monthChange = (month) => {
        this.setState(() => ({
          month
        }));
        const days = new Array();
        if( month== 'January' || month == 'March' || month =='May' || month== 'July' || month== 'August' || month == 'October' || month == 'December')
        {
            for(let  i = 1; i <= 31; i ++){
                days.push(i);
            }
        }else if(month == 'April' || month=='June' || month== 'September' || month== 'November') {
            for(let  i = 1; i <= 30; i ++){
                days.push(i);
            }
        }else{
            for(let  i = 1; i <= 28; i ++){
                days.push(i);
            }
         }
         this.setState({
            days : days
         });
      }
    dayChange = (day) => {
          this.setState(() => ({
            day
          }));
      }
    timeChange = (time) =>{
        this.setState(() => ({
            time
        }));
    }
    goPreviousStep = () => {
        this.props.navigator.pop();
    }
    render(){
        const { description } = this.state;
        let length = 0;
        if (description) {
             length = description.length;
        }
        return (
        <View style={{ flex: 1 }}>
             <View style={{backgroundColor : Styles.THEME_COLOR.boxColor}}>
                  <Text style={Styles.customHeader}>Set Date</Text>
                  <TouchableHighlight style={Styles.imgTopLeft} activeOpacity={0.6} underlayColor={'rgba(255,255,255,0.1)'}
                    onPress={()=>
                        this.props.navigator.pop()
                      }>
                      <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/backIcon@2x.png')} style={{width:10,height:20}}/>
                  </TouchableHighlight>
                </View>
             <ScrollView style={Styles.fullContainer}>
                <View style={Styles.header}>
                    <Text style={{textAlign: 'center'}}>Month</Text>
                </View>
                <WheelSelector
                    selectors={[
                      'January','February','March','April','May','June', 'July','August','September','October','November', 'December'
                    ]}
                    onSelectChange={this.monthChange}
                />
                <View style={[Styles.header, Styles.borderTop]}>
                    <Text style={{textAlign: 'center'}}>Day</Text>
                </View>
                <InfiniteWheelSelector
                    options={this.state.days}
                    displayNumber={9}
                    onSelectChange={this.dayChange}
                />
                 <View style={[Styles.header, Styles.borderTop]}>
                    <Text style={{textAlign: 'center'}}>Time</Text>
                </View>
                <WheelSelector
                    selectors={[
                      '00:00am','00:30am','1:00am','1:30am','2:00am','2:30am', '3:00am','3:30am','4:00am','4:30am','5:00am', '5:30am','6:00am','6:30am','7:00am','7:30am','8:00am','8:30am', '9:00am','9:30am','10:00am','10:30am','11:00am', '11:30am',
                      '00:00pm','00:30pm','1:00pm','1:30pm','2:00pm','2:30pm', '3:00pm','3:30pm','4:00pm','4:30pm','5:00pm', '5:30pm','6:00pm','6:30pm','7:00pm','7:30pm','8:00pm','8:30pm', '9:00pm','9:30pm','10:00pm','10:30pm','11:00pm', '11:30pm'
                    ]}
                    onSelectChange={this.timeChange}
                />
                <View style={[Styles.descriptionInputWrapper , Styles.lastItem]}>
                    <View style={Styles.labelWrapper}>
                      <Text style={Styles.label}>Description</Text>
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
                        description: text
                      })}
                      value={this.state.description}
                    />
                  </View>
            </ScrollView>
            <View style={Styles.buttonPosition}>
                {
                    this.state.nextButtonAvailable
                    ?
                      <Button
                       buttonStyle={Styles.themeBtn}
                       onPress={this.goPreviousStep}
                       text="Add Time"
                      />
                    :
                      null
                }
            </View>

        </View>
        );
     }
}
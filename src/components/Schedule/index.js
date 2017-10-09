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

} from 'react-native';

import PropTypes from 'prop-types';

import Button from '../../common/Button';


import Styles from './styles';


export default class Schedule extends Component {

     static propTypes = {
        month : PropTypes.number,
        day : PropTypes.number,
        time : PropTypes.string
     }
     static defaultProps = {
        month : null ,
        day : null,
        time : null
     }
     times = [
             {date: 'Tuesday, 7 March 2017', description : 'One hour section week one starter intro this week.', time: '6:30pm'},
             {date: 'Tuesday, 14 March 2017', description : 'One hour section week one starter intro this week.', time: '6:30pm'}
     ];
    constructor(props) {
        super(props);
         this.state = {
           subject : '',
           dates : '',
           nextButtonAvailable: true,
           times: this.times
         };
         this._keyboardDidShow = this._keyboardDidShow.bind(this);
         this._keyboardDidHide = this._keyboardDidHide.bind(this);
         this.goToAddTime = this.goToAddTime.bind(this);
         this.goNextStep = this.goNextStep.bind(this);
         this.goToEditTime = this.goToEditTime.bind(this);
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

    goNextStep = () => {
        this.props.navigator.push({
           screen : 'global.ScheduleView',
           title : 'View Schedule',
           passProps : {
                subject : this.state.subject,
                times : this.state.times
           },
           navigatorStyle : {
              ...Styles.navigatorStyle,
              tabBarHidden : true,
              navBarHidden: true
           },
        });
    }
    goToEditTime(i){
         let date = this.state.times[i].date;
         let description = this.state.times[i].description;
         let time = this.state.times[i].time;
         let dateList = date.split(",");
         let dateListArray = dateList[1].split(" ");
         let day =dateListArray[1];
         let month =dateListArray[2];
        this.props.navigator.push({
            screen: 'global.ScheduleEditTime',
            title: 'Set Date',
            passProps : {
               month : month,
               day : day ,
               time : time,
               description: description
            },
            navigatorStyle: {
              ...Styles.navigatorStyle,
              tabBarHidden: true,
              navBarHidden: true
            },
        });
    }
    goToAddTime = () => {
        this.props.navigator.push({
          screen: 'global.ScheduleAddTime',
          title: 'Set Date',
          navigatorStyle: {
            ...Styles.navigatorStyle,
            tabBarHidden: true,
            navBarHidden: true
          },
        });
    }
    clear = () => {

    }

    renderTimes = () =>{
        const times = this.state.times;
        return  times.map((timeItem, i) =>{
            return(
                <View style={[Styles.labelWrapper, Styles.paddingBottom20]} key={i}>
                    <TouchableHighlight onPress = {() => this.goToEditTime(i)}>
                        <View style={Styles.timeDescription}>
                            <Text style={Styles.date}>{timeItem.date}</Text>
                            <Text numberOfLines={1} style={{color:Styles.THEME_COLOR.lightGrey}}>
                                {timeItem.description}
                            </Text>
                        </View>
                    </TouchableHighlight>
                    <View>
                        <Text style={Styles.time}> {timeItem.time} </Text>
                    </View>
                </View>
            );
        });
    }
    trashButton = () =>{
        alert('trash');
    }
    render(){
        const { subject } = this.state;
        let subject_length = 0;
        if (subject) {
          subject_length = subject.length;
        }
        const { dates } = this.state;
        let date_length = 0;
        if (dates) {
          date_length = dates.length;
        }
        return(
            <View style={{ flex: 1 }}>
                <View style={{backgroundColor : Styles.THEME_COLOR.boxColor}}>
                  <Text style={Styles.customHeader}>Create New Schedule</Text>
                  <TouchableHighlight style={Styles.imgTopLeft} activeOpacity={0.6} underlayColor={'rgba(255,255,255,0.1)'}
                    onPress={()=>
                        this.props.navigator.pop()
                      }>
                      <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/backIcon@2x.png')} style={{width:10,height:20}}/>
                  </TouchableHighlight>
                  <TouchableHighlight style={Styles.TextTopRight} onPress={()=>this.clear}>
                    <View>
                        <Text style={{color:Styles.THEME_COLOR.orange, fontSize: 15}}>Clear</Text>
                    </View>
                  </TouchableHighlight>
                </View>
                <ScrollView style={Styles.fullContainer}>
                    <View style={Styles.titleInputWrapper}>
                        <View style={Styles.labelWrapper}>
                          <Text style={Styles.label}>Title</Text>
                          <Text style={Styles.label}>{subject_length}/99 characters</Text>
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
                          placeholder="e.g. One have service session | AEST"
                        />
                    </View>
                    <View style={Styles.titleInputWrapper}>
                        <View style={[Styles.labelWrapper, Styles.paddingBottom20]}>
                            <Text style={Styles.label}>Dates</Text>
                            <Text style={Styles.label}>{date_length}/99 entries</Text>
                        </View>
                        {this.renderTimes()}
                    </View>
                     <TouchableHighlight onPress={this.goToAddTime}>
                        <View style={[Styles.labelWrapper, Styles.paddingVertical10, Styles.backgroundGray]}>
                            <Text style={{fontSize:16}}>Add Date</Text>
                            <Image source={require('../../common/Images/forward-gray.png')} style={Styles.stretch} />
                        </View>
                     </TouchableHighlight>
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
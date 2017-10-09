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


import Styles from './styles';

export default class ScheduleViewScreen extends Component {
    static propTypes = {
        subject : PropTypes.string,
        times :  PropTypes.array
    }

    static defaultProps = {
        subject : null,
        time : null
    }
     constructor(props) {
        super(props);
        this.state= {
             nextButtonAvailable: true
        };
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
        this.postNow = this.postNow.bind(this);
     }

     onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
         if (event.type === 'NavBarButtonPress' && event.id === 'back') { // this is the event type for button presses
           this.props.navigator.pop();
         }
     }

     postNow = () => {

     }
    renderTimes = () =>{
        const times = this.props.times;
        return  times.map((timeItem, i) =>{
            return(
                <View style={[Styles.labelWrapper, Styles.paddingBottom20]} key={i}>
                    <View style={Styles.timeViewDescription}>
                        <Text style={Styles.date}>{timeItem.date}</Text>
                        <Text numberOfLines={1} style={{color:Styles.THEME_COLOR.lightGrey}}>
                            {timeItem.description}
                        </Text>
                    </View>
                    <View>
                        <Text style={Styles.time}> {timeItem.time} </Text>
                    </View>
                    <View>
                        <Image source={require('../../common/Images/timer_gray.png')} style={Styles.stretch} />
                    </View>
                </View>
            );
        });
    }
     render(){
        return(
           <View style={{ flex: 1 }}>
                <View style={{backgroundColor : Styles.THEME_COLOR.boxColor}}>
                  <Text style={Styles.customHeader}>View Schedule</Text>
                  <TouchableHighlight style={Styles.imgTopLeft} activeOpacity={0.6} underlayColor={'rgba(255,255,255,0.1)'}
                    onPress={()=>
                        this.props.navigator.pop()
                      }>
                      <Image resizeMode={Image.resizeMode.stretch} source={require('../../common/Images/backIcon@2x.png')} style={{width:10,height:20}}/>
                  </TouchableHighlight>
                </View>
               <ScrollView style={[Styles.fullContainer, Styles.lastItem]}>
                    <View style={Styles.viewScheduleTitleWrapper}>
                        <Text style={Styles.viewScheduleTitle}>{this.props.subject}</Text>
                    </View>
                    <View style={Styles.titleInputWrapper}>
                     {this.renderTimes()}
                    </View>
               </ScrollView>
                <View style={Styles.buttonPosition}>
                    {
                        this.state.nextButtonAvailable
                        ?
                          <Button
                           buttonStyle={Styles.themeBtn}
                           onPress={this.postNow}
                           text="Post Now"
                          />
                        :
                          null
                    }
                </View>
            </View>
        );
     }
}
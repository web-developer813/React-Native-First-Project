import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';

import Styles from './styles';
import CommonStyle from '../../common/CommonStyle';

export default class Explore extends Component {
  constructor(props) {
    super(props);
     this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }
  onNavigatorEvent(event) {
      if (event.id === 'exploreFilter') {
            this.props.navigator.push({
                  screen: 'global.ExploreRefineSearchView',
                  title: 'Refine Search',
                  navigatorStyle: {
                    ...Styles.navigatorStyle,
                    tabBarHidden: true
                  },
            });
      }
  }
  render() {
    return (
      <View >
        <ScrollView>
            <View style={[Styles.titleInputWrapper, {marginTop :10,paddingBottom : 15}]}>
                <View style={Styles.labelWrapper}>
                    <View>
                       <Image style={Styles.taskThreadImageView} source={require('./img/avatar1.png')} />
                    </View>
                     <View style={Styles.taskBoardWidth}>
                        <View>
                            <Text style={[CommonStyle.mediumTitleText,{fontSize:16,fontWeight:'bold'}]} numberOfLines = {2}>
                            <Text style={{color: Styles.THEME_COLOR.lightRedButton,fontStyle: 'italic'}}>@you</Text> Looking for a photography assistant my result rest.</Text>
                        </View>
                     </View>
                     <View style={Styles.myTaskTimeContainer}>
                        <Text style={[CommonStyle.boldOrangeText,{fontSize : 16}]}>$250-750</Text>
                     </View>
                 </View>
                <View style={Styles.labelWrapper}>
                    <View style={Styles.taskBoardWidth, {marginLeft: 44}}>
                        <Text>West Walala | By Weekend | <Image source={require('../../common/Images/raise_left_hand_gray.png')} style={{width:30, height:35}}/> *2</Text>
                    </View>
                    <View style={Styles.myTaskTimeContainer}>
                        <Text style={{fontSize :12}}>11:59AM</Text>
                     </View>
                </View>
                <View style={Styles.labelWrapper}>
                    <View style={Styles.taskBoardWidth,  {marginLeft: 44}}>
                        <View style={Styles.imageContainer}>
                            <Image source={require('./img/avatar1.png')} style={Styles.circleImageView}/>
                            <Image source={require('./img/avatar2.png')} style={Styles.circleImageView}/>
                            <Image source={require('./img/avatar3.png')} style={Styles.circleImageView}/>
                            <Image source={require('./img/avatar4.png')} style={Styles.circleImageView}/>
                            </View>
                    </View>
                    <View style={Styles.myTaskTimeContainer}>
                        <Text style={{fontSize :12}}>20 Offers</Text>
                     </View>
                 </View>
            </View>

            <View style={Styles.borderTopContainer}>
               <View style={[Styles.titleInputWrapper, {marginTop :10}]}>
                  <View style={Styles.labelWrapper}>
                      <View>
                         <Image style={Styles.taskThreadImageView} source={require('./img/avatar4.png')} />
                      </View>
                       <View style={Styles.taskBoardWidth}>
                          <View>
                              <Text style={[CommonStyle.mediumTitleText,{fontSize:16,fontWeight:'bold'}]} numberOfLines = {2}>
                                Take my dog to school for a month until everything is a fantastic
                              </Text>
                          </View>
                       </View>
                       <View style={Styles.myTaskTimeContainer}>
                          <Text style={[CommonStyle.boldOrangeText,{fontSize : 16}]}>$5K-8K</Text>
                       </View>
                   </View>
                    <View style={Styles.labelWrapper}>
                       <View style={Styles.taskBoardWidth, {marginLeft: 44}}>
                           <Text>West Walala | By Weekend | <Image source={require('../../common/Images/raise_left_hand_gray.png')} style={{width:30, height:35}}/> *2</Text>
                       </View>
                       <View style={Styles.myTaskTimeContainer}>
                           <Text style={{fontSize :12}}>11:59AM</Text>
                        </View>
                   </View>
                   <View style={Styles.labelWrapper}>
                       <View style={Styles.taskBoardWidth,  {marginLeft: 44}}>
                           <View style={Styles.imageContainer}>
                               <Image source={require('./img/avatar1.png')} style={Styles.circleImageView}/>
                               <Image source={require('./img/avatar4.png')} style={Styles.circleImageView}/>
                           </View>
                       </View>
                       <View style={Styles.myTaskTimeContainer}>
                           <Text style={{fontSize :12}}>2 Offers</Text>
                        </View>
                    </View>
               </View>
            </View>
        </ScrollView>
      </View>
    );
  }
}

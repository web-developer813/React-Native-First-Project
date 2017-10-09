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

import IconSimpleLine from 'react-native-vector-icons/SimpleLineIcons';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import Rating from '../../common/Rating';

const windowWidth = Dimensions.get('window').width;

export default class TaskDetail extends Component {
    constructor(props) {
       super(props);
    }
    render(){
       return(
            <View>
                <ScrollView>
                    <View style={Styles.titleInputWrapper}>
                        <View style={Styles.detailWrapper}>
                            <Text numberOfLines={1} style={[CommonStyle.titleGrey,{fontSize:18}]}> Need help with my  dog behaviour screen </Text>
                        </View>
                        <View style={Styles.detailWrapper}>
                            <View style={Styles.calendarWrapper}>
                                <IconSimpleLine name="calendar" size={20} style={Styles.contentBody} />
                                <Text style={Styles.contentBody}> 29 January 2017</Text>
                            </View>
                            <View style={Styles.calendarWrapper} >
                                <IconSimpleLine name="location-pin" size={20} style={Styles.contentBody} />
                                <Text style={Styles.locationPathBody} numberOfLines = {1}> North Melbourne </Text>
                            </View>
                        </View>
                    </View>
                    <View style={Styles.borderTopContainer}>
                        <View style={[Styles.titleInputWrapper, Styles.labelWrapper,Styles.paddingTopChange]}>
                            <View style={Styles.myTaskContainer}>
                                <Text style={{fontWeight:'bold', fontSize: 16}}>Offering List (56)</Text>
                                <Text style={{fontWeight:'bold', fontSize: 16, paddingTop:20}}>Accept List</Text>
                            </View>
                            <View style={{width: 20}}>
                                <Text style={[Styles.redPoint, Styles.changeRedPoint]}></Text>
                                <IconFontAwesome name="bell-slash-o" size ={20}/>
                            </View>
                            <View style={{width:20}}>
                                <Text style={[Styles.myTaskContent,{marginTop: 5,justifyContent:'flex-end'}]}> 3</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={{fontSize: 16 , position:'absolute', top:-11, left :13, zIndex:100, width :50, backgroundColor: 'white'}}>Design</Text>
                    </View>
                    <View style={Styles.borderTopContainer}>
                        <View style={[Styles.titleInputWrapper, Styles.labelWrapper,Styles.paddingTopChange]}>
                             <View style={{marginTop :10}}>
                                 <Image style={Styles.taskThreadImageView} source={require('./img/avatar1.png')} />
                             </View>
                             <View style={Styles.taskThreadWidth}>
                                   <Text numberOfLines={1} style={[CommonStyle.mediumTitleText,{fontSize:16, fontWeight: 'bold'}]}>Aeirth Gainsburrough</Text>
                                   <Text style={{paddingTop:10}}>Hi Maryln Wedge I want to make your offer </Text>
                                   <View style={[Styles.labelWrapper, Styles.taskThreadContainer]}>
                                    <View style={{width :70}}>
                                    <Rating
                                       total={5}
                                       rating={5}
                                       size={18}
                                       color={Styles.THEME_COLOR.color}
                                     />
                                     </View>
                                     <View style={{marginLeft: 10}}>
                                        <Text style={Styles.ratingText}>106 | 83%</Text>
                                     </View>
                                   </View>
                             </View>
                             <View style={Styles.myTaskTimeContainer}>
                                  <Text style={Styles.myTaskTime}>11:59AM</Text>
                                  <Text style={Styles.myTaskContent}> 3</Text>
                             </View>
                        </View>
                    </View>
                    <View style={Styles.borderTopContainer}>
                        <View style={[Styles.titleInputWrapper, Styles.labelWrapper,Styles.paddingTopChange]}>
                            <View style={{marginTop :10}}>
                                 <Image style={Styles.taskThreadImageView} source={require('./img/avatar2.png')} />
                             </View>
                             <View style={Styles.taskThreadWidth}>
                                   <Text numberOfLines={1} style={[CommonStyle.mediumTitleText,{fontSize:16, fontWeight: 'bold'}]}>Zidane Tribel</Text>
                                   <Text style={{paddingTop:10}}>Hi I can get this done for you.</Text>
                                   <View style={[Styles.labelWrapper, Styles.taskThreadContainer]}>
                                    <View style={{width :70}}>
                                    <Rating
                                       total={5}
                                       rating={4}
                                       size={18}
                                       color={Styles.THEME_COLOR.color}
                                     />
                                     </View>
                                     <View style={{marginLeft: 10}}>
                                        <Text style={Styles.ratingText}>1.2k | 83%</Text>
                                     </View>
                                   </View>
                             </View>
                             <View style={Styles.myTaskTimeContainer}>
                                  <Text style={Styles.myTaskTime}>Yesterday</Text>
                                  <View>
                                    <Text style={Styles.myTaskContent}> 3</Text>
                                    <Icon name='alert' style={Styles.iconAlert} size= {15}/>
                                  </View>
                             </View>
                        </View>
                    </View>
                    <View>
                        <Text style={{fontSize: 16 , position:'absolute', top:-11, left :13, zIndex:100, width :78, backgroundColor: 'white'}}>Marketing</Text>
                    </View>
                    <View style={Styles.borderTopContainer}>
                        <View style={[Styles.titleInputWrapper, Styles.labelWrapper,Styles.paddingTopChange]}>
                             <View style={{marginTop :10}}>
                                 <Image style={Styles.taskThreadImageView} source={require('./img/avatar4.png')} />
                             </View>
                             <View style={Styles.taskThreadWidth}>
                                   <Text numberOfLines={1} style={[CommonStyle.mediumTitleText,{fontSize:16, fontWeight: 'bold'}]}>Selphie  Timitt</Text>
                                   <Text style={{paddingTop:10}}>Hi lets get this done .I can offer </Text>
                                   <View style={[Styles.labelWrapper, Styles.taskThreadContainer]}>
                                    <View style={{width :70}}>
                                    <Rating
                                       total={5}
                                       rating={3}
                                       size={18}
                                       color={Styles.THEME_COLOR.color}
                                     />
                                     </View>
                                     <View style={{marginLeft: 10}}>
                                        <Text style={Styles.ratingText}>5  | 83%</Text>
                                     </View>
                                   </View>
                             </View>
                             <View style={Styles.myTaskTimeContainer}>
                                  <Text style={Styles.myTaskTime}>11:59AM</Text>
                                  <Text style={{marginTop: 10}}>  <Icon name='alert' style={Styles.iconAlert} size= {20}/></Text>
                             </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
       );
    }
}

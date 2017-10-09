import React, { Component } from 'react';

import PropTypes from 'prop-types';

import {
  View,
  Image,
  Text
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconSimpleLine from 'react-native-vector-icons/SimpleLineIcons';

import Styles from './styles';

const CustomerPostRow = ({ name, locationPath, budget, avatar, subject, style, timeframe,takeOffer }) => {
  const uri = avatar || 'default_avatar';
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let month = monthNames[currentDate.getMonth()];
  let day = currentDate.getDay();
   if(takeOffer) {
     budgetContent = 'Take Offer';
   }else {
      if(budget== ""){
        budgetContent = '';
      }else{
        budgetContent = '$' + budget;
      }

   }
   return (
   <View>
      <View style={Styles.postWrapperWithHeight}>
         <View style={[Styles.contentWrapper, Styles.border ]}>
            <View style={Styles.detailWrapper}>
                <View style={Styles.avatarWrapper}>
                    <Image
                      defaultSource={{ uri: 'default_avatar' }}
                      source={{ uri, width: 30, height: 30, cache: 'reload' }}
                      style={Styles.customerAvatar}
                    />
                </View>
                <View style={Styles.contentWrapper}>
                    <Text  style={Styles.title} numberOfLines={1} >
                      { name }
                    </Text>
                </View>
            </View>
            <View style={Styles.detailWrapper}>
                <View style={Styles.calendarWrapper}>
                    <IconSimpleLine name="calendar" size={20} style={Styles.contentBody} />
                    <Text style={Styles.contentBody}> { day } { month } { year }</Text>
                </View>
                <View style={Styles.calendarWrapper} >
                    <IconSimpleLine name="location-pin" size={20} style={Styles.contentBody} />
                    <Text style={Styles.locationPathBody}> { locationPath } </Text>
                </View>
            </View>
        </View>
      </View>
      <View style={Styles.postWrapperWithHeight}>
         <View style={Styles.budgetWrapper}>
            <View style={Styles.budgetContent}>
               <Text style={Styles.budgetHeader}> Budget : </Text>
               <Text style={Styles.budgetText}>
                    { budgetContent }
                </Text>
            </View>
         </View>
      </View>
   </View>
   );

};

CustomerPostRow.propTypes = {
  name: PropTypes.string,
  locationPath: PropTypes.string,
  budget: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  avatar: PropTypes.string,
  subject: PropTypes.string,
  timeframe: PropTypes.string,
  style: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object
  ])
};

CustomerPostRow.defaultProps = {
  name: null,
  locationPath: null,
  budget: null,
  avatar: null,
  subject: null,
  timeframe: null,
  style: null
};


export default CustomerPostRow;
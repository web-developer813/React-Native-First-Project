import React from 'react';

import PropTypes from 'prop-types';

import {
  View,
  Image,
  Text
} from 'react-native';

import Styles from './styles';

const CustomerTaskRow = ({ name, locationPath, budget, avatar, subject, style, timeframe }) => {
  const uri = avatar || 'default_avatar';

  return (
    <View style={[Styles.taskWrapperWithHeight, style]}>
      <View style={Styles.contentWrapper}>
        <View style={Styles.detailWrapper}>
          <View style={Styles.avatarWrapper}>
            <Image
              defaultSource={{ uri: 'default_avatar' }}
              source={{ uri, width: 40, height: 40, cache: 'reload' }}
              style={Styles.customerAvatar}
            />
          </View>
          <View style={Styles.contentWrapper}>
            <Text
              style={Styles.title}
              numberOfLines={1}
            >
              { name }
            </Text>
            <Text
              numberOfLines={1}
              style={[Styles.content, Styles.locationPath]}
            >
              {locationPath}
            </Text>
          </View>
          <Text numberOfLines={1} style={Styles.budget}>${budget}</Text>
        </View>
        <View style={Styles.detailWrapperWithHeight}>
          <Text
            numberOfLines={3}
            style={Styles.title}
          >
            {subject}
            <Text style={Styles.timeframe}> | {timeframe}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

CustomerTaskRow.propTypes = {
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

CustomerTaskRow.defaultProps = {
  name: null,
  locationPath: null,
  budget: null,
  avatar: null,
  subject: null,
  timeframe: null,
  style: null
};

export default CustomerTaskRow;

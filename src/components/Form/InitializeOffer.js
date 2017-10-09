/* @flow */
import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';

import {
  View,
  Text,
  ScrollView
} from 'react-native';

import Button from '../../common/Button';

import CustomerTaskRow from '../CustomerTaskRow';
import { DefaultNavLeftButton } from '../../common/NavigationButton';

import Styles from './styles';

const InitializeOffer = ({ selectedTask, canMakeOffer, navigator }) => {
  navigator.setOnNavigatorEvent((event) => {
    if (event.type === 'NavBarButtonPress' && event.id === 'back') {
      navigator.pop();
    }
  });

  const { locationPath, budget, subject, timeframe, publisherProfile } = selectedTask;
  const { avatar: { uri } } = publisherProfile;
  const { nickname } = publisherProfile;

  return (
    <View style={Styles.fullContainer}>
      <CustomerTaskRow
        name={nickname}
        avatar={uri}
        locationPath={locationPath}
        budget={budget}
        subject={subject}
        timeframe={timeframe}
      />
      <ScrollView style={Styles.taskBodyWrapper}>
        <Text style={Styles.taskBody}>{selectedTask.body}</Text>
      </ScrollView>
      <View style={Styles.buttonWrapper}>
        {
          canMakeOffer
          &&
          <Button
            buttonStyle={Styles.themeBtn}
            onPress={() => navigator.push({
              screen: 'global.OfferFormStep1',
              passProps: {
                selectedTask
              },
              title: 'Create New Offer',
              navigatorStyle: {
                navBarHidden: false,
                tabBarHidden: true
              },
              navigatorButtons: {
                leftButtons: [DefaultNavLeftButton]
              }
            })}
            text="Make Offer"
          />
        }
      </View>
    </View>
  );
};

InitializeOffer.propTypes = {
  selectedTask: PropTypes.object.isRequired,
  navigator: PropTypes.object.isRequired,
  canMakeOffer: PropTypes.bool.isRequired
};

export default InitializeOffer;

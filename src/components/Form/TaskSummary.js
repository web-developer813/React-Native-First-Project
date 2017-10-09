import React, {
  PureComponent
} from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';

import {
  Alert,
  View,
  Text,
  ScrollView
} from 'react-native';

import Loading from '../../common/Loading';
import Button from '../../common/Button';

import CustomerTaskRow from '../CustomerTaskRow';

import Styles from './styles';

export default class TaskSummary extends PureComponent {
  static propTypes = {
    publishTask: PropTypes.func,
    onTimeout: PropTypes.func,
    navigator: PropTypes.object.isRequired,
    authenticate: PropTypes.object,
    locationPath: PropTypes.string,
    location: PropTypes.shape({
      longitude: PropTypes.number,
      latitude: PropTypes.number
    }),
    budget: PropTypes.string,
    timeframe: PropTypes.string,
    updateInitialTab: PropTypes.func,
    account: PropTypes.shape({
      payload: PropTypes.shape({
        sub: PropTypes.string,
        avatar_uri_default: PropTypes.string
      })
    }),
    task: PropTypes.shape({
      currentTask: PropTypes.object,
      isFetching: PropTypes.bool,
      failed: PropTypes.bool
    })

  }

  static defaultProps = {
    publishTask: null,
    onTimeout: null,
    authenticate: null,
    locationPath: null,
    location: {
      longitude: null,
      latitude: null
    },
    budget: '0',
    timeframe: null,
    updateInitialTab: () => {},
    account: {
      payload: {
        sub: null,
        avatar_uri_default: null
      }
    },
    task: {
      currentTask: null,
      isFetching: false,
      failed: false
    }
  }

  constructor(props) {
    super(props);

    const { currentTask } = this.props.task;

    this.state = {
      ...currentTask.toJS(),
      loadingVisible: this.props.task.isFetching
    };

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  componentWillReceiveProps(nextProps) {
    const { isFetching, failed } = nextProps.task;
    const loadingVisible = isFetching && !failed;
    if (loadingVisible !== this.state.loadingVisible) {
      this.setState(() => ({
        loadingVisible
      }));
    }
  }

  onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
    if (event.type === 'NavBarButtonPress' && event.id === 'back') { // this is the event type for button presses
      this.props.navigator.pop();
    }
  }

  popUpSuccessWindow = () => {
    this.props.updateInitialTab(2);
    /* eslint-disable no-undef */
    Alert.alert(
      'Success',
      'Your task has been published!',
      [
        {
          text: 'OK',
          onPress: () => {
            this.props.navigator.dismissAllModals({
              animationType: 'none'
            });

            this.props.navigator.popToRoot({
              animated: true
            });
          }
        },
      ],
      { cancelable: false }
    );
  }

  postTask = () => {
    const { account, authenticate, locationPath, budget, timeframe, location } = this.props;
    const { subject, body } = this.state;
    const { sub } = account.payload;
    const { accessToken } = authenticate.payload;
    if (sub && accessToken) {
      this.props.publishTask({
        userKey: sub,
        accessToken,
        location,
        subject,
        body,
        locationPath,
        timeframe,
        budget
      });
    } else {
      this.props.navigator.showModal({
        screen: 'global.LoginHome', // unique ID registered with Navigation.registerScreen
        navigatorStyle: {
          ...Styles.navigatorStyle,
          navBarHidden: true
        },
        animationType: 'slide-up'
      });
    }
  }

  render() {
    const { subject, body, loadingVisible } = this.state;
    const { failed } = this.props.task;
    return (
      <View style={Styles.fullContainer}>
        <CustomerTaskRow
          name="Jing tai"
          avatar={this.props.account.payload.avatar_uri_default}
          locationPath={this.props.locationPath}
          budget={this.props.budget}
          subject={subject}
          timeframe={this.props.timeframe}
        />
        <ScrollView style={Styles.taskBodyWrapper}>
          <Text style={Styles.taskBody}>{body}</Text>
        </ScrollView>
        <View style={Styles.buttonWrapper}>
          <Button
            buttonStyle={Styles.themeBtn}
            onPress={this.postTask}
            text="Post Now"
          />
        </View>
        <Loading
          visible={loadingVisible}
          beforeClose={() => { if (!failed) this.popUpSuccessWindow(); }}
          onTimeout={() => this.props.onTimeout()}
        />
      </View>
    );
  }
}

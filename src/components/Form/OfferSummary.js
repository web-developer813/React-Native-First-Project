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
import Styles from './styles';

export default class OfferSummary extends PureComponent {
  static propTypes = {
    publishOffer: PropTypes.func,
    onTimeout: PropTypes.func,
    navigator: PropTypes.object.isRequired,
    authenticate: PropTypes.object,

    unit: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,

    account: PropTypes.shape({
      palyload: PropTypes.shape({
        sub: PropTypes.string
      })
    }),
    offer: PropTypes.shape({
      currentOffer: PropTypes.object,
      isFetching: PropTypes.bool,
      failed: PropTypes.bool
    })

  }

  static defaultProps = {
    publishOffer: null,
    onTimeout: null,
    authenticate: null,

    unit: '',
    price: '',
    quantity: 0,

    updateInitialTab: () => {},
    account: {
      palyload: {
        sub: null
      }
    },
    offer: {
      currentOffer: null,
      isFetching: false,
      failed: false
    }
  }

  constructor(props) {
    super(props);

    const { currentOffer } = this.props.offer;

    this.state = {
      ...currentOffer.toJS(),
      loadingVisible: this.props.offer.isFetching
    };
    console.log(this.state);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  componentWillReceiveProps(nextProps) {
    const { isFetching, failed } = nextProps.offer;
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
    /* eslint-disable no-undef */
    Alert.alert(
      'Success',
      'Your offer has been published!',
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

  postOffer = () => {
    const { account, authenticate, unit, quantity, price } = this.props;
    const { body, userThreadKey } = this.state;

    this.props.publishOffer({
      userKey: account.payload.sub,
      accessToken: authenticate.payload.accessToken,
      consumerTaskKey: userThreadKey,
      unit,
      price,
      quantity,
      body
    });
  }

  render() {
    const { body, loadingVisible } = this.state;
    const { unit, quantity, price } = this.props;

    const { failed } = this.props.offer;
    const total = (parseFloat(price) * quantity).toFixed(2);
    return (
      <View style={Styles.fullContainer}>
        <ScrollView style={Styles.taskBodyWrapper}>
          <Text style={Styles.taskBody}>{body}</Text>
        </ScrollView>

        <View style={Styles.inputGroup}>
          <Text>x{quantity}</Text>
          <Text style={Styles.budget}>${price}/<Text style={Styles.unit}>{unit}</Text></Text>
        </View>
        <View style={[Styles.inputGroup, Styles.withBorderTop]}>
          <Text>(Inc. Tax) Total</Text><Text style={Styles.budget}>${total}</Text>
        </View>
        <View style={Styles.buttonWrapper}>
          <Button
            buttonStyle={Styles.themeBtn}
            onPress={this.postOffer}
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

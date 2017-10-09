import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import PropTypes from 'prop-types';

import { MenuContext } from 'react-native-popup-menu';

import PopMenu from '../common/PopMenu'; // after import, popMenu is a react component

import COMMON_STYLE from '../common/CommonStyle';

const { THEME_COLOR, navigatorStyle } = COMMON_STYLE;


export default class ThirdViewContainer extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.goSection = this.goSection.bind(this);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.id === 'gear') {
      this.popMenu.toggleMenu('menu1');
    }
  }

  goSection(screenName) {
    if (screenName === 'SecondSelect') {
      this.props.navigator.push({
        screen: 'global.SecondSection',
        title: 'Create New Post',
        navigatorStyle: {
          ...navigatorStyle,
          tabBarHidden: true
        },
      });
    } else if (screenName === 'ThirdSelect') {
      this.props.navigator.push({
        screen: 'global.OfferSection',
        title: 'Prepare Offer',
        navigatorStyle: {
          ...navigatorStyle,
          tabBarHidden: true
        },
      });
    }else if (screenName === 'FourthSelect') {
       this.props.navigator.push({
         screen: 'global.ScheduleSection',
         title: 'Create New Schedule',
         navigatorStyle: {
           ...navigatorStyle,
           tabBarHidden: true,
           navBarHidden:true
         },
       });
     }
    else if (screenName === 'FifthSelect') {
       this.props.navigator.push({
         screen: 'global.InvoiceSection',
         title: 'Create New Invoice',
         navigatorStyle: {
           ...navigatorStyle,
           tabBarHidden: true
         },
       });
    }else if (screenName === 'SixthSelect') {
       this.props.navigator.push({
          screen: 'global.InvoiceListView',
          title: 'Transaction List',
          navigatorStyle: {
            ...navigatorStyle,
            tabBarHidden: true
          },
       });
    }else if (screenName === 'EighthSelect') {
       this.props.navigator.push({
          screen: 'global.ResetPassword',
          title: 'Reset Password',
          navigatorStyle: {
              ...navigatorStyle,
              tabBarHidden: true,
              navBarHidden : true,
          },
       });
    }else if (screenName === 'NinthSelect') {
        this.props.navigator.push({
           screen: 'global.TermsAndConditions',
           title: 'Terms and Conditions',
           navigatorStyle: {
               ...navigatorStyle,
               tabBarHidden: true,
               navBarHidden : true,
           },
        });
    }else if (screenName === 'TenthSelect') {
        this.props.navigator.push({
           screen: 'global.PrivacyPolicy',
           title: 'Privacy Policy',
           navigatorStyle: {
               ...navigatorStyle,
               tabBarHidden: true,
               navBarHidden : true,
           },
        });
    }else if (screenName === 'EleventhSelect') {
         this.props.navigator.push({
            screen: 'global.PrivacyPolicy',
            title: 'Privacy Policy',
            navigatorStyle: {
                ...navigatorStyle,
                tabBarHidden: true,
                navBarHidden : true,
            },
         });
    }else if (screenName === 'TwelfthSelect') {
          this.props.navigator.push({
             screen: 'global.ProviderListResult',
             title: 'Photography',
             navigatorStyle: {
                 ...navigatorStyle,
                 tabBarHidden: true,
                 navBarHidden : true,
             },
          });
    }else if (screenName === 'ReportProblem') {
          this.props.navigator.push({
             screen: 'global.ReportProblemView',
             title: 'Customer Service',
             navigatorStyle: {
                 ...navigatorStyle,
                 tabBarHidden: true,
             },
          });
        }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MenuContext ref={ref => (this.popMenu = ref)} >
          <PopMenu onFirstSelect={this.goSection} />
          <Text>Hello World this view number 3</Text>
        </MenuContext>
      </View>
    );
  }
}

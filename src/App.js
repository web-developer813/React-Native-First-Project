import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import registerScreens from './screens';
// import { iconsMap, iconsLoaded } from './util/AppIcons';
import configStore from './store/configStore';
import COMMON_STYLE from './common/CommonStyle';

registerScreens(configStore(), Provider);

const { THEME_COLOR, navigatorStyle } = COMMON_STYLE;

export default class App {
  static startApp() {
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: 'Explore',
          screen: 'global.ExploreView',
          title: 'Task Board',
          icon: require('./common/Images/compass_gray.png'),
          selectedIcon: require('./common/Images/compass_active.png'),
          navigatorStyle: {
            ...navigatorStyle,
            tabBarHidden: false
          },
          navigatorButtons: {
              rightButtons: [
                {
                  icon: require('./common/Images/tune.png'), // for icon button, provide the local image asset name
                  id: 'exploreFilter' // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
                },
                {
                  icon: require('./common/Images/search.png'), // for icon button, provide the local image asset name
                  id: 'exploreSearch' // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
                }
              ]
            }
        },
        {
          label: 'Quotes',
          screen: 'global.QuoteView',
          icon: require('./common/Images/providers_gray.png'),
          selectedIcon: require('./common/Images/providers_active.png'),
          navigatorStyle: {
            ...navigatorStyle,
            navBarHidden: true,
            tabBarHidden: false
          }
        },
        {
          label: 'Tasks',
          screen: 'global.TaskView',
          icon: require('./common/Images/list_gray.png'),
          selectedIcon: require('./common/Images/list_active.png'),
          navigatorStyle: {
            ...navigatorStyle,
            navBarHidden: true,
            tabBarHidden: false
          }
        },
        {
          label: 'InBox',
          title: 'Inbox',
          screen: 'global.InboxView',
          icon: require('./common/Images/envelop_gray.png'),
          selectedIcon: require('./common/Images/envelop_active.png'),
          navigatorStyle,
          navigatorButtons: {
            rightButtons: [
              {
                icon: require('./common/Images/search.png'), // for icon button, provide the local image asset name
                id: 'search' // id for this button, given in onNavigatorEvent(event) to help understand which button was clicked
              }
            ]
          }
        },
        {
          label: 'Profile',
          title: 'Profile',
          screen: 'global.ThirdView',
          icon: require('./common/Images/profile_gray.png'),
          selectedIcon: require('./common/Images/profile_active.png'),
          navigatorStyle,
          navigatorButtons: {
            rightButtons: [
              {
                icon: require('./common/Images/settings_gray.png'),
                id: 'gear'
              }
            ]
          }
        }
      ],
      tabsStyle: {
        tabBarTextFontFamily: 'Avenir-Medium',
        tabBarSelectedButtonColor: THEME_COLOR.color,
        tabBarBackgroundColor: '#fff'
      },
      appStyle: {
        tabBarBackgroundColor: '#fff',
        tabBarButtonColor: THEME_COLOR.lightGrey,
        navBarTextFontSize: 34,
        forceTitlesDisplay: true,
        tabFontFamily: 'Avenir-Medium',
        tabBarSelectedButtonColor: THEME_COLOR.color,
      },
    });
  }
}

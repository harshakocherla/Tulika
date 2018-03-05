import { TabNavigator } from 'react-navigation';

import { Platform } from 'react-native';

import TabOneNavigation from '../navigation/TabOneNavigation';
import TabTwoNavigation from '../navigation/TabTwoNavigation';
import TabThreeNavigation from '../navigation/TabThreeNavigation';
import NewsNavigation from '../navigation/NewsNavigation';

const routeConfiguration = {
  TabOneNavigation: {
    screen: TabOneNavigation,
  },
  TabTwoNavigation: {
    screen: TabTwoNavigation,
  },
  TabThreeNavigation: {
    screen: TabThreeNavigation,
  },
  NewsNavigation: {
    screen: NewsNavigation,
  },
};

const tabBarConfiguration = {
  tabBarOptions: {
    // tint color is passed to text and icons (if enabled) on the tab bar
    activeTintColor: Platform.OS === 'android' ? 'white' : '#00b0eb',
    inactiveTintColor: '#646464',
    // background color is for the tab component
    // activeBackgroundColor: '#646464',
    // inactiveBackgroundColor: 'white',
  },
};

export const TabBar = TabNavigator(routeConfiguration, tabBarConfiguration);

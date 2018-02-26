import { TabNavigator } from 'react-navigation';

import TabOneNavigation from '../navigation/TabOneNavigation';
import TabTwoNavigation from '../navigation/TabTwoNavigation';
import TabThreeNavigation from '../navigation/TabThreeNavigation';

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
};

const tabBarConfiguration = {
  tabBarOptions: {
    // tint color is passed to text and icons (if enabled) on the tab bar
    activeTintColor: 'white',
    inactiveTintColor: 'blue',
    // background color is for the tab component
    activeBackgroundColor: 'blue',
    inactiveBackgroundColor: 'white',
  },
};

export const TabBar = TabNavigator(routeConfiguration, tabBarConfiguration);

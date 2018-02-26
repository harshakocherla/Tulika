import { StackNavigator } from 'react-navigation';

// Screens
import TabTwoScreenOne from '../screens/TabTwoScreenOne';
import TabTwoScreenTwo from '../screens/TabTwoScreenTwo';

const routeConfiguration = {
  TabTwoScreenOne: {
    screen: TabTwoScreenOne,
  },
  TabTwoScreenTwo: {
    screen: TabTwoScreenTwo,
  },
};

// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'TabTwoScreenOne',
};
export const NavigatorTabTwo = StackNavigator(
  routeConfiguration,
  stackNavigatorConfiguration,
);

import { StackNavigator } from 'react-navigation';

// Screens
import TabOneScreenOne from '../screens/TabOneScreenOne';
import TabOneScreenTwo from '../screens/TabOneScreenTwo';

const routeConfiguration = {
  TabOneScreenOne: {
    screen: TabOneScreenOne,
  },
  TabOneScreenTwo: {
    screen: TabOneScreenTwo,
  },
};

// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'TabOneScreenOne',
};
export const NavigatorTabOne = StackNavigator(
  routeConfiguration,
  stackNavigatorConfiguration,
);

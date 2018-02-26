import { StackNavigator } from 'react-navigation';

// Screens
import TabThreeScreenOne from '../screens/TabThreeScreenOne';
import TabThreeScreenTwo from '../screens/TabThreeScreenTwo';

const routeConfiguration = {
  TabThreeScreenOne: {
    screen: TabThreeScreenOne,
  },
  TabThreeScreenTwo: {
    screen: TabThreeScreenTwo,
  },
};

// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'TabThreeScreenOne',
};
export const NavigatorTabThree = StackNavigator(
  routeConfiguration,
  stackNavigatorConfiguration,
);

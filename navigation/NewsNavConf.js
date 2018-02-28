import { StackNavigator } from 'react-navigation';

// Screens
import News from '../screens/News';

const routeConfiguration = {
  News: {
    screen: News,
  },
};

// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
};
export const NavigatorNews = StackNavigator(
  routeConfiguration,
  stackNavigatorConfiguration,
);

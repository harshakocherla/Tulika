import { StackNavigator } from 'react-navigation';

// Screens
import News from '../screens/News';
import NewsItem from '../screens/NewsItem';

const routeConfiguration = {
  News: {
    screen: News,
  },
  NewsItem: {
    screen: NewsItem,
  },
};

// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'News',
};
export const NavigatorNews = StackNavigator(
  routeConfiguration,
  stackNavigatorConfiguration,
);

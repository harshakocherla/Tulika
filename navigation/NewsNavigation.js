// React
import React from 'react';

// Navigation
import { addNavigationHelpers } from 'react-navigation';
import { NavigatorNews } from './NewsNavConf';

// Redux
import { connect } from 'react-redux';

// Icon
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import { Entypo } from '@expo/vector-icons';

const mapStateToProps = state => {
  return {
    navigationState: state.news,
  };
};

class NewsNavigation extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'News',
    tabBarIcon: ({ tintColor }) => (
      <Entypo name="news" size={20} color={tintColor} />
    ),
  };
  render() {
    const { navigationState, dispatch, addListner } = this.props;
    return (
      <NavigatorNews
        navigation={addNavigationHelpers({
          dispatch: dispatch,
          state: navigationState,
          addListner,
        })}
      />
    );
  }
}
export default connect(mapStateToProps)(NewsNavigation);

// React
import React from 'react';

// Navigation
import { addNavigationHelpers } from 'react-navigation';
import { NavigatorTabOne } from './TabOneNavConf';

// Redux
import { connect } from 'react-redux';

// Icon
import Icon from 'react-native-vector-icons/FontAwesome';

const mapStateToProps = state => {
  return {
    navigationState: state.tabOne,
  };
};

class TabOneNavigation extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Tab One',
    tabBarIcon: ({ tintColor }) => (
      <Icon size={20} name={'home'} color={tintColor} />
    ),
  };
  render() {
    const { navigationState, dispatch, addListner } = this.props;
    return (
      <NavigatorTabOne
        navigation={addNavigationHelpers({
          dispatch: dispatch,
          state: navigationState,
          addListner,
        })}
      />
    );
  }
}
export default connect(mapStateToProps)(TabOneNavigation);

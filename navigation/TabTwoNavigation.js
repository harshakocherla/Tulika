// React
import React from 'react';

// Navigation
import { addNavigationHelpers } from 'react-navigation';
import { NavigatorTabTwo } from './TabTwoNavConf';

// Redux
import { connect } from 'react-redux';

// Icon
import { Entypo } from '@expo/vector-icons';

const mapStateToProps = state => {
  return {
    navigationState: state.tabTwo,
  };
};

class TabTwoNavigation extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Tab Two',
    tabBarIcon: ({ tintColor }) => (
      <Entypo name="circle" size={20} color={tintColor} />
    ),
  };
  render() {
    const { navigationState, dispatch, addListner } = this.props;
    return (
      <NavigatorTabTwo
        navigation={addNavigationHelpers({
          dispatch: dispatch,
          state: navigationState,
          addListner,
        })}
      />
    );
  }
}
export default connect(mapStateToProps)(TabTwoNavigation);

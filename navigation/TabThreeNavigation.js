// React
import React from 'react';

// Navigation
import { addNavigationHelpers } from 'react-navigation';
import { NavigatorTabThree } from './TabThreeNavConf';

// Redux
import { connect } from 'react-redux';

// Icon
import { Entypo } from '@expo/vector-icons';

const mapStateToProps = state => {
  return {
    navigationState: state.tabThree,
  };
};

class TabThreeNavigation extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Cart',
    tabBarIcon: ({ tintColor }) => (
      <Entypo size={20} name={'shopping-cart'} color={tintColor} />
    ),
  };
  render() {
    const { navigationState, dispatch, addListner } = this.props;
    return (
      <NavigatorTabThree
        navigation={addNavigationHelpers({
          dispatch: dispatch,
          state: navigationState,
          addListner,
        })}
      />
    );
  }
}
export default connect(mapStateToProps)(TabThreeNavigation);

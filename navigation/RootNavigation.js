import React, { Component } from 'react';
import { View, Text } from 'react-native';

// Navigation
import { addNavigationHelpers } from 'react-navigation';
import { TabBar } from './RootNavConf';

//Redux
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    navigationState: state.tabBar,
  };
};

class RootNavigation extends Component {
  render() {
    const { navigationState, dispatch, addListener } = this.props;
    return (
      <TabBar
        navigation={addNavigationHelpers({
          dispatch: dispatch,
          state: navigationState,
          addListener,
        })}
      />
    );
  }
}

export default connect(mapStateToProps)(RootNavigation);

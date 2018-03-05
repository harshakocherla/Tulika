import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';

import store from './reducers/store';

import RootNavigation from './navigation/RootNavigation';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto_medium: require('./assets/fonts/Roboto-Medium.ttf'),
      dinalternate: require('./assets/fonts/DINMittelschriftStd.otf'),
    });

    this.setState({ isLoading: false });
  }

  render() {
    if (this.state.isLoading) {
      return <Expo.AppLoading />;
    } else {
      return (
        <Provider store={store}>
          <RootNavigation />
        </Provider>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

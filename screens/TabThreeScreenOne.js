import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class TabThreeScreenOne extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'red',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>{'Tab Three Screen One'}</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('TabThreeScreenTwo')}
          style={{
            padding: 20,
            borderRadius: 20,
            backgroundColor: 'yellow',
            marginTop: 20,
          }}
        >
          <Text>{'Check out'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

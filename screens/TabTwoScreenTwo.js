import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class TabTwoScreenTwo extends Component {
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
        <Text>{'Tab Two Screen Two'}</Text>
      </View>
    );
  }
}

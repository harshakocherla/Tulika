import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class News extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#f0f0f0',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>{'Read Art News'}</Text>
      </View>
    );
  }
}

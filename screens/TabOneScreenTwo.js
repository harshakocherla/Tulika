import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class TabOneScreenTwo extends Component {
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
        <Text>{'Tab One Screen Two'}</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={{
            padding: 20,
            borderRadius: 20,
            backgroundColor: 'purple',
            marginTop: 20,
          }}
        >
          <Text>{'Go back a screen'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

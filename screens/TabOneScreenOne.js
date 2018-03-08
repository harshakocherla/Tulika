import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class TabOneScreenOne extends Component {
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
        <Text
          style={{
            fontFamily: 'dinalternate_bold',
            // fontWeight: '600',
            fontSize: 20,
          }}
        >
          {'Tab One Screenl One'}
        </Text>
        <Text
          style={{
            fontFamily: 'dinalternate_regular',
            // fontWeight: '400',
            fontSize: 20,
          }}
        >
          {'Tab One Screenl One'}
        </Text>
        <Text style={{ fontFamily: 'dinalternate', fontSize: 20 }}>
          {'Tab One Screenl One'}
        </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('TabOneScreenTwo')}
          style={{
            padding: 20,
            borderRadius: 20,
            backgroundColor: 'yellow',
            marginTop: 20,
          }}
        >
          <Text style={{ fontFamily: 'dinalternate' }}>
            {'Go to next screen this tab'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

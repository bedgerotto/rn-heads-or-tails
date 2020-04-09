import React, { Component } from 'react';
import { Text } from 'react-native';

export default class AboutGame extends Component {
  render() {
    return (
      <Text style={{ flex: 1, backgroundColor: '#61BD8C' }}>
        Texto sobre o jogo atual
      </Text>
    );
  }
}

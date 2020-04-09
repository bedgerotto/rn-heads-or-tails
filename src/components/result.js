import React, { Component } from 'react';
import {
  Image,
  View,
  StyleSheet
} from 'react-native';

const tail = require('../imgs/moeda_coroa.png');
const head = require('../imgs/moeda_cara.png');

export default class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {
      winner: Math.floor(Math.random() * 2)
    };
  }
  render() {
    if (this.state.winner === 1) {
      return (
        <View style={styles.main}>
          <Image source={tail} />
        </View>
      );
    }
    return (
      <View style={styles.main}>
        <Image source={head} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#61BD8C',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight
} from 'react-native';

import { Actions } from 'react-native-router-flux'

const appLogo = require('../imgs/logo.png');
const playButton = require('../imgs/botao_jogar.png');
const aboutButton = require('../imgs/sobre_jogo.png');
const otherButton = require('../imgs/outros_jogos.png');

export default class Main extends Component {
  render() {
    return (
      <View style={styles.mainScene}>
        <View style={styles.content}>
          <Image source={appLogo} />
          <TouchableHighlight
            onPress={() => { Actions.result(); }}
          >
          <Image source={playButton} />
          </TouchableHighlight>
        </View>
        <View style={styles.footer}>
          <TouchableHighlight
            onPress={() => { Actions.aboutGame(); }}
          >
            <Image source={aboutButton} />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => { Actions.otherGames(); }}
          >
            <Image source={otherButton} />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainScene: {
    flex: 1,
    backgroundColor: '#61BD8C'
  },
  content: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

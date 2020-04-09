import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Main from './components/main';
import AboutGame from './components/about_game';
import OtherGames from './components/other_games';
import Result from './components/result';

const Routes = () => (
  <Router sceneStyle={{ paddingTop: 50 }}>
    <Scene key='main' component={Main} initial title='Cara ou Coroa' />
    <Scene key='aboutGame' component={AboutGame} title='Sobre o Jogo' />
    <Scene key='otherGames' component={OtherGames} title='Otros jogos' />
    <Scene key='result' component={Result} title='Resultado' />
  </Router>
);

export default Routes;

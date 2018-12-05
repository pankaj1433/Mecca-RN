import React from 'react';

import AppEntry from './src/index';

import Home from './src/view/app/Home.screen';
export default class App extends React.Component {
  render() {
    console.disableYellowBox = true;
    return (
      // <Home/>
        <AppEntry/>
    );
  }
}


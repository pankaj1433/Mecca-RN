import React from 'react';
import { Provider } from 'react-redux';

import AppEntry from './src/index';
import Store from './src/store/index';

import Home from './src/view/app/Home.screen';
export default class App extends React.Component {
  render() {
    console.disableYellowBox = true;
    let store = Store;
    return (
      <Provider store = {store}>
        <AppEntry/>
      </Provider>
    );
  }
}


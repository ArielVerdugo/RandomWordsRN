/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {RootNavigator} from '.';
import {Provider} from 'react-redux';
import {Store} from './src/redux/Store';

function App(): JSX.Element {
  return (
    <Provider store={Store}>
      <RootNavigator />
    </Provider>
  );
}

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import AppNavigator from './src/components/organisms/Navigation';
import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor } from './src/store/index';
import {Provider} from 'react-redux';
import rootReducer from './src/reducers/index';
import { createStore } from "redux";

const store = createStore(rootReducer)


export default class App extends Component{
  render() {
    return (
      <Provider store ={store}>

      <AppNavigator/>  
      </Provider>
      
      
    );
  }
}


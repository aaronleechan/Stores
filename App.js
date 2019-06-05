import React,{useReducer} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {MainNavigator} from './src/MainNavigator';
import { createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers'

const AppContainer = createAppContainer(MainNavigator);

const store = createStore(reducers,applyMiddleware(ReduxThunk))

const App = (props) =>{
  return(
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  )
}

module.exports = App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


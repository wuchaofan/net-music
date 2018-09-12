import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MainPage from './pages/Main';
import {Provider} from 'mobx-react'
import store from './pages/store'
export default class App extends Component {
  render () {
    return (
      <Provider rootStore={store}>

        <MainPage
          
          onNavigationStateChange={(prevState, currentState) => {
            console.log (prevState);
            console.log (currentState);
          }}
        />
      </Provider>
    );
  }

  componentDidMount = () => {
    console.disableYellowBox = true; //去除黄色弹框警告
  };
}
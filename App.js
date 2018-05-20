import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
//import Component1 from './android/application/component/Component1'
import Component1 from './app/Component1';
import Component2 from './app/Component2';
import Component3 from './app/Component3';

export default class MyApp extends Component {

  render() {
    return (
      <View>
        <Component1 welcome='hello' />
        <Component2 />
        <Component3 />
      </View>
    );
  }
}

AppRegistry.registerComponent('MyApp', () => MyApp);
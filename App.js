import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LoginScreen from './Screens/LoginScreen.js';
import { TabNavigator } from './components/TabNavigator.js';
import { createAppContainer , createSwitchNavigator } from 'react-navigation';

export default class App extends React.Component{
  render(){
    return(
      <View>
        
      </View>
    )
  }
}

const SwitchNavigator = createSwitchNavigator({
  Login:LoginScreen,
  Tab:TabNavigator,
})

const AppContainer = createAppContainer(SwitchNavigator)
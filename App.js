import React, { Component } from 'react';
import { Text, View } from 'react-native';
import AppContainer from './src/navigations/AppNavigation';
import HomeScreen from './src/screens/HomeScreen';
import CategoriesScreen from './src/screens/CategoriesScreen';
import {
  DrawerNavigator,
  StackNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import SplashScreen from './src/screens/SplashScreen';

export default class FoodApp extends React.Component {

  render() {
    return <AppContainer />;
  }
}



import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppContextProvider } from './src/AppContext';
import AppNavigator from './src/AppNavigator';
import ListNews from './src/ListNews';
import DangKy from './src/thi/DangKy';
import SanPham from './src/thi/SanPham';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();



const App =() => {
  return (
    <AppContextProvider>
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
  </AppContextProvider>


  );


};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

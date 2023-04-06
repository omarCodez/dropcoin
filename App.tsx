/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
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
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '@/screens/home';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const AppStack = createNativeStackNavigator();

{
  /* <SafeAreaView> */
}
{
  /* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */
}
{
  /* <ScrollView contentInsetAdjustmentBehavior="automatic"></ScrollView> */
}
{
  /* </SafeAreaView> */
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="HomeScreen" component={HomeScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Text, View, StyleSheet, StatusBar} from 'react-native';
import {DefaultTheme, PaperProvider} from 'react-native-paper';
import {LoginScreen} from './src/screens';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'deepskyblue',
  },
};

const App = () => {
  return (
      <SafeAreaView>
        <StatusBar barStyle="dark-content" backgroundColor="deepskyblue" />
        <View style={styles.container}>
          <LoginScreen />
        </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

export default App;

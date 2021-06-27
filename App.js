/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Text, View, StyleSheet, StatusBar} from 'react-native';
import {LoginScreen} from './src/screens';

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

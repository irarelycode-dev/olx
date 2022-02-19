import React from 'react';
import {SafeAreaView, StyleSheet, View, Button} from 'react-native';

export default function ButtonCus() {
  function handleButtonPress() {
    console.log('button pressed');
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Button
          title="Download"
          style={styles.button}
          onPress={handleButtonPress}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#00f',
    color: '#fff',
    width: 50,
  },
  container: {
    display: 'flex',
    borderWidth: 1,
    borderColor: 'black',
  },
});

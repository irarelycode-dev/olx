import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

const ActivityIndicatorCus = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#0000ff" />
      <ActivityIndicator size="small" color="#ae4fd5" />
      <ActivityIndicator color="red" />
      <ActivityIndicator size="large" color="blue" />
      <ActivityIndicator color="red" size={50} hidesWhenStopped={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  horizontal: {
    flexDirection: 'row',
    padding: 10,
  },
});

export default ActivityIndicatorCus;

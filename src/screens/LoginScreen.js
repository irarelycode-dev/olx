import React, { useState } from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

export default function LoginScreen() {
  const [email,setEmail]=useState('');
  return (
    <View>
      <View style={styles.box_one}>
        <Image source={require('../assets/2.jpg')} style={styles.image} />
        <Text style={styles.login_text}>Login To Continue</Text>
      </View>
      <View style={styles.form}>
        <TextInput
        label="Email"
        value={email}
        onChange={updatedEmail=>setEmail(updatedEmail)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box_one: {
    alignItems: 'center',
    height:100
  },
  image: {
    width: 100,
    height: 100,
  },
  form:{
    padding:'5px'
  },
  login_text:{
    textAlign:'center',
    fontSize:22,
    marginTop:20
  }
});

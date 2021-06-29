import React from 'react';
import {View, Text,Image ,KeyboardAvoidingView, StyleSheet} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

export default function SignupScreen() {
  const [email, setEail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSignupSubmit(){

  }

  return (
    <KeyboardAvoidingView>
      <View style={styles.box_one}>
        <Image
          source={require('../assets/2.jpg')}
          style={styles.image}
        />
      </View>
      <View><Text style={styles.login_text}>SignUp</Text></View>
      <View style={styles.form_element}>
        <View>
          <TextInput
            label="Email"
            value={email}
            onChangeText={updatedEmail => setEmail(updatedEmail)}
          />
        </View>
        <View>
          <TextInput
            label="Password"
            value={password}
            secureTextEntry={true}
            onChangeText={newPassword => setPassword(newPassword)}
          />
        </View>
        <View>
          <Button mode="contained" onPress={handleSignupSubmit}>
            SignUp
          </Button>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  box_one: {
    alignItems: 'center',
    height: 100,
  },
  image: {
    width: 100,
    height: 100,
  },
  form_element: {
    margin: 30,
    justifyContent: 'space-evenly',
  },
  login_text: {
    textAlign: 'center',
    fontSize: 22,
    marginTop: 20,
  },
});

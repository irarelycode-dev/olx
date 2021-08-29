import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import {TextInput, Button} from 'react-native-paper';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLoginSubmit() {}

  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={styles.box_one}>
        <Image source={require('../assets/2.jpg')} style={styles.image} />
      </View>
      <View>
        <Text style={styles.login_text}>Login To Continue</Text>
      </View>
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
          <Button mode="contained" onPress={handleLoginSubmit}>
            Login
          </Button>
          <TouchableOpacity
            onPress={() => navigation.navigate('signup')}
            style={{marginTop: 10}}>
            <Text style={{textAlign: 'center'}}>
              Don't have an account? Signup?
            </Text>
          </TouchableOpacity>
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
  login_text: {
    textAlign: 'center',
    fontSize: 22,
    marginTop: 20,
  },
});

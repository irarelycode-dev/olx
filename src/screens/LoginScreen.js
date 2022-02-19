import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLoginSubmit() {
    if (!email || !password) {
      return Alert.alert('please fill all the fields!');
    }
    try {
      const user = await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      Alert.alert(error);
    }
  }

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
        <View style={{marginTop: 10}}>
          <Button mode="contained" onPress={handleLoginSubmit}>
            Login
          </Button>
          <TouchableOpacity
            onPress={() => navigation.navigate('signup')}
            style={{marginTop: 10}}>
            <Text style={{textAlign: 'center'}}>
              Don't have an account?{' '}
              <Text style={styles.signup_text}>Signup?</Text>
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
    marginTop: 10,
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
  signup_text: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});

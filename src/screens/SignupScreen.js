import React from 'react';
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import auth from '@react-native-firebase/auth';

export default function SignupScreen({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  async function handleSignupSubmit() {
    if (!email || !password) {
      return Alert.alert('please fill all the fields!');
    }
    try {
      const result = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
    } catch (error) {
      Alert.alert(`${error.message}`);
    }
  }

  return (
    <KeyboardAvoidingView>
      <View style={styles.box_one}>
        <Image source={require('../assets/2.jpg')} style={styles.image} />
      </View>
      <View>
        <Text style={styles.signup_text}>SignUp</Text>
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
        <View style={{marginTop:10}}>
          <Button mode="contained" onPress={handleSignupSubmit}>
            SignUp
          </Button>
          <TouchableOpacity onPress={() => navigation.navigate('login')} style={{marginTop:10}}>
            <Text style={styles.login_text}>SignIn?</Text>
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
  signup_text: {
    textAlign: 'center',
    fontSize: 22,
    marginTop: 20,
  },
  login_text: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});

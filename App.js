/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, StatusBar, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import {
  LoginScreen,
  SignupScreen,
  CreateAdScreen,
  ListItemsScreen,
  AccountScreen,
} from './src/screens';
import auth from '@react-native-firebase/auth';

//custom components
// import StatusBarCus from './src/docs/StatusBarCus';
// import SwitchCus from './src/docs/SwitchCus';
// import ActivityIndicatorCus from './src/docs/ActivityIndicatorCus';
// import ButtonCus from './src/docs/ButtonCus';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'deepskyblue',
  },
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="login"
      component={LoginScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="signup"
      component={SignupScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({color}) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'Create') {
          iconName = 'plus-circle';
        } else {
          iconName = 'user';
        }
        return <Feather name={iconName} color={color} size={30} />;
      },
    })}>
    <Tab.Screen name="Home" component={ListItemsScreen} />
    <Tab.Screen name="Create" component={CreateAdScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tab.Navigator>
);

const Navigation = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser('');
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <NavigationContainer>
      {user ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

const App = () => {

  return (
    <PaperProvider theme={theme}>
      <StatusBar barStyle="dark-content" backgroundColor="deepskyblue" />
      <Navigation />
    </PaperProvider>
  );
};

export default App;

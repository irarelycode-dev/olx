import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  Platform,
  SafeAreaView,
  StatusBar,
} from 'react-native';

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

export default function StatusBarCus() {
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
  const [statusBarTransition, setStatusBarTransition] = useState(
    TRANSITIONS[0],
  );

  const changeStatusBarVisibility = () => setHidden(!hidden);
  const changeStatusBarStyle = () => {
    const styleId = STYLES.indexOf(statusBarStyle) + 1;
    if (styleId === STYLES.length) {
      setStatusBarStyle(STYLES[0]);
    } else {
      setStatusBarStyle(STYLES[styleId]);
    }
  };
  const changeStatusBarTransition = () => {
    const transitionId = TRANSITIONS.indexOf(statusBarTransition) + 1;
    if (transitionId === TRANSITIONS.length) {
      setStatusBarTransition(TRANSITIONS[0]);
    } else {
      setStatusBarTransition(TRANSITIONS[transitionId]);
    }
  };

  return (
    <SafeAreaView>
      <StatusBar
        animated={true}
        backgroundColor="pink" //set bg color to rgba(0,0,0,0.5) to test translucent property
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}
        translucent={false} // app will be drawn under the status bar. Useful for transparent status bar bg color
      />
      <Text>status bar visibility:{hidden ? 'Hidden' : 'Visible'}</Text>
      <Text>statusbar style:{statusBarStyle}</Text>
      {Platform.OS === 'ios' ? (
        <Text>statusbar transition:{statusBarTransition}</Text>
      ) : null}
      <View>
        <Button title="Toggle Status Bar" onPress={changeStatusBarVisibility} />
        <Button
          title="Change Status Bar Style"
          onPress={changeStatusBarStyle}
        />
        {Platform.OS === 'ios' ? (
          <Button
            title="change statusbar transition"
            onPress={changeStatusBarTransition}
          />
        ) : null}
      </View>
    </SafeAreaView>
  );
}

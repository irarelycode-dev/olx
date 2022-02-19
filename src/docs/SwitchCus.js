import React from 'react';
import {View, Switch, Text} from 'react-native';
import {isEnabled} from 'react-native/Libraries/Performance/Systrace';

const SwitchCus = () => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(prevState => !prevState);
  return (
    <View>
      <Switch
        trackColor={{false: 'red', true: 'green'}}
        thumbColor="white"
        value={isEnabled}
        onValueChange={toggleSwitch}
      />
    </View>
  );
};

export default SwitchCus;

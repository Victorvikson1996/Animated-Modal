import { View, Text } from 'react-native';
import React from 'react';

type ButtonProps = {
  onPress: void;
  title: string;
};

export const Button = () => {
  return (
    <View>
      <Text style={{ color: 'F6B17A' }}>Button</Text>
    </View>
  );
};

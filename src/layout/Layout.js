import React from 'react';
import { View, Text } from 'react-native';
import NavBar from './NavBar';

export default function Layout(props) {
  return (
    <View style={{flex:1}}>
      {/* <NavBar/> */}
      {props.children}
     </View>
  );
}

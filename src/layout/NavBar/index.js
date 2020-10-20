import React from 'react';
import {View, Text, Image} from 'react-native';
import tailwind from 'tailwind-rn';
import Images from '@config/Images';
export default function NavBar() {
  return (
    <View
      style={tailwind(
        'bg-white h-16 flex flex-row justify-start items-center',
      )}>
      <Image source={Images.logo} style={{height: 60, width: 50,resizeMode:"contain"}} />
      <Text style={tailwind('text-blue-800 font-bold text-lg ml-2')}>Accueil</Text>
    </View>
  );
}

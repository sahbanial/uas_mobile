import Images from '@config/Images';
import React from 'react';
import {View, Text, Image} from 'react-native';
import {Card} from 'react-native-paper';
import tailwind from 'tailwind-rn';

export default function Home() {
  return (
    <View style={tailwind('flex-1 bg-gray-100')}>
     {/* { <Image source={Images.uas} style={{height: 200, width: 350}} />} */}
     <View style={tailwind("h-40 bg-blue-400")}>
            <Text style={tailwind("text-white text-lg")}>UAS</Text>
     </View>
      <View style={tailwind('p-2')}>
        <Card style={tailwind('mt-3 p-2 -mt-16')}>
          <Text style={tailwind('font-bold text-base')}>Description</Text>
          <Text style={tailwind('text-sm text-justify')}>
            Nous vous souhaitons la plus cordiale bienvenue à l’Université Arabe
            Privée Des Sciences. Que vous soyez de retour pour poursuivre vos
            études ou que vous fréquentiez notre université pour la première
            fois, nous sommes convaincu que votre expérience sera des plus
            enrichissantes.
          </Text>
        </Card>
        <Card style={tailwind('mt-2 p-2')}>
          <Text>Email: contact@uas.ens.tn</Text>
        </Card>
        <View style={tailwind('flex flex-row flex-wrap')}>
          <Card style={tailwind('mt-2 p-2')}>
            <Text>Tel: +216 71 336 023</Text>
          </Card>
          <Card style={tailwind('mt-2 p-2 ml-1')}>
            <Text>Tel: +216 71 335 073</Text>
          </Card>
          <Card style={tailwind('mt-2 p-2')}>
            <Text>Fax: +216 71 334 897</Text>
          </Card>
        </View>
      </View>
    </View>
  );
}

import Images from '@config/Images';
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';
import tailwind from 'tailwind-rn';

const FooterTab = () => {
  return (
    <View style={tailwind('bg-blue-400 flex flex-row justify-between h-40')}>
      <View>
        <Text>Accueil</Text>
      </View>
      <View>
        <Text>Administration</Text>
      </View>
      <View>
        <Text>Organisme</Text>
      </View>
    </View>
  );
};
export default function Home() {
  return (
    <View style={tailwind('flex bg-white')}>
      <View style={tailwind('p-2')}>
        <View style={tailwind('mt-10')}>
          <Text style={tailwind('text-base font-bold')}>Annoncement</Text>
        </View>
        <Card style={tailwind('mt-3 p-2')}>
          <View style={tailwind('flex flex-row justify-around')}>
            <View style={tailwind('flex flex-col justify-center items-center')}>
              <Image
                source={Images.icons.news}
                resizeMode="contain"
                style={styles.icon}
              />
              <Text>News</Text>
            </View>
            <View style={tailwind('flex flex-col justify-center items-center')}>
              <Image
                source={Images.icons.event}
                resizeMode="contain"
                style={styles.icon}
              />
              <Text>Evenement</Text>
            </View>
            <View style={tailwind('flex flex-col justify-center items-center')}>
              <Image
                source={Images.icons.calendar}
                resizeMode="contain"
                style={styles.icon}
              />
              <Text>Calandrier</Text>
            </View>
          </View>
        </Card>
        <View style={tailwind('mt-10')}>
          <Text style={tailwind('text-base font-bold')}>Administration</Text>
        </View>
        <Card style={tailwind('mt-3 p-2')}>
          <View style={tailwind('flex flex-row justify-around')}>
            <View style={tailwind('flex flex-col justify-center items-center')}>
              <Image
                source={Images.icons.news}
                resizeMode="contain"
                style={styles.icon}
              />
              <Text>News</Text>
            </View>
            <View style={tailwind('flex flex-col justify-center items-center')}>
              <Image
                source={Images.icons.news}
                resizeMode="contain"
                style={styles.icon}
              />
              <Text>News</Text>
            </View>
            <View style={tailwind('flex flex-col justify-center items-center')}>
              <Image
                source={Images.icons.news}
                resizeMode="contain"
                style={styles.icon}
              />
              <Text>News</Text>
            </View>
          </View>
        </Card>
        <View style={tailwind('mt-10')}>
          <Text style={tailwind('text-base font-bold')}>Organisation</Text>
        </View>
        <Card style={tailwind('mt-3 p-2')}>
          <View style={tailwind('flex flex-row justify-around')}>
            <View style={tailwind('flex flex-col justify-center items-center')}>
              <Image
                source={Images.icons.help}
                resizeMode="contain"
                style={styles.icon}
              />
              <Text>Aide</Text>
            </View>
            <View style={tailwind('flex flex-col justify-center items-center')}>
              <Image
                source={Images.icons.pin}
                resizeMode="contain"
                style={styles.icon}
              />
              <Text>Map</Text>
            </View>
            <View style={tailwind('flex flex-col justify-center items-center')}>
              <Image
                source={Images.icons.contact}
                resizeMode="contain"
                style={styles.icon}
              />
              <Text>Contact</Text>
            </View>
          </View>
        </Card>
      </View>
      <FooterTab />
    </View>
  );
}
const styles = StyleSheet.create({
  icon: {
    tintColor: 'steelblue',
    height: 50,
    width: 50,
  },
});

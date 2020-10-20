import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import tailwind from 'tailwind-rn';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '@config/Colors';
import {scale} from 'react-native-size-matters';
import Images from '@config/Images';
import {Linking} from 'react-native';
import CardHome from '../../components/CardHome';
import Box from '@components/Box';

export default function Home() {
  return (
    <View style={{flex: 1}}>
      <StatusBar color={Colors.primary} />
      <View>
        <LinearGradient
          colors={[Colors.primary, '#3b5998', '#192f6a']}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 0}}
          style={styles.linearGradient}>
          <View>
            <View style={styles.options}>
              <Box flexDirection="row" justifyContent="center">
                <CardHome name="UAS" />
                <CardHome name="ISIET" />
                <CardHome name="FSEG" />
              </Box>
            </View>
          </View>
          <Box flexDirection="row" marginTop="m">
            <View style={styles.imageContainer}>
              <Image
                source={Images.logo}
                style={{height: scale(90), width: scale(90)}}
                resizeMode="contain"
              />
            </View>
            <View style={tailwind('flex-col justify-center items-center ')}>
              <Text style={tailwind('text-2xl text-white ml-3')}>
                Bienvenue chez UAS
              </Text>
              <Text style={tailwind('text-sm text-white mt-1')}>
                l’Université Arabe Des Sciences
              </Text>
            </View>
          </Box>
        </LinearGradient>
      </View>

      <View>
        <ImageBackground
          source={Images.maps}
          style={{
            height: scale(400),
            width: scale(350),
            marginTop: scale(-55),
          }}>
          <View style={tailwind('mt-20')}>
            <TouchableOpacity
              style={styles.telContainer}
              onPress={() => {
                Linking.openURL(`tel:+216 71 336 023`);
              }}>
              <Image
                source={Images.icons.phone}
                style={{height: scale(15), width: scale(15)}}
                tintColor={Colors.primary}
              />
              <Text style={tailwind('text-sm')}>+216 71 336 023</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.emailContainer, tailwind('mt-2')]}
              onPress={() => Linking.openURL('mailto:contact@uas.ens.tn')}>
              <Image
                source={Images.icons.email}
                style={{height: scale(15), width: scale(15)}}
                tintColor={Colors.primary}
              />
              <Text style={tailwind('text-sm')}>contact@uas.ens.tn</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}
var styles = StyleSheet.create({
  linearGradient: {
    height: scale(300),
    borderBottomRightRadius: scale(60),
    borderBottomLeftRadius: scale(60),
    padding: scale(10),
    elevation: 3,
  },
  imageContainer: {
    height: scale(100),
    width: scale(100),
    padding: scale(10),
    backgroundColor: Colors.white,
    borderRadius: scale(10),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  telContainer: {
    backgroundColor: 'white',
    width: scale(170),
    borderTopRightRadius: scale(22),
    borderBottomRightRadius: scale(22),
    height: scale(40),
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderLeftColor: Colors.primary,
    borderLeftWidth: scale(5),
  },
  emailContainer: {
    backgroundColor: 'white',
    width: scale(170),
    borderTopRightRadius: scale(22),
    borderBottomRightRadius: scale(22),
    height: scale(40),
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderLeftColor: Colors.primary,
    borderLeftWidth: scale(5),
  },
  options: {},
});

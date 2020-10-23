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

const RightMenuItem = ({title, image}) => {
  return (
    <TouchableOpacity style={[styles.emailContainer, tailwind('mt-2')]}>
      {image && (
        <Image
          source={image}
          style={{height: scale(15), width: scale(15)}}
          tintColor={Colors.primary}
        />
      )}
      <Text style={tailwind('text-sm')}>{title}</Text>
    </TouchableOpacity>
  );
};

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
          <View></View>
          <Box flexDirection="row" marginTop="m">
            <View style={styles.imageContainer}>
              <Image
                source={Images.logo}
                style={{height: scale(50), width: scale(50)}}
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
            height: scale(500),
            width: scale(350),
            marginTop: scale(-55),
          }}>
          <Box style={{backgroundColor: 'rgba(0,0,0,0.3)', flex: 1}}>
            <View style={tailwind('mt-20')}>
              <RightMenuItem title="UAS" />
              <RightMenuItem title="FSEG" />
              <RightMenuItem title="ESIET" />
            </View>
            <Box
              flexDirection="row"
              justifyContent="space-between"
              style={styles.bottomContainer}>
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
                style={styles.emailContainer2}
                onPress={() => {
                  Linking.openURL(`tel:+216 71 336 023`);
                }}>
                <Image
                  source={Images.icons.email}
                  style={{height: scale(15), width: scale(15)}}
                  tintColor={Colors.primary}
                />
                <Text style={tailwind('text-sm')}>contact@uas.com.tn</Text>
              </TouchableOpacity>
            </Box>
          </Box>
        </ImageBackground>
      </View>
    </View>
  );
}
var styles = StyleSheet.create({
  linearGradient: {
    height: scale(120),
    borderBottomRightRadius: scale(40),
    borderBottomLeftRadius: scale(40),
    padding: scale(10),
    elevation: 3,
  },
  imageContainer: {
    height: scale(60),
    width: scale(60),
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
  emailContainer2: {
    backgroundColor: 'white',
    width: scale(170),
    borderTopLeftRadius: scale(22),
    borderBottomLeftRadius: scale(22),
    height: scale(40),
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    //borderLeftColor: Colors.primary,
    borderRightColor: Colors.primary,
    //borderLeftWidth: scale(5),
    borderRightWidth: scale(5),
  },
  emailContainer: {
    backgroundColor: 'white',
    width: scale(100),
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
  bottomContainer: {
    marginTop: scale(230),
  },
});

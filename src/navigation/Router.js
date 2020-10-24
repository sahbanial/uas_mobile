import React from 'react';
import Home from '@containers/Home';
import PageDetails from '@containers/Details/PageEsietDetails';
import PageFsegDetails from '@containers/Details/PageFsegDetails';
import {Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Images from '@config/Images';
import {scale} from 'react-native-size-matters';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Formations from '@containers/formations';

const icons = {
  Home: Images.icons.home,
  News: Images.icons.news,
  Evenement: Images.icons.event,
  Contact: Images.icons.contact,
};
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
      },
    },
    Esiet: {
      screen: PageDetails,
      navigationOptions: {
        header: null,
      },
    },
    Fseg:{
      screen: PageFsegDetails,
      navigationOptions: {
        header: null,
      },
    },
    Formations:{
      screen: Formations,
      navigationOptions: {
        header: null,
      },
    },
    Contact: {
      screen: Home,
      navigationOptions: {
        header: null,
      },
    },
    Evenement: {
      screen: Home,
      navigationOptions: {
        header: null,
      },
    },
  },
);

export default createAppContainer(AppNavigator);

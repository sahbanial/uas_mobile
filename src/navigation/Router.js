import React from 'react';
import Home from '@containers/Home';
import PageDetails from '@containers/Details/PageDetails';
import {Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Images from '@config/Images';
import {scale} from 'react-native-size-matters';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const icons = {
  Home: Images.icons.home,
  News: Images.icons.news,
  Evenement: Images.icons.event,
  Contact: Images.icons.contact,
};
const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
      },
    },
    News: {
      screen: PageDetails,
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
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName = icons[routeName];

        // You can return any component that you like here!
        return (
          <Image
            source={iconName}
            style={{height: scale(20), width: scale(20)}}
            tintColor={tintColor}
          />
        );
      },
    }),
    tabBarOptions: {
      activeTintColor: Colors.primary,
      inactiveTintColor: 'gray',
    },
  },
);

export default createAppContainer(AppNavigator);

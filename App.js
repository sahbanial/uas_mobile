import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import tailwind from 'tailwind-rn';
import Layout from './src/layout/Layout';
import Home from '@containers/Home';
import {NavigationContainer} from '@react-navigation/native';
import Router from '@navigation/Router';
import {ThemeProvider} from '@shopify/restyle';
import theme from '@config/Theme';
import BottomNavBar from '@components/BottomNavBar';
import {NavigationProvider} from 'context/navigationContext';
import {ApolloProvider} from 'react-apollo';
import client from '@config/ApolloClient';
import OneSignal from 'react-native-onesignal';
const App: () => React$Node = () => {
  React.useEffect(() => {
    OneSignal.setLogLevel(6, 0);
    OneSignal.init('5d9a3b49-f642-4e75-8116-937006b51a60', {
      kOSSettingsKeyAutoPrompt: false,
      kOSSettingsKeyInAppLaunchURL: false,
      kOSSettingsKeyInFocusDisplayOption: 2,
    });

    OneSignal.addEventListener('received', onReceived);
    OneSignal.addEventListener('opened', onOpened);
    OneSignal.addEventListener('ids', onIds);
    () => {
      OneSignal.removeEventListener('received', onReceived);
      OneSignal.removeEventListener('opened', onOpened);
      OneSignal.removeEventListener('ids', onIds);
    };
  }, []);
  function onReceived(notification) {
    console.log('Notification received: ', notification);
  }

  function onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  function onIds(device) {
    console.log('Device info: ', device);
  }
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <NavigationProvider>
          <Layout>
            <Router />
          </Layout>
        </NavigationProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
